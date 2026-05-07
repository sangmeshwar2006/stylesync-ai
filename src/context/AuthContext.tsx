import React, { createContext, useContext, useEffect, useState } from 'react';
import { User, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { auth, db } from '../lib/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  isAdmin: boolean;
  loginLoading: boolean;
  authError: string | null;
  login: () => Promise<void>;
  logout: () => Promise<void>;
  clearAuthError: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [loginLoading, setLoginLoading] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setUser(user);
      if (user) {
        try {
          const userDoc = await getDoc(doc(db, 'users', user.uid));
          if (!userDoc.exists()) {
            await setDoc(doc(db, 'users', user.uid), {
              uid: user.uid,
              email: user.email,
              displayName: user.displayName,
              photoURL: user.photoURL,
              role: 'user',
              createdAt: new Date().toISOString()
            });
          }
          
          // Check admin status
          const adminDoc = await getDoc(doc(db, 'admins', user.uid));
          setIsAdmin(adminDoc.exists());
        } catch (error) {
          console.error("Error setting up user profile:", error);
        }
      } else {
        setIsAdmin(false);
      }
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const login = async () => {
    if (loginLoading) return;
    
    setLoginLoading(true);
    setAuthError(null);
    
    try {
      const provider = new GoogleAuthProvider();
      // Ensure provider parameters if needed, but defaults are usually fine
      await signInWithPopup(auth, provider);
    } catch (error: any) {
      console.error("Login Error:", error);
      
      let message = "An error occurred during authentication.";
      
      if (error.code === 'auth/popup-blocked') {
        message = "The authentication popup was blocked by your browser. Please allow popups for this site or try opening the app in a new tab.";
      } else if (error.code === 'auth/cancelled-popup-request') {
        message = "The authentication process was cancelled. Please try again.";
      } else if (error.code === 'auth/popup-closed-by-user') {
        message = "The authentication popup was closed before completion. Please try again.";
      } else if (error.message && error.message.includes('Pending promise was never set')) {
        message = "A system issue occurred with the login popup. Please refresh the page and try again.";
      }
      
      setAuthError(message);
    } finally {
      setLoginLoading(false);
    }
  };

  const logout = () => signOut(auth);
  const clearAuthError = () => setAuthError(null);

  return (
    <AuthContext.Provider value={{ 
      user, 
      loading, 
      isAdmin, 
      loginLoading, 
      authError, 
      login, 
      logout,
      clearAuthError
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) throw new Error('useAuth must be used within AuthProvider');
  return context;
}

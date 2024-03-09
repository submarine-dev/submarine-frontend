import { auth } from '@/lib/firebase/client';
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';

export const login = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    console.log(
      `${result.user.displayName}がログインしました`
    );
  } catch (error) {
    console.log(error);
  }
};
export const logout = async () => {
  try {
    await signOut(auth);
    console.log('ログアウトしました');
  } catch (error) {
    console.log(error);
  }
};

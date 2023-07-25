import {initializeApp} from 'firebase/app';
import {Timestamp, getFirestore, onSnapshot, query, where} from 'firebase/firestore';
import {browserSessionPersistence, getAuth, onAuthStateChanged, setPersistence} from 'firebase/auth';
import {getStorage} from 'firebase/storage';
import {derived, writable} from 'svelte/store';
import { doc, getDoc, setDoc, collection } from "firebase/firestore";
import type { Readable } from "svelte/store";
import type { Game, HomegameData, Player } from './types';

const firebaseConfig = {
    apiKey: "AIzaSyDhuMU4054pUTkAJYxJxlleVNOBpt31YHA",
    authDomain: "homegame-tracker.firebaseapp.com",
    projectId: "homegame-tracker",
    storageBucket: "homegame-tracker.appspot.com",
    messagingSenderId: "275735576912",
    appId: "1:275735576912:web:2a8fc1a244c24ed683ac55",
    measurementId: "G-ZZXPQEFBMH"
  };

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth(app);
export const storage = getStorage();


function userStore() {
  let unsubscribe: () => void;

  if (!auth || !globalThis.window) {
    console.warn('Auth is not initialized or not in browser');
    const { subscribe } = writable(null);
    return {
      subscribe,
    }
  }

  const { subscribe } = writable(auth?.currentUser ?? null, (set) => {
    unsubscribe = onAuthStateChanged(auth, (user) => {
      set(user);
    });
    return () => unsubscribe();
  });

  

  return {
    subscribe,
  }
}

export const user = userStore();


export function docStore<T>(
  path: string,
) {
  let unsubscribe: () => void;

  const docRef = doc(db, path);

  const {subscribe} = writable<T | null>(null, (set) => {
    onSnapshot(docRef, (snapshot) => {
      set((snapshot.data() as T) ?? null);
    });

    return () => unsubscribe();
});

  return {
    subscribe,
    ref: docRef,
    id: docRef.id,
  };
}




export const playerData: Readable<Player | null> = derived(user, ($user, set) => {
  if ($user) {
    return docStore<Player>(`players/${$user.uid}`).subscribe(set);
  }
  else {
    set(null);
  }
});

export const homegameData: Readable<HomegameData | null> = derived(user, ($user, set) => {
  if ($user) {
    return docStore<HomegameData>(`homegames/${$user.uid}`).subscribe(set);
  }
  else {
    set(null);
  }
});





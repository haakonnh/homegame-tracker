import { db } from "$lib/firebase";
import { auth } from "$lib/firebase";
import { query, where, getDocs, collection } from "firebase/firestore";
import { readable } from "svelte/store";
import { onAuthStateChanged } from "firebase/auth";
import { fetchHomegameData } from "./homegameStore";


export const playerStore = readable({ isAuthenticated: false, ownsHomegame: false }, (set) => {
    // Function to check if the user owns a homegame
    async function checkHomegameOwnership(userUID: string) {
      try {
        const homegamesRef = query(collection(db, 'homegames'), where('owner', '==', userUID));
        const querySnapshot = await getDocs(homegamesRef);
        return !querySnapshot.empty;
      } catch (error) {
        console.error('Error checking homegame ownership:', error);
        return false;
      }
    }

    // Listen to changes in the user's authentication state.
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Player is logged in.
        console.log("Auth changed." + user.uid)
        const userUID = user.uid;
        checkHomegameOwnership(userUID).then((ownsHomegame) => {
            fetchHomegameData(userUID);
            set({ isAuthenticated: true, ownsHomegame });
        });
      } else {
        // Player is logged out.
        set({ isAuthenticated: false, ownsHomegame: false });
      }
    });

    return unsubscribe;
  });
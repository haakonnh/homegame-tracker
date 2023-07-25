import { db } from "$lib/firebase";
import { query, where, getDocs, collection } from "firebase/firestore";
import { persisted } from "svelte-local-storage-store";

export const homegameStore: any = persisted('homegameData', null);

export function getHomegameDataFromLocalStorage() {
  if (typeof localStorage === 'undefined') {
    console.error('Error fetching homegame data from local storage: localStorage is undefined');
    return;
  }
  const storedData = localStorage.getItem('homegameData');
  return storedData ? JSON.parse(storedData) : null
}

export async function fetchHomegameData(userUID: string | null) {
  if (!userUID) {
    console.error('Error fetching homegame data: userUID is undefined');
  return;
  }

    try {
      const homegamesRef = query(collection(db, 'homegames'), where('owner', '==', userUID));
      const querySnapshot = await getDocs(homegamesRef);
      homegameStore.set(querySnapshot.docs[0].data());
      console.log('Homegame data fetched successfully');

    } catch (error) {
      console.error('Error fetching homegame data:', error);
      homegameStore.set({});
      throw error;
    }
  }
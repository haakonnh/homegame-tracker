import { db } from "$lib/firebase";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";

export async function addGameToHomegame(homegameId: string, newGameData: any) {
    try {
      const homegameRef = doc(db, 'homegames', homegameId);
  
      // Get the current games data from Firestore
      const homegameDoc = await getDoc(homegameRef);
      const gamesData = homegameDoc.data()?.games || {};
  
      // Add the new game data to the games map
      gamesData[new Date().toISOString()] = newGameData; // Use a unique key for the new game, such as the timestamp
  
      // Update the homegames document with the updated games data
      //await updateDoc(homegameRef, { games: gamesData });
      await setDoc(homegameRef, { games: gamesData }, { merge: true });
      console.log('Did update, success.')
  
      // Return the new games data
      return gamesData;
    } catch (error) {
      console.error('Error adding game to homegame in exported function:', error);
      throw error;
    }
  }
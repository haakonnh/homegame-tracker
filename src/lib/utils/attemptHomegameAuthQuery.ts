import { db, user } from "$lib/firebase";
import { query, collection, where, getDocs } from "firebase/firestore";


export const attemptHomegameAuthQuery = async (userUID: string | null) => {
    const homegameOfOwner = query(collection(db, 'homegames'), where('owner', '==', userUID));
    const querySnapshot = await getDocs(homegameOfOwner);

    if (querySnapshot.empty) {
        console.log("No homegame found for this user");
        return false;
    }

    return true;

};
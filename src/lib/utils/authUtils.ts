import { user, db, auth} from "$lib/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { get} from 'svelte/store';


export async function checkIfUserOwnsHomegame() {
    try {
        if (auth.currentUser)  {
            console.log(user);
            const userData = get(user);
            const homegamesRef = collection(db, "homegames");
            const q = query(homegamesRef, where("owner", "==", userData?.uid));
            const querySnapshot = await getDocs(q);

            if (!querySnapshot.empty) {
                console.log("User owns a homegame");
                return querySnapshot.docs[0].data();
            }
            else {
                console.log("User does not own a homegame");
                return null;
            }
        }
        
        else {
            console.log("User is not logged in");
            return null;
        }
    }
    catch (error) {
        console.log(error);
    }
}



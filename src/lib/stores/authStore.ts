import { auth } from "$lib/firebase";
import { signOut } from "firebase/auth";
import { writable } from "svelte/store";


export const authStore = writable( {
    isLoading: null,
    currentUser: null,
}
)


export const authHandlers = {
    logout: async () => {
        await signOut(auth)
    },
    

}
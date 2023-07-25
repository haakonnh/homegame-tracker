// authUtils.js
import { auth } from '$lib/firebase';
import type { User } from 'firebase/auth';
import { writable, type Writable } from 'svelte/store';

export interface UserData extends User {
  token: string;
  // Add more properties as needed (e.g., email, displayName, photoURL, etc.)
}

// Create a writable store for user authentication state
export const userStore: Writable<UserData | null> = writable();

// Function to subscribe to the user's authentication state changes
export function subscribeToAuthChanges() {
  auth.onAuthStateChanged((user) => {
    if (user) {
      // If the user is logged in, update the user store with the user data
      user.getIdToken().then((token) => {
        const userData: UserData = {
          ...user,
          token,
        };
        // Update the user store with the user data
        userStore.set(userData);
      });
    } else {
      // If the user is logged out, clear the user store
      userStore.set(null);
    }
  });
}

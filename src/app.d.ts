// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}

		interface Locals {
			userID: string | null;
		}


		interface PageData {
			isLoggedIn: boolean;
			uid: string | null;
		}
	}
}

export {PageData};

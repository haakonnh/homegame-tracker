// See https://kit.svelte.dev/docs/types#app

import type { HomegameData } from "$lib/types";
import 'unplugin-icons/types/svelte';

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}

		interface Locals {
			user: {
				name: string
				role: string
				id: string
				readable: any
			}

			homegameData: any
		}


		interface PageData {
			isLoggedIn: boolean;
			uid: string | null;
			homegameData: HomegameData | null;
		}
	}
}

export {PageData};

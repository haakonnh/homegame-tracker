import type { HomegameData } from "$lib/types";
import { writable, type Writable } from "svelte/store";


export const homegameLocalStorage: any = writable(null);
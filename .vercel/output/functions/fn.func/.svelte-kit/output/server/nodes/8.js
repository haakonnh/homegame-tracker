import * as universal from '../entries/pages/_homegame_/_page.ts.js';
import * as server from '../entries/pages/_homegame_/_page.server.ts.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_homegame_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/[homegame]/+page.ts";
export { server };
export const server_id = "src/routes/[homegame]/+page.server.ts";
export const imports = ["_app/immutable/nodes/8.ff297987.js","_app/immutable/chunks/scheduler.029ef716.js","_app/immutable/chunks/index.2a4c170a.js","_app/immutable/chunks/each.e59479a4.js"];
export const stylesheets = [];
export const fonts = [];

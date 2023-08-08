import * as server from '../entries/pages/add-game/_page.server.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/add-game/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/add-game/+page.server.ts";
export const imports = ["_app/immutable/nodes/3.41a1524f.js","_app/immutable/chunks/scheduler.029ef716.js","_app/immutable/chunks/index.2a4c170a.js","_app/immutable/chunks/each.e59479a4.js"];
export const stylesheets = ["_app/immutable/assets/3.9a11b94a.css"];
export const fonts = [];

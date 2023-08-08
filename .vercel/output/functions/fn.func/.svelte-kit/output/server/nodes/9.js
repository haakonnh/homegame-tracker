import * as server from '../entries/pages/_homegame_/leaderboard/_page.server.ts.js';

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_homegame_/leaderboard/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[homegame]/leaderboard/+page.server.ts";
export const imports = ["_app/immutable/nodes/9.67a3de1d.js","_app/immutable/chunks/scheduler.029ef716.js","_app/immutable/chunks/index.2a4c170a.js","_app/immutable/chunks/each.e59479a4.js"];
export const stylesheets = [];
export const fonts = [];

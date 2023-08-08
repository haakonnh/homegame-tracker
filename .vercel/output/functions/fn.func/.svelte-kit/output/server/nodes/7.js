import * as server from '../entries/pages/register/_page.server.ts.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/register/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/register/+page.server.ts";
export const imports = ["_app/immutable/nodes/7.175eb46f.js","_app/immutable/chunks/scheduler.029ef716.js","_app/immutable/chunks/index.2a4c170a.js"];
export const stylesheets = ["_app/immutable/assets/7.eaa2f48c.css"];
export const fonts = [];

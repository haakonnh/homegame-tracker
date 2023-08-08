

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/create-homegame/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.2081457c.js","_app/immutable/chunks/scheduler.029ef716.js","_app/immutable/chunks/index.2a4c170a.js"];
export const stylesheets = [];
export const fonts = [];

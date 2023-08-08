

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.90cb9643.js","_app/immutable/chunks/scheduler.029ef716.js","_app/immutable/chunks/index.2a4c170a.js","_app/immutable/chunks/singletons.0a1b5808.js","_app/immutable/chunks/index.c24a7714.js"];
export const stylesheets = [];
export const fonts = [];

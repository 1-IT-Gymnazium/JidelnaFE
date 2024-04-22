

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.n2-pATJF.js","_app/immutable/chunks/scheduler.BK7OUWki.js","_app/immutable/chunks/index.B2sn9U7M.js"];
export const stylesheets = ["_app/immutable/assets/2.m85iedTj.css","_app/immutable/assets/global.CmJ7r3HC.css"];
export const fonts = [];

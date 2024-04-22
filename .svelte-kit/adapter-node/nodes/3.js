

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.B1tHjyhq.js","_app/immutable/chunks/scheduler.BK7OUWki.js","_app/immutable/chunks/index.B2sn9U7M.js","_app/immutable/chunks/index.9_oGSIBb.js","_app/immutable/chunks/ApiService.DcW7cWTv.js"];
export const stylesheets = ["_app/immutable/assets/3.DVLwfzqX.css","_app/immutable/assets/global.CmJ7r3HC.css"];
export const fonts = [];

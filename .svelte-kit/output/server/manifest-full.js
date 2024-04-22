export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["1itBudova.jpeg","1itglogo.png","favicon.png","xlxs.jpeg"]),
	mimeTypes: {".jpeg":"image/jpeg",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.Dj2LuQ62.js","app":"_app/immutable/entry/app.xIjzk3WI.js","imports":["_app/immutable/entry/start.Dj2LuQ62.js","_app/immutable/chunks/entry.DEIuBdly.js","_app/immutable/chunks/scheduler.BK7OUWki.js","_app/immutable/chunks/index.9_oGSIBb.js","_app/immutable/entry/app.xIjzk3WI.js","_app/immutable/chunks/scheduler.BK7OUWki.js","_app/immutable/chunks/index.B2sn9U7M.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/admin",
				pattern: /^\/admin\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/lunches",
				pattern: /^\/lunches\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

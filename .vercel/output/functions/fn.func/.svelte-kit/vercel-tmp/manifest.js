export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","moneypoker.jpg","pokerchips.png","poker_favicon.png","vectorchip.avif"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".avif":"image/avif"},
	_: {
		client: {"start":"_app/immutable/entry/start.d68a3ca7.js","app":"_app/immutable/entry/app.720c1ae6.js","imports":["_app/immutable/entry/start.d68a3ca7.js","_app/immutable/chunks/scheduler.029ef716.js","_app/immutable/chunks/singletons.0a1b5808.js","_app/immutable/chunks/index.c24a7714.js","_app/immutable/entry/app.720c1ae6.js","_app/immutable/chunks/scheduler.029ef716.js","_app/immutable/chunks/index.2a4c170a.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js')),
			__memo(() => import('../output/server/nodes/5.js')),
			__memo(() => import('../output/server/nodes/6.js')),
			__memo(() => import('../output/server/nodes/7.js')),
			__memo(() => import('../output/server/nodes/8.js')),
			__memo(() => import('../output/server/nodes/9.js'))
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
				id: "/add-game",
				pattern: /^\/add-game\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/create-homegame",
				pattern: /^\/create-homegame\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/logout",
				pattern: /^\/logout\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/register",
				pattern: /^\/register\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/[homegame]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"homegame","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/[homegame]/leaderboard",
				pattern: /^\/([^/]+?)\/leaderboard\/?$/,
				params: [{"name":"homegame","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

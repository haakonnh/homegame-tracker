import { c as create_ssr_component, e as escape, a as each } from "../../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${!data ? `<h1 class="h1" data-svelte-h="svelte-a85y6r">No data</h1>` : `<main class="m-auto w-2/3"><h1 class="m-auto pt-10 pb-10 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"><mark class="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">${escape(data.homegameData.name)}</mark> Leaderboard</h1> <div class="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">${each(data.homegameData.players, (player, index) => {
    return ` <div class="card p-4 bg-gradient-to-b bg-base-200 shadow-xl hover:shadow-xl"><div class="card-body"><h2 class="card-title text-white font-bold">${escape(player.name.toLocaleUpperCase())}</h2> <p class="${[
      "text-md text-primary-content",
      (player.totalScore > 0 ? "text-green-600" : "") + " " + (player.totalScore < 0 ? "text-red-500" : "")
    ].join(" ").trim()}">Total Score: ${escape(player.totalScore > 0 ? "+" : "")}${escape(player.totalScore)}</p>  ${player.totalScore > 0 ? `<div class="card-actions justify-end text-2xl" data-svelte-h="svelte-vfytcq">🎉
                </div>` : `${player.totalScore < 0 ? `<div class="card-actions justify-end text-2xl" data-svelte-h="svelte-n3m5iu">😢
                </div>` : ``}`}</div> </div>`;
  })}</div></main>`}`;
});
export {
  Page as default
};

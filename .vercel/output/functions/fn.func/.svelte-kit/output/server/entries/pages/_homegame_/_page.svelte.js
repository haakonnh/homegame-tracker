import { c as create_ssr_component, e as escape, a as each, v as validate_component } from "../../../chunks/ssr.js";
const GameTable = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { game } = $$props;
  let { gameNumber } = $$props;
  [game.players];
  if ($$props.game === void 0 && $$bindings.game && game !== void 0)
    $$bindings.game(game);
  if ($$props.gameNumber === void 0 && $$bindings.gameNumber && gameNumber !== void 0)
    $$bindings.gameNumber(gameNumber);
  return `<div class="card card-hover variant-glass border border-primary-200 w-96 shadow-xl bg-neutral mt-5"><div class="card-body "><h2 class="card-header text-xl text-center text-primary-500">Game ${escape(gameNumber + 1)}</h2> <div class="overflow-x-auto p-4"><table class="table table-zebra"> <thead data-svelte-h="svelte-18dubau"><tr><th></th> <th>Name</th> <th>Winnings</th></tr></thead> <tbody>${each(game.players, (player, index) => {
    return `<tr><th>${escape(index + 1)}</th> <td>${escape(player.name)}</td> <td>${escape(player.score)}</td> </tr>`;
  })} </tbody></table></div></div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<main class="container mx-auto px-4">${data.homegameData ? `<h1 class="mt-5 text-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"><mark class="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">${escape(data.homegameData.name.toLocaleUpperCase())}</mark> Homepage</h1> <div class="grid grid-cols-2 content-center w-1/2 m-auto py-5 gap-4"><div class="w-full" data-svelte-h="svelte-idalyw"><a href="/add-game" class="btn btn-xl bg-primary-500 w-full ">Add game</a></div> <div class="w-full"><a href="${escape(data.homegameData.name, true) + "/leaderboard"}" class="btn bg-primary-500 btn-xl w-full">Leaderboard</a></div></div> <div class="grid grid-cols-3">${data.homegameData.games ? `${each(data.homegameData.games, (game, index) => {
    return `${validate_component(GameTable, "GameTable").$$render($$result, { game, gameNumber: index }, {}, {})}`;
  })}` : `<div class="grid place-items-center h-24" data-svelte-h="svelte-ukoxha"><p class="text-2xl font-bold text-gray-500 dark:text-gray-400">No games yet</p></div>`}</div>` : `<div class="content-center" data-svelte-h="svelte-18odizg"><span class="loading loading-spinner text-primary w-40"></span> <span class="loading loading-spinner text-secondary w-40"></span> <span class="loading loading-spinner text-accent w-40"></span> <span class="loading loading-spinner text-neutral w-40 "></span> <span class="loading loading-spinner text-info w-40"></span> <span class="loading loading-spinner text-success w-40"></span> <span class="loading loading-spinner text-warning w-40 mt-20"></span></div>`}</main>`;
});
export {
  Page as default
};

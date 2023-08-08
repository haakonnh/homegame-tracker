import { c as create_ssr_component, e as escape, d as add_attribute } from "../../../chunks/ssr.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "h2.svelte-1j0xkjc{padding:10px;border:5px solid #000}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let amount = 0;
  let isSubmitted = false;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div>${data.homegameData && !isSubmitted ? `<div class="grid justify-center absolute w-full"><a href="${"../" + escape(data.homegameData.name, true)}" class="btn btn-secondary w-full mt-5 relative">Return to homepage</a></div>` : ``} ${`<div class="flex items-center justify-center min-h-screen w-full space-x-10"><h1 class="mt-5 text-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white" data-svelte-h="svelte-fu2jim">Add a new 
        <mark class="px-2 text-white bg-purple-600 rounded dark:bg-purple-600-">GAME</mark></h1> <input type="number" name="amount" placeholder="Number of players" class="input input-primary input-bordered w-full max-w-xs"${add_attribute("value", amount, 0)}> <button class="btn btn-primary w-1/4" data-svelte-h="svelte-12lgtke">Submit</button></div>`} </div>`;
});
export {
  Page as default
};

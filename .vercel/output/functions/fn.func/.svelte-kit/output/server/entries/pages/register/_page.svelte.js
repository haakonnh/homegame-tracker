import { c as create_ssr_component } from "../../../chunks/ssr.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-30m502{display:flex;flex-direction:column;align-items:center;justify-content:center}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  $$result.css.add(css);
  return `<form action="?/register" method="POST"><main class="svelte-30m502"><div class="card w-1/3 bg-primary text-primary-content"><div class="card-body"><h2 class="card-title text-4xl" data-svelte-h="svelte-1bojkbg">Register!</h2> <div data-svelte-h="svelte-aqhjur"><label class="label" for="username"><span class="label-text text-primary-content text-base">Username</span></label> <input type="text" name="username" id="username" required class="input input-primary text-white"></div> <div data-svelte-h="svelte-15uuvod"><label class="label" for="password"><span class="label-text text-primary-content text-base">Password</span></label> <input type="password" name="password" id="password" required class="input input-primary text-white"></div> ${form?.user ? `<div class="alert alert-error" data-svelte-h="svelte-9gtple"><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Username is taken.</span></div>` : ``} <div class="card-actions justify-end" data-svelte-h="svelte-1sxczzu"><button type="submit" class="btn btn-secondary btn-lg">Register</button></div></div></div></main> </form>`;
});
export {
  Page as default
};

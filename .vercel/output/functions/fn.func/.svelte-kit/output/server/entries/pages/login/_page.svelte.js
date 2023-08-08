import { c as create_ssr_component } from "../../../chunks/ssr.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-1hg8yjq{display:flex;flex-direction:column;align-items:center;justify-content:center}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  $$result.css.add(css);
  return `<main class="h-full w-full svelte-1hg8yjq"><div class="card w-1/3 bg-primary text-primary-content m-auto p-6 border-4 border-primary-500"><form action="?/login" method="POST"><header class="card-header" data-svelte-h="svelte-1mftf5x"><h2 class="text-5xl mb-10">Login!</h2></header> <div data-svelte-h="svelte-1bqv413"><label class="label" for="username"><span class="label-text text-primary-content text-base">Username</span> <input type="text" name="username" id="username" required class="input p-4 text-white"></label></div> <div data-svelte-h="svelte-lbbevv"><label class="label" for="password"><span class="label-text text-primary-content text-base">Password</span> <input type="password" name="password" id="password" required class="input p-4 text-white"></label></div> ${form?.fail ? `<div class="alert alert-error" data-svelte-h="svelte-1wcivs8"><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Username and password required.</span></div>` : ``} ${form?.credentials ? `<div class="alert alert-error" data-svelte-h="svelte-n13zmw"><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>You have entered wrong credentials.</span></div>` : ``} <footer class="card-footer mt-5 w-full " data-svelte-h="svelte-1e5lpps"><button type="submit" class="btn bg-secondary-500 btn-lg m-auto">Login</button></footer></form></div> </main>`;
});
export {
  Page as default
};

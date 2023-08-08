import { r as redirect } from "../../../chunks/index2.js";
const load = async () => {
  throw redirect(303, "/");
};
const actions = {
  default: async ({ cookies }) => {
    cookies.set("session", "", {
      path: "/",
      expires: /* @__PURE__ */ new Date(0)
    });
    throw redirect(303, "/");
  }
};
export {
  actions,
  load
};

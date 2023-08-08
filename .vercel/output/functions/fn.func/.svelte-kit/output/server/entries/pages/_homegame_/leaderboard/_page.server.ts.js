import { r as redirect } from "../../../../chunks/index2.js";
const load = async ({ locals, params }) => {
  if (!locals.user) {
    throw redirect(303, "/login");
  }
  if (!locals.homegameData) {
    throw redirect(303, "/create-homegame");
  }
  if (params.homegame !== locals.homegameData.name) {
    throw redirect(303, `/${locals.homegameData.name}`);
  }
  return {
    homegameData: locals.homegameData
  };
};
export {
  load
};

import { r as redirect, f as fail } from "../../../chunks/index2.js";
import bcrypt from "bcrypt";
import { d as db } from "../../../chunks/database.js";
const load = async ({ locals }) => {
  if (locals.user) {
    throw redirect(303, "/");
  }
};
const register = async ({ request }) => {
  const data = await request.formData();
  const username = data.get("username");
  const password = data.get("password");
  console.log({ username, password });
  if (typeof username !== "string" || typeof password !== "string" || !username) {
    return fail(400, { fail: true });
  }
  const user = await db.user.findUnique({
    where: { username }
  });
  if (user) {
    return fail(400, { user: true });
  }
  await db.user.create({
    data: {
      username,
      passwordHash: await bcrypt.hash(password, 10),
      userAuthToken: crypto.randomUUID(),
      role: { connect: {
        name: "USER"
        /* USER */
      } }
    }
  });
  throw redirect(303, "/login");
};
const actions = { register };
export {
  actions,
  load
};

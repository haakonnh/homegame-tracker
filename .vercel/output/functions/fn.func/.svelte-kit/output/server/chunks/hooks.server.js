import { d as db } from "./database.js";
const handle = async ({ event, resolve }) => {
  const session = event.cookies.get("session");
  if (!session) {
    return await resolve(event);
  }
  const user = await db.user.findUnique({
    where: { userAuthToken: session },
    select: { username: true, role: true, id: true }
  });
  if (typeof user === "undefined") {
    return resolve(event);
  }
  if (!user) {
    return resolve(event);
  }
  const homegameData = await db.homegames.findUnique({
    where: { ownerId: user.id },
    select: {
      players: true,
      name: true,
      games: {
        include: {
          players: true
        }
      }
    }
  });
  event.locals.user = {
    name: user.username,
    role: user.role.name,
    id: user.id
  };
  if (homegameData) {
    event.locals.homegameData = homegameData;
  }
  return resolve(event);
};
export {
  handle
};

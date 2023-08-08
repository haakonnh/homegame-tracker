import { d as db } from "../../../chunks/database.js";
import { r as redirect } from "../../../chunks/index2.js";
const actions = {
  default: async ({ locals, request }) => {
    if (!locals.user) {
      throw redirect(303, "/login");
    }
    if (!locals.homegameData) {
      throw redirect(303, "/create-homegame");
    }
    const formData = await request.formData();
    console.log(formData);
    const players = [];
    let currentPlayer = {};
    for (const [key, value] of formData.entries()) {
      if (key === "name") {
        currentPlayer.name = value;
      } else if (key === "winnings") {
        currentPlayer.score = parseInt(value.toString());
        currentPlayer.totalScore = parseInt(value.toString());
        players.push({ ...currentPlayer });
        currentPlayer = {};
      }
    }
    const homegameName = locals.homegameData.name;
    const playerArray = [];
    for (const player of players) {
      const newPlayer = await db.player.upsert({
        where: { homegameName_name: { homegameName, name: player.name } },
        update: {
          score: player.score,
          totalScore: { increment: player.score }
        },
        create: {
          homegame: { connect: { name: homegameName } },
          name: player.name,
          score: player.score,
          totalScore: player.score
        }
      });
      playerArray.push(newPlayer);
    }
    await db.game.create({
      data: {
        homegame: { connect: { name: locals.homegameData.name } },
        players: {
          connect: playerArray.map((player) => ({ id: player.id }))
        }
      },
      include: {
        players: true
      }
    });
    throw redirect(303, `/${locals.homegameData.name}`);
  }
};
export {
  actions
};

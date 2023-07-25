import type { Timestamp } from "firebase/firestore";

export interface Player {
    delta: number;
    name: string;
    win: boolean;
}

export interface Game {
    date: Timestamp;
    players: { [playerId: string]: Player };
}

export interface HomegameData {
    name: string;
    owner: string;
    homegameId: string;
    games: { [gameId: string]: Game };
}
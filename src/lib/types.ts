
export interface Player {
    score: number;
    name: string;
}

export interface Game {
    //date: Timestamp;
    players: any[];
}

export interface HomegameData {
    name: string;
    games: any[];
}
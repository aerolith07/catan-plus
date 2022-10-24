import { Schema } from "mongoose";

type Player = {

}

type Config = {

}

export type GameType = {
    name: string
    players: Player
    config: Config
}

const Game = new Schema({
    name: {type: String }
})

export default Game;

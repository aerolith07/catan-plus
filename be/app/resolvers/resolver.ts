import mongoose from "mongoose";
import {GameType} from "../model/game";
import {GameInput, Resolvers } from "../types/generated";

type GameModelType = mongoose.Model<GameType>

type Context = {
  db: {
    game:GameModelType
  }
}

// export const resolver: any = {
export const resolver: Resolvers<Context> = {
  Query: {
    // getGame(id: string){
    //   return "aaa"
    // }
  },
  Mutation: {
    async createGame(parent, {gameInput}, {db}) {
      const a = await db.game.create(gameInput)
      console.log(a)
      return a;
    }
  }
};
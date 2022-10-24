import { Schema } from 'mongoose';

export const GameSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  players: { type: [String], required: false },
});

export interface Game {
  id: string;
  title: string;
  description: string;
  price: number;
  players: string[];
}

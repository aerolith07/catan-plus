import { Schema } from 'mongoose';

export const PlayerSchema = new Schema({
  name: { type: String, required: true },
  resources: {
    brick: { type: Number, default: 0 },
    wood: { type: Number, default: 0 },
    sheep: { type: Number, default: 0 },
    grain: { type: Number, default: 0 },
    rock: { type: Number, default: 0 },
  },
});

export interface Player {
  name: string;
  resources: {
    brick: number;
    wood: number;
    sheep: number;
    grain: number;
    rock: number;
  };
}

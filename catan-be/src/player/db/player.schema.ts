import { Schema } from 'mongoose';

export const PlayerSchema = new Schema({
  name: { type: String, required: true },
  resources: {
    type: {
      brick: { type: Number, default: 0 },
      wood: { type: Number, default: 0 },
      sheep: { type: Number, default: 0 },
      grain: { type: Number, default: 0 },
      rock: { type: Number, default: 0 },
    },
    required: true,
  },
});

export type Player = typeof PlayerSchema;

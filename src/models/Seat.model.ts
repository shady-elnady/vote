import { model, Schema } from "mongoose";

import { SeatInterface } from "@src/interfaces";

/// export interface SeatInterfaceDocument extends Document, SeatInterface {
///   /// comparePassword(password: string): Promise<boolean>;
///   /// changedPasswordAfter(JWTTimestamp: number): boolean;
///   /// createJWT(): Promise<void>;
///   /// isAdmin(): boolean;
/// }

const SeatSchema = new Schema<SeatInterface>(
  {
    election: {
      type: Schema.Types.ObjectId,
      ref: "Election",
      required: [true, "Election is required"],
    },
    title: { type: String, required: true },
    count: { type: Number, required: true },
    clerk: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User is required"],
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export const Seat = model<SeatInterface>("Seat", SeatSchema);

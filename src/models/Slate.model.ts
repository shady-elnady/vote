import { model, Schema } from "mongoose";

import { SlateInterface } from "@src/interfaces";

/// export interface SlateInterfaceDocument extends Document, SlateInterface {
///   /// comparePassword(password: string): Promise<boolean>;
///   /// changedPasswordAfter(JWTTimestamp: number): boolean;
///   /// createJWT(): Promise<void>;
///   /// isAdmin(): boolean;
/// }

const slateSchema = new Schema<SlateInterface>(
  {
    election: {
      type: Schema.Types.ObjectId,
      ref: "ُElection",
      required: [true, "ُElection is required"],
    },
    clerk: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User is required"],
    },
    title: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export const Slate = model<SlateInterface>("Slate", slateSchema);

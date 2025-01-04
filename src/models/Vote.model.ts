import { model, Schema } from "mongoose";

import { VoteInterface } from "@src/interfaces";

/// export interface VoteInterfaceDocument extends Document, VoteInterface {
///   /// comparePassword(password: string): Promise<boolean>;
///   /// changedPasswordAfter(JWTTimestamp: number): boolean;
///   /// createJWT(): Promise<void>;
///   /// isAdmin(): boolean;
/// }

const voteSchema = new Schema<VoteInterface>(
  {
    election: {
      type: Schema.Types.ObjectId,
      ref: "Election",
      required: [true, "Election is required"],
    },
    voter: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User is required"],
    },
    candidate: {
      type: Schema.Types.ObjectId,
      ref: "Candidate",
      required: [true, "Candidate is required"],
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export const Vote = model<VoteInterface>("Vote", voteSchema);

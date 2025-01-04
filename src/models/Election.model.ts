import { model, Schema } from "mongoose";

import { ElectionInterface } from "@src/interfaces";

/// export interface ElectionInterfaceDocument extends Document, ElectionInterface {
///   /// comparePassword(password: string): Promise<boolean>;
///   /// changedPasswordAfter(JWTTimestamp: number): boolean;
///   /// createJWT(): Promise<void>;
///   /// isAdmin(): boolean;
/// }

const electionSchema = new Schema<ElectionInterface>(
  {
    title: { type: String, required: true },
    description: { type: String, required: false },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
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

export const Election = model<ElectionInterface>("Election", electionSchema);

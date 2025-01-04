import { model, Schema } from "mongoose";

import { CandidateInterface } from "@src/interfaces";

/// export interface CandidateInterfaceDocument extends Document, CandidateInterface {
///   /// comparePassword(password: string): Promise<boolean>;
///   /// changedPasswordAfter(JWTTimestamp: number): boolean;
///   /// createJWT(): Promise<void>;
///   /// isAdmin(): boolean;
/// }

const candidateSchema = new Schema<CandidateInterface>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User is required"],
    },
    clerk: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User is required"],
    },
    election: {
      type: Schema.Types.ObjectId,
      ref: "Election",
      required: [true, "Election is required"],
    },
    seat: {
      type: Schema.Types.ObjectId,
      ref: "Seat",
      required: [true, "Seat is required"],
    },
    slate: {
      type: Schema.Types.ObjectId,
      ref: "Slate",
    },
    symbolImage: {
      url: String,
      cloudinary_id: String,
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export const Candidate = model<CandidateInterface>(
  "Candidate",
  candidateSchema
);

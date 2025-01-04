import { model, Schema } from "mongoose";

import { gendersEnum } from "@src/constants";
import { ProfileInterface } from "@src/interfaces";

/// export interface ProfileInterfaceDocument extends Document, ProfileInterface {
///   /// document level operations
///   comparePassword(password: string): Promise<boolean>;
///   changedPasswordAfter(JWTTimestamp: number): boolean;
///   createJWT(): Promise<void>;
///   isAdmin(): boolean;
/// }

const profileSchema = new Schema<ProfileInterface>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User is required"],
    },
    bio: { type: String },
    gender: {
      type: String,
      trim: true,
      lowercase: false,
      enum: [gendersEnum.Male, gendersEnum.Female],
      default: gendersEnum.Male,
    },
    address: { type: String },
    birthDate: { type: Date },
    profileImage: {
      type: String,
      required: [false, "Please provide User profile image"],
      trim: true,
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export const Profile = model<ProfileInterface>("Profile", profileSchema);

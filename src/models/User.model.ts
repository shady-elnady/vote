import { model, Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { environmentConfig } from "@src/configs/custom-environment-variables.config";
import { authorizationRoles } from "@src/constants";
import { UserInterface } from "@src/interfaces";

export interface UserInterfaceDocument extends Document, UserInterface {
  // document level operations
  comparePassword(password: string): Promise<boolean>;
  changedPasswordAfter(JWTTimestamp: number): boolean;
  createJWT(): Promise<void>;
  isAdmin(): boolean;
}

const userSchema = new Schema<UserInterfaceDocument>(
  {
    name: {
      type: String,
      required: [true, "Please provide name"],
      maxLength: 100,
      minlength: 3,
      trim: true,
      uppercase: true,
    },
    email: {
      type: String,
      required: [true, "Please provide E-Mail"],
      unique: true,
    },
    password: { type: String, required: true, select: false },
    passwordChangeAt: { type: Date },
    refreshToken: { type: String },
    // role: {
    //   type: String,
    //   enum: ["User", "Admin", "Voter", "Elector"],
    //   default: "User",
    // },
    role: {
      type: String,
      trim: true,
      lowercase: false,
      enum: [
        authorizationRoles.User,
        authorizationRoles.Admin,
        authorizationRoles.Voter,
        authorizationRoles.Elector,
      ],
      default: authorizationRoles.User,
    },
    active: { type: Boolean, default: true },
    isVerified: { type: Boolean, default: false },
    isDeleted: { type: Boolean, default: false },
    emailVerificationLinkToken: { type: String },
    accessToken: { type: String },
    confirmationCode: { type: String },
    resetPasswordToken: { type: String },
    resetPasswordExpires: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

// Track password change time
userSchema.pre("save", function (next) {
  if (!this.isModified("password") || this.isNew) return next();
  this.passwordChangeAt = new Date(Date.now() - 1000); // prevent issues with timing
  next();
});

// Method to compare passwords
userSchema.methods.comparePassword = async function (
  password: string
): Promise<boolean> {
  return await bcrypt.compare(password, this.password);
};

// Method to check if the password was changed after a given JWT timestamp
userSchema.methods.changedPasswordAfter = function (
  JWTTimestamp: number
): boolean {
  if (this.passwordChangeAt) {
    const changedTimeStamp = this.passwordChangeAt.getTime() / 1000;
    return JWTTimestamp < changedTimeStamp;
  }
  return false; // if no password change date, return false
};

userSchema.methods.createJWT = function () {
  const payload = {
    userId: this._id,
    email: this.email,
    name: this.firstName,
    dateOfBirth: this.dateOfBirth,
    gender: this.gender,
    role: this.role,
  };

  return jwt.sign(payload, environmentConfig.TOKEN_SECRET as string, {
    expiresIn: environmentConfig.JWT_EXPIRE_TIME,
  });
};

userSchema.methods.isAdmin = function (): boolean {
  return this.role === "Admin";
};

/// export const User = model<UserInterfaceDocument>("User", userSchema);

export const User = model<UserInterfaceDocument>("User", userSchema);

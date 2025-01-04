import { Document } from "mongoose";

export interface UserInterface extends Document {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  passwordChangeAt: Date;
  // role: "User" | "Admin" | "Voter" | "Elector";
  role: string;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
  passwordConfirm: string;
  refreshToken?: string;
  age: number;
  bio?: string;
  gender?: string;
  isVerified?: boolean;
  isDeleted?: boolean;
  address?: string;
  dateOfBirth?: Date;
  emailVerificationLinkToken?: string;
  accessToken?: string;
  confirmationCode?: string;
  resetPasswordToken?: string;
  resetPasswordExpires?: string;
  profileImage?: {
    url: string;
    cloudinary_id: string;
  }[];
}

import { Document } from "mongoose";

import { UserInterface } from "@src/interfaces";

export interface ProfileInterface extends Document {
  user: UserInterface;
  bio?: string;
  gender?: string;
  address?: string;
  birthDate?: Date;
  profileImage?: {
    url: string;
    cloudinary_id: string;
  }[];
  createdAt: Date;
  updatedAt: Date;
}

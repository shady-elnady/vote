import { Document } from "mongoose";

import {
  UserInterface,
  ElectionInterface,
  SeatInterface,
  SlateInterface,
} from "@src/interfaces";

export interface CandidateInterface extends Document {
  user: UserInterface;
  clerk: UserInterface; // Employee clerk
  election: ElectionInterface;
  seat: SeatInterface;
  slate?: SlateInterface;
  symbolImage: {
    url: string;
    cloudinary_id: string;
  }[];
  createdAt: Date;
  updatedAt: Date;
}

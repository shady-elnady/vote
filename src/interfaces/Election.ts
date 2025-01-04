import { Document } from "mongoose";

import { UserInterface } from "./User";

export interface ElectionInterface extends Document {
  title: string;
  description?: string;
  clerk: UserInterface;
  startDate: Date;
  endDate: Date;
  createdAt: Date;
  updatedAt: Date;
}

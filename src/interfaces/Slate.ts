import { Document } from "mongoose";

import { ElectionInterface, UserInterface } from "@src/interfaces";

// قوائم المرشحين
export interface SlateInterface extends Document {
  election: ElectionInterface;
  clerk: UserInterface;
  title: string;
  createdAt: Date;
  updatedAt: Date;
}

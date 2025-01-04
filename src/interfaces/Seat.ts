import { Document } from "mongoose";

import { ElectionInterface, UserInterface } from "@src/interfaces";

/// (  الرئيس -  نائب الرئيس) مسميات المرشحين فى الأنتخابات
export interface SeatInterface extends Document {
  election: ElectionInterface;
  title: string;
  count: number;
  clerk: UserInterface;
  createdAt: Date;
  updatedAt: Date;
}

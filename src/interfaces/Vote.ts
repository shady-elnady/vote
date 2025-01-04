import { Document } from "mongoose";

import {
  UserInterface,
  ElectionInterface,
  CandidateInterface,
} from "@src/interfaces";

/// التصويت
export interface VoteInterface extends Document {
  election: ElectionInterface;
  voter: UserInterface;
  candidate: CandidateInterface;
  createdAt: Date;
  updatedAt: Date;
}

import express from "express";
import {
  checkIfAdmin,
  protect,
  createUser,
  getUser,
  getAllUsers,
  updateUser,
  deleteUser,
} from "@src/controllers";

const router = express.Router();

router
  .route("/")
  .post(protect, checkIfAdmin, createUser)
  .get(protect, getAllUsers);
router.route("/:id").patch(updateUser).delete(deleteUser).get(protect, getUser);

export const userRouter = router;

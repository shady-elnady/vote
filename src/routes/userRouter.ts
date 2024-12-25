import express from "express";
import { checkIfAdmin, protect } from "../controller/authController";
import { createUser, getUser, getAllUsers, updateUser, deleteUser } from "../controller/userController";

const router = express.Router();

router.route("/").post(protect,checkIfAdmin, createUser).get(protect,getAllUsers);
router.route("/:id").patch(updateUser).delete(deleteUser).get(protect,getUser);

export const userRouter = router;

import { Model, Document } from "mongoose";
import { Request, Response, NextFunction } from "express";

import { AppError, catchError, APIFeatures } from "@src/utils";

export const createEntitiy = <T extends Document>(Model: Model<T>) =>
  catchError(async (req: Request, res: Response, next: NextFunction) => {
    const doc = await Model.create(req.body);
    res.status(200).json({ data: { doc } });
  });

export const getEntitiy = <T extends Document>(Model: Model<T>) =>
  catchError(async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const doc = await Model.findById(id);
    res.status(200).json({ data: { doc } });
  });

export const getAllEntitiy = <T extends Document>(Model: Model<T>) =>
  catchError(async (req: Request, res: Response, next: NextFunction) => {
    console.log(req);
    // await User.find()
    const docs = await new APIFeatures(Model.find(), req.query)
      .paginate()
      .filter()
      .sort()
      .limitFields().query;
    res.status(200).json({ data: { docs } });
  });

export const updateEntitiy = <T extends Document>(Model: Model<T>) =>
  catchError(async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const doc = await Model.findByIdAndUpdate(id, req.body, { new: true });
    if (!doc) return next(new AppError("No document found with this id", 404));
    res.status(200).json({ data: { doc } });
  });

export const deleteEntitiy = <T extends Document>(Model: Model<T>) =>
  catchError(async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const doc = await Model.findByIdAndDelete(id);
    if (!doc) return next(new AppError("No document found with this id", 404));

    res.status(200).json({ message: "succsessfully deleted" });
  });

import mongoose from "mongoose";
import dotenv from "dotenv";

import app from "./app";

dotenv.config();

const DB_USER = process.env.DB_USER ?? "";
const DB_PASSWORD = process.env.DB_PASSWORD ?? "";
const MongoDB_URL: string =
  process.env.NODE_ENV === "production"
    ? `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.jjevo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    : "mongodb://localhost:27017/vote";

mongoose
  .connect(MongoDB_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));
const port = process.env.PORT ?? 3000;
const server = app.listen(port);

// triggerUnhandledRejection();
// No try-catch or `.catch()` to handle the rejection, triggering the event.

/*
The process object in Node.js is a global object that provides information about and control over the current Node.js process.
The .on() method is used to attach a listener to a specific event emitted by the process. 
this case, the event is "unhandledRejection", and the listener is a function that will handle the event.
 */

process.on("unhandledRejection", (err: any) => {
  console.log("UNHANDLED REJECTION! 💥 Shutting down...");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

process.on("uncaughtException", (error: Error) => {
  console.log("We handle it here", error);
  // I just received an error that was never handled, time to handle it and then decide whether a restart is needed
  // errorManagement.handler.handleError(error);
  // if (!errorManagement.handler.isTrustedError(error))
  //   process.exit(1);
});

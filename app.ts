import express, { Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import cors from "cors";

import connectDB from "./src/config/database.js";
import router from "./src/api/routes/index.js";

const app = express();
const port = 4000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use("/", router);

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  return res.status(500).send("Internal Server Error");
});

connectDB();
// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

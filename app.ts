import express, { Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import cors from "cors";

import connectDB from "./src/config/database.js";

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Routes
app.get("/", (req: Request, res: Response) => {
  return res.send("Hello, World!");
});

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

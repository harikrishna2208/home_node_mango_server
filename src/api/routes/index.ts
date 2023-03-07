import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  console.log(req.body, "body");
  return res.json("exampels");
});

export default router;

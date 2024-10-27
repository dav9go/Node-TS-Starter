//Expres
import { Router, Request, Response } from "express";
//Types
import { Interior } from "../types/interior";
//UUID
import { v4 as uuidv4 } from "uuid";

const router = Router();
const interiors: Interior[] = [];

router.post("/", (req: Request, res: Response) => {
  const interior: Interior = {
    id: uuidv4(),
    title: req.body.title,
    description: req.body.description,
    tags: req.body.tags,
    links: req.body.links,
  };

  interiors.push(interior);
  res.status(201).json(interior);
});

router.get("/:id", (req: Request, res: Response) => {
  res.json(interiors);
});

export default router;

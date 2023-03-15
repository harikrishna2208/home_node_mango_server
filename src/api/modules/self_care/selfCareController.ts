import { Request, Response } from "express";
import { IRoutine } from "../../dbModel/schema-type.js";
import { RoutineService } from "./selfCareService.js";

export default class RoutineController {
  async createRoutine(
    req: Request<{}, {}, IRoutine>,
    res: Response
  ): Promise<void> {
    try {
      const routineData = req.body;
      const routineService = new RoutineService();
      const saveRoutineData = await routineService.createRoutine(routineData);
      console.log(saveRoutineData);
      res.sendStatus(201).json(saveRoutineData);
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  }

  async getRoutineById(
    req: Request<{ id: string }>,
    res: Response<IRoutine | null>
  ): Promise<void> {
    try {
      const routineId = req.params.id;
      const routineService = new RoutineService();
      const routine = await routineService.getRoutineById(routineId);
      res.send(routine);
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  }

  async updateRoutine(
    req: Request<{ id: string }, {}, Partial<IRoutine>>,
    res: Response
  ): Promise<void> {
    try {
      const routineId = req.params.id;
      const routineData = req.body;
      const routineService = new RoutineService();
      await routineService.updateRoutine(routineId, routineData);
      res.sendStatus(204);
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  }

  async deleteRoutine(
    req: Request<{ id: string }>,
    res: Response
  ): Promise<void> {
    try {
      const routineId = req.params.id;
      const routineService = new RoutineService();
      await routineService.deleteRoutine(routineId);
      res.sendStatus(204);
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  }
}

import { Request, Response } from "express";
import { IRoutine } from "../../dbModel/schema-type.js";
import { RoutineService } from "./selfCareService.js";
import { appResponse } from "../../utils/app_response.js";

export default class RoutineController {
  private routineService: RoutineService;

  constructor() {
    this.routineService = new RoutineService();
  }

  async createRoutine(
    req: Request<{}, {}, IRoutine>,
    res: Response
  ): Promise<void> {
    try {
      const routineData = req.body;
      const saveRoutineData = await this.routineService.createRoutine(
        routineData
      );
      console.log(saveRoutineData, "save Routine Data");
      if (saveRoutineData?._id == null) {
        return appResponse(res, 409, "FAILURE");
      }
      return appResponse(res, 201, "success");
    } catch (error) {
      console.error(error);
      if (error instanceof Error && error.name === "ValidationError") {
        return appResponse(res, 400, "FAILURE");
      }
      return appResponse(res, 500, "FAILURE");
    }
  }

  async getRoutineById(
    req: Request<{ id: string }>,
    res: Response<IRoutine | null>
  ): Promise<void> {
    try {
      const routineId = req.params.id;
      const routine = await this.routineService.getRoutineById(routineId);
      return appResponse<Object>(res, 200, "SUCCESS", { routine });
    } catch (error) {
      console.error(error);
      return appResponse(res, 500, "FAILURE");
    }
  }

  async updateRoutine(
    req: Request<{ id: string }, {}, Partial<IRoutine>>,
    res: Response
  ): Promise<void> {
    try {
      const routineId = req.params.id;
      const routineData = req.body;
      const updateTheRoutine = await this.routineService.updateRoutine(
        routineId,
        routineData
      );
      return appResponse(res, 200, "SUCCESS", updateTheRoutine);
    } catch (error) {
      console.error(error);
      return appResponse(res, 500, "FAILURE");
    }
  }

  async deleteRoutine(
    req: Request<{ id: string }>,
    res: Response
  ): Promise<void> {
    try {
      const routineId = req.params.id;
      await this.routineService.deleteRoutine(routineId);
      return appResponse(res, 200, "SUCCESS");
    } catch (error) {
      console.error(error);
      return appResponse(res, 500, "FAILURE");
    }
  }
  async allRoutine(req: Request, res: Response): Promise<void> {
    try {
      console.log(req, "request for the Object");
      await this.routineService.routineDataforDates({});
      return appResponse(res, 200, "SUCESS");
    } catch (error) {
      console.error(error);
      return appResponse(res, 500, "FAILURE");
    }
  }
}

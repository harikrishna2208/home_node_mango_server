import { Request, Response } from "express";
import { IRoutine } from "../../dbModel/schema-type.js";
import { RoutineService } from "./selfCareService.js";
import { appResponse } from "../../utils/app_response.js";
import { IGetRoutineRequest } from "./self_care.js";

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
      if (Array.isArray(saveRoutineData) && saveRoutineData.length === 0) {
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

  async getRoutineByDate(
    req: Request<{ date: string }>,
    res: Response<IRoutine | null>
  ): Promise<void> {
    try {
      const routineDate = req.params.date;
      const routine: IRoutine | null =
        await this.routineService.getRoutineByDate(routineDate);
      return appResponse<IRoutine | null>(res, 200, "SUCCESS", routine);
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
      // check whether incoming contains two element in date variable and option variable are present compulsorily
      const dateFilterForDb: IGetRoutineRequest | null =
        req.params?.date &&
        req.params.date.length === 2 &&
        typeof req.params.date[0] === "string" &&
        typeof req.params.date[1] === "string" &&
        req.params?.option
          ? {
              date: [req.params.date[0], req.params.date[1]],
              option: req.params.option,
            }
          : null;

      const allDataFromMongodb = await this.routineService.routineDataforDates(
        dateFilterForDb
      );

      return appResponse<Object>(res, 200, "SUCESS", { allDataFromMongodb });
    } catch (error) {
      console.error(error);
      return appResponse(res, 500, "FAILURE");
    }
  }
  async getAllDatesFromDb(req: Request, res: Response): Promise<void> {
    try {
      const allDatesFromDb = await this.routineService.getAllDatesFromDb();
      if (allDatesFromDb == null) {
        return appResponse(res, 409, "FAILURE");
      }
      console.log(allDatesFromDb, "check the return type");
      return appResponse<Object>(res, 200, "SUCCESS", { allDatesFromDb });
    } catch (error) {
      console.log(error);
    }
  }
}

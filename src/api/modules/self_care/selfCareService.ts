import SelfCareRepository from "./selfCareRepository.js";
import { IRoutine } from "../../dbModel/schema-type.js";
import { IGetRoutineRequest } from "./self_care.js";
import { todayDate } from "../../utils/date.js";

export class RoutineService {
  private readonly repository: SelfCareRepository;

  constructor() {
    this.repository = new SelfCareRepository();
  }

  async createRoutine(routineData: IRoutine): Promise<IRoutine | []> {
    // console.log(routineData);
    const checkDate = todayDate();
    console.log(checkDate, "check Date");
    routineData.date = new Date(checkDate);
    const savedRoutine = await this.repository.create(routineData);
    return savedRoutine;
  }

  async getRoutineById(routineId: string): Promise<IRoutine | null> {
    return this.repository.getById(routineId);
  }

  async updateRoutine(
    routineId: string,
    routineData: Partial<IRoutine>
  ): Promise<void> {
    await this.repository.update(routineId, routineData);
  }

  async deleteRoutine(routineId: string): Promise<void> {
    await this.repository.delete(routineId);
  }

  async routineDataforDates(
    fromDate: IGetRoutineRequest | null
  ): Promise<Array<IRoutine>> {
    const allRoutines = await this.repository.allRoutineBasedOnDate(fromDate);
    return allRoutines;
  }
}

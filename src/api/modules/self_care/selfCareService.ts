import SelfCareRepository from "./selfCareRepository.js";
import { IRoutine } from "../../dbModel/schema-type.js";

export class RoutineService {
  private readonly repository: SelfCareRepository;

  constructor() {
    this.repository = new SelfCareRepository();
  }

  async createRoutine(routineData: IRoutine): Promise<IRoutine> {
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

  async routineDataforDates(fromDate?: Object): Promise<Array<IRoutine>> {
    const allRoutines = await this.repository.allRoutineBasedOnDate(fromDate);
    return allRoutines;
  }
}

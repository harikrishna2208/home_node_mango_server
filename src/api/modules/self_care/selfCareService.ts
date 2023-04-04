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
    if (
      routineData?.dateFormatted == null ||
      routineData?.dateFormatted === ""
    ) {
      routineData.dateFormatted = todayDate("ddmmyyyy");
    }
    console.log(routineData, "this is the data comign");
    const savedRoutine = await this.repository.create(routineData);
    return savedRoutine;
  }

  async getRoutineByDate(formattedDate: string): Promise<IRoutine | null> {
    return await this.repository.getByDate(formattedDate);
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
    console.log(fromDate, "fromt dataaaa");
    const allRoutines = await this.repository.allRoutineBasedOnDate(fromDate);
    return allRoutines;
  }
  async getAllDatesFromDb(): Promise<String[] | null> {
    const allDatesFromDb = await this.repository.getAllDatesFromTheDb();
    return allDatesFromDb;
  }
}

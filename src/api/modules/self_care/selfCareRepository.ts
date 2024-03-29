import { routineCollection } from "./../../dbModel/model.js";
import { IRoutine } from "../../dbModel/schema-type.js";
import { IGetRoutineRequest } from "./self_care.js";
import { sortDateWithTime, todayDate } from "../../utils/date.js";

export default class SelfCareRepository {
  public async create(data: IRoutine): Promise<IRoutine | []> {
    const filter = {
      dateFormatted: data?.dateFormatted ?? todayDate("ddmmyyyy"),
    };

    const { _id, ...dataWithIDForUpdate } = data;

    const options = { upsert: true, new: true, setDefaultsOnInsert: true };

    const createOrUpdateRoutine: IRoutine | [] =
      (await routineCollection.findOneAndUpdate(filter, data, options)) ?? [];
    return createOrUpdateRoutine;
  }

  public async findAll(): Promise<IRoutine[]> {
    return await routineCollection.find();
  }

  public async getByDate(dateFormatted: string): Promise<IRoutine | null> {
    return await routineCollection.findOne({ dateFormatted });
  }

  public async update(id: string, data: any): Promise<IRoutine | null> {
    return await routineCollection.findByIdAndUpdate(id, data, { new: true });
  }

  public async delete(id: string): Promise<IRoutine | null> {
    return await routineCollection.findByIdAndDelete(id);
  }

  public async getAllDatesFromTheDb(): Promise<string[] | null> {
    const alldbDates = await routineCollection
      .find()
      .sort({ date: 1 })
      .select({ dateFormatted: 1, _id: 0 });

    const unsortedDates = alldbDates.map((eachDate) =>
      eachDate.dateFormatted.toString()
    );

    return sortDateWithTime(unsortedDates);
  }

  checkGetOptionFromFilter(
    filterFromRequest: IGetRoutineRequest | null
  ): Record<string, any> | null {
    if (filterFromRequest == null) {
      return null;
    }
    return {
      date: {
        $gte: filterFromRequest.date[0],
        $lte: filterFromRequest.date[1],
      },
    };
  }

  async allRoutineBasedOnDate(
    getFilterFromDb: IGetRoutineRequest | null
  ): Promise<Array<IRoutine>> {
    console.log(getFilterFromDb, "gett");

    const filter = this.checkGetOptionFromFilter(getFilterFromDb) || {};

    const projectionOption =
      getFilterFromDb?.option === "All" ||
      filter == null ||
      Object.keys(filter).length === 0
        ? null
        : { [`${getFilterFromDb?.option}`]: 1 };

    console.log(projectionOption, filter, "whats the projecttion data");
    const allRoutine: Array<IRoutine> = await routineCollection.find(
      filter,
      projectionOption
    );
    return allRoutine;
  }
}

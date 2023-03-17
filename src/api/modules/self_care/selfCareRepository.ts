import { routineCollection } from "./../../dbModel/model.js";
import { IRoutine } from "../../dbModel/schema-type.js";

export default class SelfCareRepository {
  public async create(data: any): Promise<IRoutine> {
    const myData: IRoutine = new routineCollection(data);
    return myData;
  }

  public async findAll(): Promise<IRoutine[]> {
    return await routineCollection.find();
  }

  public async getById(id: string): Promise<IRoutine | null> {
    return await routineCollection.findById(id);
  }

  public async update(id: string, data: any): Promise<IRoutine | null> {
    return await routineCollection.findByIdAndUpdate(id, data, { new: true });
  }

  public async delete(id: string): Promise<IRoutine | null> {
    return await routineCollection.findByIdAndDelete(id);
  }

  async allRoutineBasedOnDate(fromData?: Object): Promise<Array<IRoutine>> {
    const allRoutine = await routineCollection.find();
    console.log(fromData);
    return allRoutine;
  }
}

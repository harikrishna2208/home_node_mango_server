import { Document } from "mongoose";

export interface ReasonAndAmount {
  reason: String | null;
  amount: Number;
  person: String | null;
}

export type SpentInterface = Omit<ReasonAndAmount, "person">;

export interface Database extends Document {
  date: Date;
  hair_wash: {
    washed_hairs: Boolean;
    time: Date;
  };
  bath: {
    took_bath: Boolean;
    time: Date;
  };
  money: {
    date: Date;
    borrow: ReasonAndAmount;
    lend: ReasonAndAmount;
    spent: SpentInterface;
  };
  sleep: { sleep_time: Date; sleep_time_extended: Date };
}

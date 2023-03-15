import mongoose, { Document, SchemaType } from "mongoose";

export interface ReasonAndAmount {
  reason: String | null;
  amount: Number;
  person: String | null;
  method_of_buying: String;
}

// TODO:person can be null as well check this
export type SpentInterface = Omit<ReasonAndAmount, "person">;

export interface IMoney_borrow_collection extends Document {
  date: Date;
  borrow: ReasonAndAmount;
}

export interface IMoney_spent_collection extends Document {
  date: Date;
  spent: SpentInterface;
}

export interface IMoney_lend_collection extends Document {
  date: Date;
  lend: ReasonAndAmount;
}

export interface IRoutine extends Document {
  date: Date;
  hair_wash: {
    washed_hairs: Boolean;
    time: Date | null;
  };
  bath: {
    took_bath: Boolean;
    time: Date | null;
  };
  sleep: { sleep_time: Date; sleep_time_extended: null | Date };
  books: {
    read: Boolean;
    book_id: mongoose.Types.ObjectId | null;
    page_count: Number | 0;
    // time: Date | null;
  };
}

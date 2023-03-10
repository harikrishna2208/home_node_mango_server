import { Schema, model } from "mongoose";
import { ReasonAndAmount, Database } from "./schema-type.js";

const reasonAndAmountWithPersonSchema = new Schema<ReasonAndAmount>({
  reason: { type: String },
  amount: { type: Number },
  person: { type: String },
});

const database = new Schema<Database>({
  date: {
    type: Date,
    default: Date.now,
  },
  hair_wash: {
    washed_hairs: {
      type: Boolean,
      default: false,
    },
    time: {
      type: Date,
      required: "time is required",
    },
  },
  bath: {
    took_bath: { type: Boolean, default: false },
    time: { type: Date, default: Date.now },
  },
  money: {
    date: { type: Date, default: Date.now },
    borrow: reasonAndAmountWithPersonSchema,
    lend: reasonAndAmountWithPersonSchema,
    spent: { reason: { type: String }, amount: { type: Number } },
  },
  sleep: { sleep_time: { type: Date }, sleep_time_extended: { type: Date } },
});

export default model("owner", database);

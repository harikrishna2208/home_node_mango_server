import { Schema, model, Model } from "mongoose";
import { ReasonAndAmount, IRoutine } from "./schema-type.js";

const reasonAndAmountWithPersonSchema = new Schema<ReasonAndAmount>({
  reason: { type: String },
  amount: { type: Number },
  person: { type: String },
});

const routineSchema = new Schema<IRoutine>({
  date: {
    type: Date,
    default: Date.now,
    required: true,
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
});

//
// const database = new Schema<>({
//
//   money: {
//     date: { type: Date, default: Date.now },
//     borrow: reasonAndAmountWithPersonSchema,
//     lend: reasonAndAmountWithPersonSchema,
//     spent: { reason: { type: String }, amount: { type: Number } },
//   },
//   sleep: { sleep_time: { type: Date }, sleep_time_extended: { type: Date } },
// });

export const routineCollection: Model<IRoutine> = model<IRoutine>(
  "routine_collection",
  routineSchema
);

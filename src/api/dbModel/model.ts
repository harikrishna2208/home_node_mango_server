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
  dateFormatted: {
    type: String,
    required: true,
  },
  hair_wash: {
    required: true,
    type: {
      washed_hairs: {
        type: Boolean,
        default: false,
      },
      time: { type: Date },
    },
  },
  bath: {
    required: true,
    type: {
      took_bath: { type: Boolean, default: false },
      time: { type: Date },
    },
  },
  sleep: {
    required: true,
    type: {
      sleep_time: { type: Date },
      sleep_time_extended: { type: Boolean },
    },
  },
  books: {
    required: true,
    type: {
      page_count: { type: Number, default: 0 },
      read: { type: Boolean, default: false },
      book_id: { type: Schema.Types.ObjectId },
    },
  },
});
// const database = new Schema<>({
//   money: {
//     date: { type: Date, default: Date.now },
//     borrow: reasonAndAmountWithPersonSchema,
//     lend: reasonAndAmountWithPersonSchema,
//     spent: { reason: { type: String }, amount: { type: Number } },
//   },
// });

export const routineCollection: Model<IRoutine> = model<IRoutine>(
  "routine_collection",
  routineSchema
);

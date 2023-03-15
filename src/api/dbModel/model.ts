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
    default: Date.now(),
    required: true,
  },
  hair_wash: {
    washed_hairs: {
      type: Boolean,
      default: false,
    },
    time: { type: Date },
  },
  bath: {
    took_bath: { type: Boolean, default: false },
    time: { type: Date, default: Date.now },
  },
  sleep: {
    sleep_time: { type: Schema.Types.Mixed },
    sleep_time_extended: { type: Schema.Types.Mixed },
  },
});

// Define a pre-save middleware function to convert the date to "Asia/Kolkata" timezone
// routineSchema.pre("save", function (next) {
//   if (this.date) {
//     this.date = new Date(
//       this.date.toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
//     );
//   }
//   next();
// });

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

import mongoose from "mongoose";


interface ReasonAndAmount {
      reason : String | null,
      amount : Number,
      person : String |null,
    }
type spentInterface=Omit<ReasonAndAmount,"person">;

interface Database {
  date:Date,
  hair_wash: {
    washed_hairs: Boolean;
    time: Date;
  };
  bath: {
    took_bath: Boolean;
    time: Date;
  };
  money:{
    date:Date,
    borrow:ReasonAndAmount,
    lend:ReasonAndAmount,
    spent:spentInterface
  },
  sleep:{ sleep_time:Date ,sleep_time_extended:Date }
}

const database = new mongoose.Schema<Database>(
  {
    hair_wash:{
      washed_hairs:{

      }
    }
    // data: {
    //   type: String,
    //   required: "FirstName cannot be empty",
    //   min: [2, "FirstName cannot be less than 2 letters"],
    // },
  //   lastName: {
  //     type: String,
  //     required: "lastname cannot be empty",
  //     min: [1, "FirstName cannot be less than 1 letters"],
  //   },
  //   email: {
  //     type: String,
  //     required: "Email cannot be empty",
  //     unique: true,
  //   },
  //   password: {
  //     type: String,
  //     required: "Password cannot be empty",
  //     minlength: [4, "Password must be atleast 4 character long"],
  //   },
  //   payment: {
  //     payment_id: { type: String },
  //     payment_start_date: { type: Date },
  //     payment_end_date: { type: Date },
  //   },
  //   authorize: {
  //     type: Boolean,
  //   },
  //   ownerAssets: {
  //     home: [{ type: mongoose.SchemaTypes.ObjectId, ref: "homeModel" }],
  //     store: [{ type: mongoose.SchemaTypes.ObjectId, ref: "pgModel" }],
  //     pg: [{ type: mongoose.SchemaTypes.ObjectId, ref: "storeModel" }],
  //   },
  // }
  // { minimize: false }
);

module.exports = mongoose.model("owner", ownerSchema);

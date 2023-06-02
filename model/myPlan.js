const mongoose = require("mongoose");
const { Schema } = mongoose;

let myPlanSchema = mongoose.Schema({
  username: String,
  name: String,
  phone: String,
  selectedPlan: String,
  selectedDays: String,
  start: String,
  end: String,
  address: String,
  total: Number,
  additional: Number,
  subtotal: Number,
  creditsUsed: Number,
  planChangeFrom: String,
  planChangeDate: String,
  planChangePay: Number, // +ve means user paid , -ve means user recieved credits
  planChangeCredits: Number,
  cancelDay: String,
  cancelMeal: String,
});

const MyPlan = mongoose.model("myplan", myPlanSchema);

module.exports.MyPlan = MyPlan;
//

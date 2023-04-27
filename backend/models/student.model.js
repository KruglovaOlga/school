const mongoose = require("mongoose");

let tutionSchema = new mongoose.Schema(
  {
    installment: { type: String },
    amount: { type: String },
    date: { type: Date },
    status: { type: Boolean },
  },
  { _id: false }
);

let gradesSchema = new mongoose.Schema(
  {
    semester: { type: String },
    Listening: { type: String },
    Writing: { type: String },
    Speaking: { type: String },
    Reading: { type: String },
    Grammar: { type: String },
    "Use of English": { type: String },
  },
  { _id: false }
);

let emailSchema = new mongoose.Schema({
  type: String,
  trim: true,
  lowercase: true,
  match: [
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    "Email address is not valid",
  ],
  unique: true, // make email field unique
});

let addressSchema = new mongoose.Schema(
  {
    area: { type: String },
    road: { type: String },
  },
  { _id: false }
);

let phoneSchema = new mongoose.Schema(
  {
    type: { type: String },
    number: { type: String },
  },
  { _id: false }
);

// let scheduleSchema = new mongoose.Schema({
//   day: { type: String },
//   time: { type: String },
//   class: { type: String },
//   group: { type: String },
// },{ _id: false });

const studentSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required field"],

      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Password is required field"],
    },
    role: {
      type: String,
      required: [true, "Role is required field"],
    },
    category: {
      type: String,

      required: [true, "Category is required field"],
    },
    firstname: {
      type: String,
      required: [true, "Firstname is required field"],
    },
    lastname: {
      type: String,
      required: [true, "Lastname is required field"],
    },
    class: {
      type: String,
      required: [true, "Class is required field"],
    },
    grades: { type: [gradesSchema], null: true },
    email: { type: [emailSchema], null: true },
    tution: { type: [tutionSchema], null: true },
    address: { type: [addressSchema], null: true },
    phone: phoneSchema,
    // schedule: { type: [sheduleSchema], null: true }
  },
  {
    collection: "user",
    timestamps: true,
  }
);

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;

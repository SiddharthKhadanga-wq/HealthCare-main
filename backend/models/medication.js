import connectDB from "../config/db.js";
import mongoose from "mongoose";

const {Schema}= mongoose;

const medicationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    medicationType: { type: String, required: true },
    doseCount: { type: Number, required: true },
    doseTiming: { type: String, required: true }, 
    reminderEnabled: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
    intakeTiming:{type: String, required:true },
    userId:{type: String,required:true}
  });

const MedicationModel=mongoose.model('Medication',medicationSchema);
export default MedicationModel;
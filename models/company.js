import mongoose from "mongoose";

const employeesSchema = new mongoose.Schema({
    name: String,
    salary: Number,
    language: {
        type: String,
        enum: ["Java", "Python", "JavaScript"],
        required: true
    },
    city: String,
    isManager: Boolean
});

const Employee = mongoose.model("Employee", employeesSchema);
export default Employee;
// module.exports = Employee;
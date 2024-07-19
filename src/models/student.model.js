import mongoose from "mongoose";

const {Schema} = mongoose;

const StudentSchema = new Schema({
    name: {type: String, require: true},
    lastname:{type: String, require: true},
    ci:{type: Number, require: true},
    birthdate: {type: Date, require: true},
    address:{type: String, require: true},
    date: {type: Date, default: Date.now}
});

export default mongoose.model('Student', StudentSchema);
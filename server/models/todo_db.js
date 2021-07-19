const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    todo: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        default: false,
    },
    startdate:{
        type: Date,
    },
    enddate:{
        type: Date,
    }
});

module.exports = mongoose.model("todos", todoSchema);
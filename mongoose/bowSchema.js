const { ObjectId } = require("mongodb");
const mongoose = require("mongoose")

let bow = mongoose.Schema({
    title: {
        type: String,
        required: [true, "title is required"]
    },
    phase: {
        type: ObjectId, ref: 'Phase'
    },
    tags: { type: String },
    description: {
        type: String
    },
    boardId: {
        type: ObjectId, ref: "Board"
    },
    projectId: {
        type: ObjectId
    },
    type: {
        type: String,
        enum: ["task", "story", "defect"]
    },
    dueDate: {
        type: Date
    },
    responsible: {
        type: ObjectId, ref: 'Responsible'
    },
    assignees: {
        type: ObjectId, ref: 'Assignees'
    },
    label: {
        type: String
    },
    attachments: {
        type: String
    },
    firstTimeEnterBackLog: {
        type: Date
    }, 
    firstTimeEnterToDo: {
        type: Date
    },
    firstTimeEnterInProgress: {
        type: Date
    },
    firstTimeEnterReady: {
        type: Date
    },
    firstTimeEnterDone: {
        type: Date
    },
    firstTimeEnterCancelled: {
        type: Date
    },
},
    {
        timestamps: true
    }

)
module.exports = mongoose.model("Bow", bow, 'BOW');
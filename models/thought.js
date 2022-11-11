const mongoose = require("mongoose");
const { Schema } = mongoose;

const reactionSchema = new Schema({
    reactionBody: {
        type: Schema.Types.ObjectId,
        max: 280,
        createdAt: {
            type: Date,
            default: Date.now
        }
    }
})

const thoughtSchema = new Schema({
    thoughtText: {
        type: String,

    }
})
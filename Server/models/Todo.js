const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true,
        minlength: 1,
    },
    done: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true,
});

const TodoModel = mongoose.model('Todo', TodoSchema);
module.exports = TodoModel;
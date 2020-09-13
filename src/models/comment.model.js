const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
    
    comment: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        autopopulate: true
    }
});

CommentSchema.plugin(require('mongoose-autopopulate'));

CommentSchema.method('toJSON', function () {
    const { __v, ...comment } = this.toObject();
    return comment;
});

module.exports = mongoose.model('Comment', CommentSchema);
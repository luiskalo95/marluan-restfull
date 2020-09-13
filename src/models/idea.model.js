const mongoose = require("mongoose");

const IdeaSchema = new mongoose.Schema({

    idea: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    upVotes: [{
        type: Boolean
    }],
    downVotes: [{
        type: Boolean
    }],
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        autopopulate: true
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment',
        required: true,
        autopopulate: true
    }]
});

IdeaSchema.plugin(require('mongoose-autopopulate'));

IdeaSchema.method('toJSON', function () {
    const { __v, ...idea } = this.toObject();
    return idea;
});

module.exports = mongoose.model('Idea', IdeaSchema);
const BaseRepository = require("./base.repository");

let _commentSchema = null;

class CommentRepository extends BaseRepository {

    constructor({CommentSchema}) {
        super(CommentSchema);
        _commentSchema = CommentSchema;
    }

}

module.exports = CommentRepository;
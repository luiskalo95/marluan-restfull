const BaseRepository = require("./base.repository");

let _ideaSchema = null;

class IdeaRepository extends BaseRepository {

    constructor({IdeaSchema}) {
        super(IdeaSchema);
        _ideaSchema = IdeaSchema;
    }

    async getUserIdeas(author){
        return await _ideaSchema.find({author});
    }
}

module.exports = IdeaRepository;
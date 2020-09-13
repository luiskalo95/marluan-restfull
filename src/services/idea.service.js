const BaseService = require("./base.service");

let _ideaRepository = null;

class IdeaService extends BaseService {

    constructor({IdeaRepository}) {
        super(IdeaRepository);
        _ideaRepository = IdeaRepository;   
    }

    async getUserIdeas(author) {
        if(!author){
            const error = new Error();
            error.status = 400;
            error.message = 'User id must be send';
            throw error;
        }
        return await _ideaRepository.getUserIdeas(author);
    }

    async upvoteIdea(ideaId) {
        if(!ideaId){
            const error = new Error();
            error.status = 400;
            error.message = 'Idea id must be send';
            throw error;
        }
        const ideaFound = await _ideaRepository.getById(ideaId);
        if(!ideaFound) {
            const error = new Error();
            error.status = 404;
            error.message = 'Idea does not found';
            throw error;
        }
        ideaFound.upVotes.push(true);
        return await _ideaRepository.update(ideaId,{upVotes : ideaFound.upVotes});
    }

    async downvoteIdea(ideaId) {
        if(!ideaId){
            const error = new Error();
            error.status = 400;
            error.message = 'Idea id must be send';
            throw error;
        }
        const ideaFound = await _ideaRepository.getById(ideaId);
        if(!ideaFound) {
            const error = new Error();
            error.status = 404;
            error.message = 'Idea does not found';
            throw error;
        }
        ideaFound.downVotes.push(true);
        return await _ideaRepository.update(ideaId,{downVotes : ideaFound.downVotes});
    }
}

module.exports = IdeaService;
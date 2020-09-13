const BaseService = require("./base.service");

let _commentRepository = null;
let _ideaRepository = null;

class CommentService extends BaseService{

    constructor({CommentRepository,IdeaRepository}){
        super(CommentRepository);
        _commentRepository = CommentRepository;
        _ideaRepository = IdeaRepository;
    }

    async getIdeaComments (ideaId) {
        if(!ideaId){
            const error = new Error();
            error.status = 400;
            error.message = 'Idea id must be send';
            throw error;
        }

        const ideaFound = await _ideaRepository.getById(ideaId);
        if(!ideaFound){
            const error = new Error();
            error.status = 404;
            error.message = 'Idea does not found';
            throw error;
        }
        const {comments} = ideaFound;
        return comments;
    }

    async createCommentToIdea(ideaId,comment) {
        if(!ideaId){
            const error = new Error();
            error.status = 400;
            error.message = 'Idea id must be send';
            throw error;
        }
        const ideaFound = await _ideaRepository.getById(ideaId);
        if(!ideaFound){
            const error = new Error();
            error.status = 404;
            error.message = 'Idea does not found';
            throw error;
        }
        const createComment = await _commentRepository.create(comment);
        ideaFound.comments.push(createComment);
        return await _ideaRepository.update(ideaId,{comments : ideaFound.comments});
    }
}

module.exports = CommentService;
let _commentService = null;

class CommentController {

    constructor({CommentService}){
        _commentService = CommentService;
    }

    async getAllComments(request,response){
        const comments = await _commentService.getAll();
        return response.status(200).json({
            ok: true,
            comments
        }); 
    }

    async getCommentById(request,response){
        const {id} = request.params;
        const comment = await _commentService.getById(id);
        return response.status(200).json({
            ok: true,
            comment
        }); 
    }

    async createComment(request,response){
        const {body} = request;
        const {ideaId} = request.params;
        const createdComment = await _commentService.createCommentToIdea(ideaId,body);
        return response.status(201).json({
            ok: true,
            createdComment
        });
    }

    async updateComment(request,response){
        const {id} = request.params;
        const {body} = request;
        const commentUpdated = await _commentService.update(id,body);
        return response.status(200).json({
            ok : true,
            commentUpdated
        });
    }

    async deleteComment(request,response){
        const {id} = request.params;
        const commentDeleted = await _commentService.delete(id);
        return response.status(200).json({
            ok : true,
            commentDeleted
        });
    }

    async getIdeaComments(request,response){
        const {id} = request.params;
        const comments = await _commentService.getIdeaComments(id);
        return response.status(200).json({
            ok : true,
            comments
        });
    }
}

module.exports = CommentController;
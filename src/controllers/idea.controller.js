let _ideaService = null;

class IdeaController {

    constructor({IdeaService}){
        _ideaService = IdeaService;
    }

    async getIdeaById(request,response){
        const {id} = request.params;
        const idea = await _ideaService.getById(id);
        return response.status(200).json({
            ok: true,
            idea
        }); 
    }

    async getAllIdeas(request, response){
        const { pageSize,pageNum } = request.query;
        const ideas = await _ideaService.getAll(pageSize,pageNum);
        return response.status(200).json({
            ok : true,
            ideas
        });
    }

    async createIdea(request,response){
        const {body} = request;
        const createdIdea = await _ideaService.create(body);
        return response.status(201).json({
            ok: true,
            createdIdea
        });
    }

    async updateIdea(request,response){
        const {id} = request.params;
        const {body} = request;
        const ideaUpdated = await _ideaService.update(id,body);
        return response.status(200).json({
            ok : true,
            ideaUpdated
        });
    }

    async deleteIdea(request,response){
        const {id} = request.params;
        const ideaDeleted = await _ideaService.delete(id);
        return response.status(200).json({
            ok : true,
            ideaDeleted
        });
    }

    async getUserIdeas(request,response){
        const {id} = request.params;
        const ideas = await _ideaService.getUserIdeas(id);
        return response.status(200).json({
            ok : true,
            ideas
        });
    }

    async upvoteIdea(request,response) {
        const {id} = request.params;
        const idea = await _ideaService.upvoteIdea(id);
        return response.status(200).json({
            ok : true,
            idea
        });
    }

    async downvoteIdea(request,response) {
        const {id} = request.params;
        const idea = await _ideaService.downvoteIdea(id);
        return response.status(200).json({
            ok : true,
            idea
        });
    }

}

module.exports = IdeaController;
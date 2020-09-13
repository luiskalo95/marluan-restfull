const { Router } = require("express")
const middlewares = require('../middlewares');

const IdeaRoutes = ({IdeaController}) => {
    
    const router = Router();
    router.get('/',[middlewares.VerifyToken,middlewares.ParseInt],IdeaController.getAllIdeas);
    router.get('/:id',[middlewares.VerifyToken],IdeaController.getIdeaById);
    router.post('/',[middlewares.VerifyToken],IdeaController.createIdea);
    router.put('/:id',[middlewares.VerifyToken],IdeaController.updateIdea);
    router.delete('/:id',[middlewares.VerifyToken],IdeaController.deleteIdea);
    router.get('/all/:id',[middlewares.VerifyToken],IdeaController.getUserIdeas);
    router.post('/upvote/:id',[middlewares.VerifyToken],IdeaController.upvoteIdea);
    router.post('/downvote/:id',[middlewares.VerifyToken],IdeaController.downvoteIdea);

    return router;
}

module.exports = IdeaRoutes;
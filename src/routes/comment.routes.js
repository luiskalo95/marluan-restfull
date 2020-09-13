const { Router } = require("express")
const middlewares = require('../middlewares');

const CommentRoutes = ({CommentController}) => {

    const router = Router();

    router.get('/',[middlewares.VerifyToken],CommentController.getAllComments);
    router.get('/:id',[middlewares.VerifyToken],CommentController.getIdeaComments);
    router.post('/:ideaId',[middlewares.VerifyToken],CommentController.createComment);
    router.put('/:id',[middlewares.VerifyToken],CommentController.updateComment);
    router.delete('/:id',[middlewares.VerifyToken],CommentController.deleteComment);

    return router;
}

module.exports = CommentRoutes;
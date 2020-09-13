const { Router } = require("express");
const middlewares = require("../middlewares");

const UserRoutes = ({UserController}) => {

    const router = Router();  //GUARDAR EN CACHE POR 1 MIN
    router.get('/', [middlewares.VerifyToken,middlewares.ParseInt, middlewares.MemoryCache(60)],UserController.getAllUsers);
    router.get('/:id', [middlewares.VerifyToken,middlewares.MemoryCache(60)],UserController.getUserById);
    router.put('/:id',[middlewares.VerifyToken], UserController.updateUser);
    router.delete('/:id',[middlewares.VerifyToken],UserController.deleteUser);
    return router;
    
}

module.exports = UserRoutes;
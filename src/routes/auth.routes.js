const { Router } = require("express")

const AuthRoutes = ({AuthController}) =>{

    const router = Router();
    
    router.post('/signup',AuthController.signUp);
    router.post('/signin',AuthController.signIn);

    return router;
}

module.exports = AuthRoutes;
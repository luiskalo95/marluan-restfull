const {Router} = require('express');

const HomeRoutes = ({HomeController}) => { 

    const router = Router();
    router.get('/',HomeController.index)
    return router;
    
}
module.exports = HomeRoutes;
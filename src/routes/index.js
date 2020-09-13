const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const middlewares = require('../middlewares');
require('express-async-errors');

//TODO: SWAGGER
const swaggerUI = require('swagger-ui-express');
const {SWAGGER_PATH} = require('../config');
const swaggerDocument = require(SWAGGER_PATH); 


const MainRouter = ({HomeRoutes, UserRoutes, IdeaRoutes, CommentRoutes, AuthRoutes}) => {

    const apiRoutes = express.Router();
    const mainRouter = express.Router();

    apiRoutes.use(express.json())
             .use(cors())
             .use(helmet())
             .use(compression())
             .use('/home',HomeRoutes)
             .use('/user',UserRoutes)
             .use('/idea',IdeaRoutes)
             .use('/comment',CommentRoutes)
             .use('/auth',AuthRoutes)
             .use('/doc',swaggerUI.serve,swaggerUI.setup(swaggerDocument)) // RUTA DE LA DOCUMENTACION

    mainRouter.use('/restful',apiRoutes)
          .use(middlewares.NotFound) // CAPTURA DE RUTAS NO ENCONTRADAS
          .use(middlewares.Error)    // CAPTURA DE ERRORES PRODUCIDOS

    return mainRouter;
}

module.exports = MainRouter;


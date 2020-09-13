const {createContainer, asValue, asClass, asFunction} = require('awilix');

//TODO: CONTENEDOR
const container = createContainer();

//TODO: GENERALES
const Config = require('../config');
const Server = require('./server');
const MainRouter = require('../routes');

//TODO: MODELOS
const {UserSchema, IdeaSchema, CommentSchema} = require('../models');

//TODO: RUTAS
const { HomeRoutes, UserRoutes, IdeaRoutes, CommentRoutes, AuthRoutes } = require('../routes/index.routes');

//TODO: CONTROLADORES
const { HomeController, UserController, IdeaController, CommentController, AuthController } = require('../controllers');

//TODO: SERVICIOS
const { HomeService,UserService,IdeaService,CommentService,AuthService } = require('../services');

//TODO: REPOSITORIOS
const { UserRepository, IdeaRepository, CommentRepository } = require('../repositories');

container
.register({
    Server: asClass(Server).singleton(),
    Config: asValue(Config),
    MainRouter: asFunction(MainRouter).singleton(),
})
.register({
    UserSchema: asValue(UserSchema),
    IdeaSchema: asValue(IdeaSchema),
    CommentSchema: asValue(CommentSchema)
})
.register({
    HomeRoutes: asFunction(HomeRoutes).singleton(),
    UserRoutes: asFunction(UserRoutes).singleton(),
    IdeaRoutes: asFunction(IdeaRoutes).singleton(),
    CommentRoutes: asFunction(CommentRoutes).singleton(),
    AuthRoutes: asFunction(AuthRoutes).singleton(),
})
.register({
    HomeController: asClass(HomeController.bind(HomeController)).singleton(),
    UserController: asClass(UserController.bind(UserController)).singleton(),
    IdeaController: asClass(IdeaController.bind(IdeaController)).singleton(),
    CommentController: asClass(CommentController.bind(CommentController)).singleton(),
    AuthController: asClass(AuthController.bind(AuthController)).singleton(),
})
.register( {
    HomeService: asClass(HomeService).singleton(),
    UserService: asClass(UserService).singleton(),
    IdeaService: asClass(IdeaService).singleton(),
    CommentService: asClass(CommentService).singleton(),
    AuthService : asClass(AuthService).singleton()
    
})
.register({
    UserRepository : asClass(UserRepository).singleton(),
    IdeaRepository : asClass(IdeaRepository).singleton(),
    CommentRepository : asClass(CommentRepository).singleton()
})

module.exports = container;
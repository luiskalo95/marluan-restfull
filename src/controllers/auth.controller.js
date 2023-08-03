
let _authService = null;

class AuthController {

    constructor({AuthService}){
        _authService = AuthService;
    }

    async signUp(request,response){
        const {body} = request;
        const userRegistered = await _authService.signUp(body);
        response.status(201).json({
            ok: true,
            userRegistered
        })
    }

    async signIn(request,response){
        const {body} = request;
        const credentials = await _authService.signIn(body);
        response.status(200).json({
            ok: true,
            credentials,
            newChange: true
        })
    }

}

module.exports = AuthController;
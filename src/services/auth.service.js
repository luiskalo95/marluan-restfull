const {GenerateJsonWebToken} = require('../helpers');

let _userService = null;

class AuthService {

    constructor({UserService}) {
        _userService = UserService;
    }

    async signUp(user){
        const {email} = user;
        const userFound = await _userService.getUserByEmail(email);
        if(userFound){
            const error = new Error();
            error.status = 401;
            error.message = 'Email have been registered, try with another';
            throw(error);
        }
        return await _userService.create(user);
    }

    async signIn(user){
        const {email,password} = user;
        const userFound = await _userService.getUserByEmail(email);
        if(!userFound){
            const error = new Error();
            error.status = 404;
            error.message = 'Email does not exist in the database';
            throw(error);
        }
        const validPassword = userFound.comparePasswords(password);
        if(!validPassword){
            const error = new Error();
            error.status = 400;
            error.message = 'Invalid password';
            throw(error);
        }

        const payload = {
            email : userFound.email,
            id    : userFound._id
        }

        const token = GenerateJsonWebToken(payload);

        return token;
    
    }

}

module.exports = AuthService;
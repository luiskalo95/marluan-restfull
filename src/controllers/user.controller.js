let _userService = null;

class UserController {

    constructor({UserService}){
        _userService = UserService;
    }

    async getUserById(request,response){
        const {id} = request.params;
        const user = await _userService.getById(id);
        return response.status(200).json({
            ok: true,
            user
        }) 
    }

    async getAllUsers(request, response){
        const {pageSize,pageNum} = request.query;
        const users = await _userService.getAll(pageSize,pageNum);
        return response.status(200).json({
            ok : true,
            users
        });
    }

    async updateUser(request,response){
        const {id} = request.params;
        const {body} = request;
        const userUpdated = await _userService.update(id,body);
        return response.status(200).json({
            ok : true,
            userUpdated
        })
    }

    async deleteUser(request,response){
        const {id} = request.params;
        const userDeleted = await _userService.delete(id);
        return response.status(200).json({
            ok : true,
            userDeleted
        })
    }

}

module.exports = UserController;
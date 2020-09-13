const BaseRepository = require("./base.repository");

let _userSchema = null;

class UserRepository extends BaseRepository {

    constructor({UserSchema}){
        super(UserSchema);
        _userSchema = UserSchema;
    }

    async getUserByEmail(email){
        return await _userSchema.findOne({email});
    }
}

module.exports = UserRepository;
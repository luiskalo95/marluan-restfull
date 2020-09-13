const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    }
});

UserSchema.method('toJSON', function () {
    const { __v, password, ...user } = this.toObject();
    return user;
});

UserSchema.methods.comparePasswords = function (password) {   // Función personalizada creada
    return bcrypt.compareSync(password, this.password);         // para comparar contraseñas    
}

UserSchema.pre('save', function (next) {         // Función de mongoose para realizar una acción
    const user = this;                           // antes de guardar en la base de datos
    if (!user.isModified('password')) {
        return next();
    }
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(user.password,salt);
    user.password = hashPassword;
    next();
});

module.exports = mongoose.model('User', UserSchema);
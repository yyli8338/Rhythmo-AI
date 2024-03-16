const mongoose = require("mongoose");

const { Schema, model } = mongoose;
const bcrypt = require("bcrypt");

const schema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
});

schema.pre("save", async function (next) {
    if (!this.isModified('password')) 
        return next();

    this.password = await bcrypt.hash(this.password, 10);
    next();
});

schema.methods.comparePassword = async function (attemptedPassword) {
    return bcrypt.compare(attemptedPassword, this.password);
};

schema.methods.clean = function () {
    return {
        ...this._doc,
        password: undefined,
    };
};

module.exports = model("User", schema);
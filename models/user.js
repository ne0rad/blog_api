var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: { type: String, required: true, minlength: 1, maxlength: 100 },
    password: { type: String, required: true, minlength: 1, maxlength: 100 },
    token: { type: String, required: true }
});

module.exports = mongoose.model('User', UserSchema, 'users');

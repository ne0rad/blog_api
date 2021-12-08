var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentSchema = new Schema({
    article: { type: Schema.Types.ObjectId, ref: 'Article' },
    message: { type: String, required: true, minlength: 1, maxlength: 1000 },
    author: { type: String, required: true, minlength: 1, maxlength: 100 },
    date: { type: Date, required: true }
});

module.exports = mongoose.model('Comment', CommentSchema, 'comments');

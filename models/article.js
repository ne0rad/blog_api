var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
    author: { type: String, required: true, minlength: 1, maxlength: 100 },
    title: { type: String, required: true, minlength: 1, maxlength: 100 },
    article: { type: String, required: true },
    date: { type: Date, required: true }
});

ArticleSchema.virtual('url')
    .get(function () {
        return '/articles/' + this._id;
    });

module.exports = mongoose.model('Article', ArticleSchema, 'articles');

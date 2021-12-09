const { body, validationResult } = require('express-validator');

exports.all_comments_get = function(req, res, next) {
    res.send('All comments for an article (TODO)');
}

exports.comment_post = function(req, res, next) {
    res.send('Creates a new comment. (TODO)');
}

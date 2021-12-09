const { body, validationResult } = require('express-validator');
var Article = require('../models/article');

exports.all_articles_get = function (req, res, next) {
    Article.find({})
        .sort({date: -1})
        .exec((err, result) => {
            if(err) return next(err);
            res.json(result);
        });
}

exports.article_get = function (req, res, next) {
    res.send('Get a specific article. (TODO)');
}

exports.article_post = [
    body('author').isLength({ min: 1, max: 100 }).escape(),
    body('title').isLength({ min: 1, max: 100 }).escape(),
    body('text').isLength({ min: 1, max: 10000 }),
    (req, res, next) => {
        const errors = validationResult(req);

        var article = new Article({
            author: req.body.author,
            title: req.body.title,
            article: JSON.stringify(req.body.text),
            date: new Date()
        });

        if (!errors.isEmpty()) {
            res.json({ msg: 'fail' });
        } else {
            article.save();
            res.json({ msg: 'success' });
        }
    }
];

exports.article_put = function (req, res, next) {
    res.send('Updates an article. (TODO)');
}

exports.article_delete = function (req, res, next) {
    res.send('Deletes an article. (TODO)');
}
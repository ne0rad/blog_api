const { body, validationResult } = require('express-validator');
var Comment = require('../models/comment');

exports.all_comments_get = function (req, res, next) {
    Comment.find({ article: req.params.id })
        .sort({ date: -1 })
        .exec((err, result) => {
            if (err) return next(err);
            res.json(result);
        })
}

exports.comment_post = [
    body('name').isLength({ min: 1, max: 100 }),
    body('comment').isLength({ min: 1, max: 1000 }),
    (req, res, next) => {
        const errors = validationResult(req);

        var comment = new Comment({
            article: req.body.id,
            name: req.body.name,
            comment: req.body.comment,
            date: new Date()
        });

        if (!errors.isEmpty) {
            res.sendStatus(500);
        } else {
            comment.save();
            res.json({ msg: 'success' });
        }
    }
]

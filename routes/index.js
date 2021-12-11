var express = require('express');
var router = express.Router();
var cacheService = require("express-api-cache");
var cache = cacheService.cache;
var articleController = require('../controllers/articleController');
var commentController = require('../controllers/commentController');

// Article routes
router.get('/articles', articleController.all_articles_get);
router.post('/post_article', articleController.article_post);
router.get('/articles/:id', cache('30 minutes'), articleController.article_get);
router.put('/articles/:id', articleController.article_put);
router.delete('/articles/:id', articleController.article_delete);


// Comment routes
router.get('/comments/:id', commentController.all_comments_get);
router.post('/post_comment/:id', commentController.comment_post);

module.exports = router;

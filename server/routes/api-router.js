module.exports = function(app, express) {

    var apiRouter = express.Router();
    var User = require('../models/userModel.js');
    var Article = require('../models/articleModel.js');
    var Comment = require('../models/commentModel.js');

    // app.use(function(req, res, next) {
    //     console.log('/api middleware');
    //     next();
    // });

// ========== USERS ==========
    apiRouter.route('/users')
        .post(function(req, res) {

            var user = new User();

            user.username = req.body.username;
            user.password = req.body.password;

            user.save(function(err) {
                if (err) {
                    if (err.code == 11000) {
                        return res.json({
                            success: false,
                            message: 'A user with that username already exists.'
                        });
                    } else {
                        return res.send(err);
                    }
                }
                res.json({
                    message: 'User created!'
                });
            });
        })
        .get(function(req, res) {
            User.find(function(err, users) {
                if (err) res.status(400).json(err);
                else if (users) res.status(201).json(users);
            });
        });

    apiRouter.route('/users/:id')
        .get(function(req, res) {
            User.find({ _id: req.params.id }, function(err, user) {
                if (err) res.status(400).json(err);
                else if (user) res.status(201).json(user);
            });
        })
        .put(function(req, res) {
            User.findById(req.params.id, function(err, user) {
                if (err) res.status(400).json(err);

                if (req.body.username) user.username = req.body.username;
                if (req.body.password) user.password = req.body.password;

                 user.save(function(err) {
                     if (err) res.status(400).json(err);
                     res.status(201).json({ message: 'User updated.' });
                 });
            });
        })
        .delete(function(req, res) {

            User.findOneAndRemove({
                _id: req.params.id
            }, function(err) {
                if (err) res.status(400).json(err);
                res.status(201).json({ message: 'User deleted.' });
            });

        });

// ========== ARTICLES ==========

    apiRouter.route('/articles')
        .post(function(req, res) {
            Article.create({
                title: req.body.title,
                subtitle: req.body.subtitle,
                body: req.body.body,
                images: req.body.images,
                comments: req.body.comments
            }, function(err, article) {
                if (err) res.status(400).json(err);
                else if (article) res.status(201).json(article);
            });
        })
        .get(function(req, res) {
            Article.find(function(err, articles) {
                if (err) res.status(400).json(err);
                else if (articles) res.status(201).json(articles);
            });
        });

    apiRouter.route('/articles/:id')
        .get(function(req, res) {
            Article.find({ _id: req.params.id }, function(err, article) {
                if (err) res.status(400).json(err);
                else if (article) res.status(201).json(article);
            });
        })
        .put(function(req, res) {
            var update = {};

            if (req.body.title) update.title = req.body.title;
            if (req.body.subtitle)update.subtitle = req.body.subtitle;
            if (req.body.body) update.body = req.body.body;
            if (req.body.images) update.images = req.body.images;
            if (req.body.comments) update.comments = req.body.comments;

            Article.findOneAndUpdate({ _id: req.params.id }, update, function(err, article) {
                if (err) res.status(400).json(err);
                else if (article) res.status(201).json({ message: 'Article updated.' })
            });
        })
        .delete(function(req, res) {
            Article.findOneAndRemove({
                _id: req.params.id
            }, function(err) {
                if (err) res.status(400).json(err);
                res.status(201).json({ message: 'Article deleted.' })
            });
        });

    apiRouter.route('/comments')
        .post(function(req, res) {
            Comment.create({
                text: req.body.text,
                date: Date(),
                postedBy: req.body.postedBy
            }, function(err, comment) {
                if (err) res.status(400).json(err);
                else if (comment) res.status(201).json(comment);
            });
        })
        .get(function(req, res) {
            Comment.find(function(err, comments) {
                if (err) res.status(400).json(err);
                else if (comments) res.status(201).json(comments);
            });
        });
    apiRouter.route('/comments/:id')
        .get(function(req, res) {
            Comment.find({ _id: req.params.id }, function(err, comment) {
                if (err) res.status(400).json(err);
                else if (res.status(201).json(comment));
            });
        })
        .put(function(req, res) {
            var update = {};

            if (req.body.body) update.text = req.body.body;

            Comment.findOneAndUpdate({ _id: req.params.id }, update, function(err, comment) {
                if (err) res.status(400).json(err);
                else if (comment) res.status(201).json({ message: 'Comment updated.' });
            });
        })
        .delete(function(req, res) {
            Comment.findOneAndRemove({
                _id: req.params.id
            }, function(err) {
                if (err) res.status(400).json(err);
                res.status(201).json({ message: 'Comment deleted.' })
            });
    });
    return apiRouter;
};

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ArticleSchema = new Schema({
    title: {
        type: String,
        maxLength: 40,
        required: true,
        unique: true
    },
    subtitle: {
        type: String
    },
    body: {
        type: String
    },
    images: [{
        type: String
    }],
    comments: [{
        type: String
    }]
});

module.exports = mongoose.model('Article', ArticleSchema);

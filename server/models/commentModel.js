var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var CommentSchema = new Schema({
    text: String,
    date: Date,
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('Comment', CommentSchema);

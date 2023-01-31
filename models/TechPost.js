const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TechPostSchema = new Schema ({
    title: String,
    body: String,
    source: String,
    url: String,
    image: String,
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    datePosted: {
        type: Date,
        default: new Date
    }
})

const TechPost = mongoose.model('TechPost', TechPostSchema)
module.exports = TechPost
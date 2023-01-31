const BlogPost = require('../models/BlogPost');

module.exports = async (req, res) => {
    const blogs = await BlogPost.find({}).limit(3).sort({_id: -1}).populate('userid');
    res.render('index', {
        title: "Home Page",
        blogs
    })
}
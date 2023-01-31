const TechPost = require('../models/TechPost');

module.exports = async (req, res) => {
    const technology = await TechPost.find({}).sort({_id: -1}).populate('userid');
    res.render('technology', {
        title: "Express Technology",
        technology
    })
}
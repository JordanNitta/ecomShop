const Apparel = require("../models/apparel.model")

const getApparel = async (req, res) => {
    const apparel = await Apparel.find({})
    res.json(apparel)
}

const getApparelById = async (req, res) => {
    const apparel = await Apparel.findById(req.params.id)
    if(apparel) {
        return res.json(apparel)
    } else {
        res.status(404)
    }
}
module.exports = {pass}
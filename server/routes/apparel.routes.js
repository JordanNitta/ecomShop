const { getApparel, getApparelById } = require('../controllers/apparel.controller')

module.exports = app => {
    app.get('/api/all/apparel', getApparel)
    app.get('/api/apparel/:id', getApparelById)
}
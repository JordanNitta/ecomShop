const { registerUser } = require('../controllers/user.controller')

module.exports = app => {
    app.post('/api/user/create', registerUser)
}

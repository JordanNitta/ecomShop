const { registerUser, handleGetAllUsers, handleGetLoggedUser } = require('../controllers/user.controller')

module.exports = app => {
    app.post('/api/user/create', registerUser)
    app.get('/api/all/users', handleGetAllUsers)
    app.get('/api/logged/user', handleGetLoggedUser)
}

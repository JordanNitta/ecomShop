const { registerUser, handleGetAllUsers, handleGetLoggedUser, loginUser, logOut } = require('../controllers/user.controller')

module.exports = app => {
    app.post('/api/user/create', registerUser)
    app.post('/api/user/login', loginUser)
    app.get('/api/all/users', handleGetAllUsers)
    app.get('/api/logged/user', handleGetLoggedUser)
    app.delete('/api/logOut', logOut)
}

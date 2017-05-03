module.exports = function (app) {

    userController = require('./controller/userController');
    adminController = require('./controller/adminController');

    // User
    app.get('/', userController.accueil);
    app.get('/capsule', userController.capsule);
    app.get('/capsule/:id', userController.capsuleStep);
    app.get('/inscription', userController.inscription);


    // Admin
    app.get('/admin/login', adminController.login);
    app.post('/admin/login', adminController.loginPost);
    app.get('/admin/dashboard', adminController.dashboard);
};
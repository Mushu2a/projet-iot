module.exports = function (app) {

    userController = require('./controller/userController');
    adminController = require('./controller/adminController');

    // User
    app.get('/', userController.accueil);
    app.get('/capsule', userController.capsule);
    app.get('/capsule/left', userController.capsuleStepL);
    app.get('/capsule/right', userController.capsuleStepR);
    app.get('/inscription', userController.inscription);
    //app.get('/inscription/:lastname/:firstname', userController.inscriptionStep);
    app.get('/card', userController.getCard);
    app.get('/getcapsule/:id', userController.getCapsule);


    // Admin
    app.get('/admin/login', adminController.login);
    app.post('/admin/login', adminController.loginPost);
    app.get('/admin/dashboard', adminController.dashboard);
};
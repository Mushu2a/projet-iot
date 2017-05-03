
exports.accueil = function (req, res) {
    res.render('user/accueil');
};

exports.capsule = function (req, res) {
    res.render('user/capsule');
};

exports.capsuleStep = function (req, res) {
    console.log(req.params.id);
    res.render('user/capsule-step');
};

exports.inscription = function (req, res) {
    res.render('user/inscription');
};

exports.dashboard = function (req, res) {
  res.render('admin/dashboard');
};

exports.login = function (req, res) {
  res.render('admin/login');
};

exports.loginPost = function (req, res) {
  res.redirect('/admin/dashboard');
};
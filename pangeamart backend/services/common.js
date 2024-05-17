const passport = require('passport');

exports.isAuth = (req, res, done) => {
  return passport.authenticate('jwt');
};

exports.sanitizeUser = (user) => {
  return { id: user.id, role: user.role };
};

exports.cookieExtractor = function (req) {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies['jwt'];
  }
  //TODO : this is temporary token for testing without cookie
  token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NDdiOWEzMDRjZjYyYTFmMjJmY2M2ZiIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzE1OTc2NjExfQ.VWfIZbu4l0qCOiFMJ_4dmmKOhwYcO8LB-fiMekn_G18";
  return token;
};
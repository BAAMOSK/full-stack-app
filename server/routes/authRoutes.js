const passport =  require('passport');

module.exports = app => {
  //goes to google to get code
  //passport handles logic
  app.get('/auth/google', passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );
  //user returns with code
  app.get('/auth/google/callback', passport.authenticate('google'));

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.send(req.user);
  });

  app.get('/api/current_user', (req, res) => {
    // res.send(req.session);
    res.send(req.user);
  });

};
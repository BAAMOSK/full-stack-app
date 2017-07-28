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
};
const users = require('./user');

module.exports = (app) => {
  app.use('/api/register', users)
}
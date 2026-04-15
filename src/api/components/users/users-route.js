const express = require('express');

const userAuth = require('../../middlewares/user-middleware');
const adminOnly = require('../../middlewares/admin-middleware');
const usersController = require('./users-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/users', route);

  // Get all users (admin)
  route.get('/', userAuth, adminOnly, usersController.getUsers);

  // Create a new user, register
  route.post('/', usersController.createUser);

  // Get user detail
  route.get('/me', userAuth, usersController.getUser);

  // Update user
  route.put('/me', userAuth, usersController.updateUser);

  // Change password
  route.put('/me/change-password', userAuth, usersController.changePassword);

  // Delete user (admin)
  route.delete('/:id', userAuth, adminOnly, usersController.deleteUser);
};

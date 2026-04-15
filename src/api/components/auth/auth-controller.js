const authService = require('./auth-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function login(request, response, next) {
  try {
    const { email, password } = request.body;

    const loginResult = await authService.checkLogin(email, password);

    if (!loginResult) {
      throw errorResponder(
        errorTypes.INVALID_CREDENTIALS,
        'Wrong email or password'
      );
    }
    return response.status(200).json(loginResult);
  } catch (error) {
    return next(error);
  }
}

async function register(request, response, next) {
  try {
    const { email, password, fullName } = request.body;

    const result = await authService.register(email, password, fullName);

    if (!result) {
      throw errorResponder(
        errorTypes.EMAIL_ALREADY_TAKEN,
        'Email already registered'
      );
    }

    return response.status(201).json(result);
  } catch (error) {
    return next(error);
  }
}

module.exports = { login, register };

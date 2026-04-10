function adminOnly(req, res, next) {
  const key = req.headers['x-api-key'];

  if (key !== 'admin123') {
    return res.status(403).json({
      message: 'Unauthorized',
    });
  }

  return next();
}

module.exports = adminOnly;

const errorMiddleware = (err, _req, res, _next) => {
  return res.status(err.status).json({
    err: { message: err.message, code: 'invalid_data' }
  });
};

module.exports = errorMiddleware;
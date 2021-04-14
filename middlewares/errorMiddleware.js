const errorMiddleware = (err, _req, res, _next) => {
  return res.status(err.status).send({ message: err.message });
};

module.exports = errorMiddleware;
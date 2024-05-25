const logger = (req, res, next) => {
  console.log(`${new Date()} --- Request: [${req.method}] [${req.url}]`);
  next();
};

module.exports = { logger };

const logger = (req, res, next) => {
  const fgCyan = "\x1b[36m";
  switch (req.method) {
    case "GET": {
      console.info(`📗 ${fgCyan}${req.method} request to ${req.path} DATA: \n ${req.body}`);
      break;
    }
    case "POST": {
      console.info(`📘 ${fgCyan}${req.method} request to ${req.path} DATA: \n ${req.body}`);
      break;
    }
    default:
      console.log(`📙${fgCyan}${req.method} request to ${req.path} DATA: \n ${req.body}`);
  }

  next();
};

module.exports = logger;

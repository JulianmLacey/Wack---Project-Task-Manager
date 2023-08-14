const logger = (req, res, next) => {
  const fgCyan = "\x1b[36m";
  switch (req.method) {
    case "GET": {
      console.info(`📗 ${fgCyan}${req.method} request to ${req.path} \n DATA: ${JSON.stringify(req.body)}`);
      break;
    }
    case "POST": {
      console.info(`📘 ${fgCyan}${req.method} request to ${req.path} \n DATA: ${JSON.stringify(req.body)}`);
      break;
    }
    default:
      console.log(`📙${fgCyan}${req.method} request to ${req.path} \n DATA: ${JSON.stringify(req.body)}`);
  }

  next();
};

module.exports = logger;

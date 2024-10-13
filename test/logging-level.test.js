import winston from "winston";

test("create new logger with console transport", () => {
  const logger = winston.createLogger({
    level: "warn",
    transports: [new winston.transports.Console({})],
  });

  logger.log({ level: "error", message: "Error Message" });
  logger.log({ level: "warn", message: "Warn Message" });
  logger.log({ level: "info", message: "Info Message" });
  logger.log({ level: "http", message: "Http Message" });
  logger.log({ level: "verbose", message: "Verbose Message" });
  logger.log({ level: "debug", message: "Debug Message" });
  logger.log({ level: "silly", message: "Silly Message" });
});

test("logging with shorcut function", () => {
  const logger = winston.createLogger({
    level: "warn",
    transports: [new winston.transports.Console({})],
  });

  logger.error("Hello Error");
  logger.warn("Hello Warn");
  logger.info("Hello Info");
  logger.http("Hello Http");
  logger.verbose("Hello Verbose");
  logger.debug("Hello Debug");
  logger.silly("Hello Silly");
  
});


import winston, { level } from "winston";

test("create new logger with console & file transport", () => {
  const logger = winston.createLogger({
    level: "info",
    transports: [
      new winston.transports.Console({}),
      new winston.transports.File({
        filename: "application.log",
      }),
      new winston.transports.File({
        level: "error",
        filename: "application-error.log"
      })
    ],
  });

  logger.info("Hellow Info");
  logger.error("Hellow Info");
  logger.warn("Hellow Info");
});

import winston from "winston";
import TransportStream from "winston-transport";

test("", () => {
    class MyTransport extends TransportStream {
        constructor(option) {
            super(option);
        }

        log(info, next) {
            console.log(`${new Date()} : ${info.level.toUpperCase()} : ${info.message}`);
            next()
        }
    }

    const logger = winston.createLogger({
        transports: [
            new MyTransport({})
        ]
    });

    logger.info("Hellow Info");
  logger.error("Hellow Info");
  logger.warn("Hellow Info");
  logger.http("Hellow Info");
  logger.verbose("Hellow Info");
  logger.debug("Hellow Info");
  logger.silly("Hellow Info");
})
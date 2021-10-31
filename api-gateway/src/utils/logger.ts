import winston from "winston";


export default class Logger {
  #logger: winston.Logger;

  constructor() {
    this.#logger = winston.createLogger({
      level: 'info',
      format: winston.format.json(),
      defaultMeta: { service: 'api-gateway' },
      transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: '../logs/error.log', level: 'error' }),
        new winston.transports.File({ filename: '../logs/combined.log' }),
      ],
    });
  }

  info = (message: string, context: string): void => {
    this.#logger.info(`[${context}] ${message}`);
  }

  error = (message: string, context: string): void => {
    this.#logger.error(`[${context}] ${message}`);
  }

  warning = (message: string, context: string): void => {
    this.#logger.warn(`[${context}] ${message}`);
  }
}

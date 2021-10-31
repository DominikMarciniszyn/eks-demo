import fastify from "fastify";
import Logger from './utils/logger';


const server = fastify();
const port = 3030;
const context = 'Server';
const logger = new Logger();


server.get('/healthz', async (request, response) => {
  logger.info('Healthcheck...', context);
  return 'Service is alive!';
});

server.listen(port, (error, address) => {
  if (error) {
    logger.error('Something went wrong with the server!', context);
    process.exit(1);
  }

  logger.info(`Server is listening at ${port}`, context);
});

import fastify from "fastify";


const server = fastify();
const port = 3030;


server.get('/healthz', async (request, response) => {
  return 'Service is alive!';
});

server.listen(port, (error, address) => {
  if (error) {
    console.error(error); //TODO: Replace with winston logger
    process.exit(1);
  }

  console.log(`Server is listening at ${port}`); //TODO: Replace with winston logger
});

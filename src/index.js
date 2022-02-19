const path = require('path');
const fastify = require('fastify')()

fastify.register(require('fastify-static'), {
  root: path.join(__dirname, 'public'),
  prefix: '/public/',
})

function html(content) {
  return (`
      <!doctype html>
      <html>
        <body>
            ${content}
        </body>
      </html>`
  );
}

fastify.get('/', async (request, reply) => {
  reply.status(200)
    .type('text/html')
    .send(html('<h1>Hello, World!</h1>'));
})

fastify.get('/blog', async (request, reply) => {
  reply.status(200)
    .type('text/html')
    .send(html('<h1>Blog</h1><div id="text"></div><script src="/public/hn.js"></script>'));
})

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start();
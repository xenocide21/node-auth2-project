const server = require('./api/server');

const port = process.env.Port || 4000;

server.listen(port, () => console.log(`\n*** Server Running on http://localhost:${port} ***\n`))
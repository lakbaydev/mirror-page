// Modules
const Koa = require('koa');
const path = require('path');
const serve = require('koa-static');

// Init Koa.js server
const server = new Koa();

// Mount the middleware
server.use(serve('./public'));

// Run Koa.js server
const PORT = process.env.PORT || 6060;
server.listen(PORT, () => console.log(`Server Live on PORT http://localhost:${PORT} 🚀 ..`));
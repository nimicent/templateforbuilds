

// default template

'use strict'

const createError = require('http-errors'),
	  express = require('express'),
 	  path = require('path'),
 	  cookieParser = require('cookie-parser'),
 	  logger = require('morgan'),
      fastify = require('fastify')({ logger: { level: 'trace' } }),
 	  app = express();

// fastify.register(require("fastify-formbody"));

// define routes
let indexRouter = require('./routes/index'),
    usersRouter = require('./routes/users');
    
app.use('/', indexRouter);
app.use('/users', usersRouter);

fastify
  .register(require('fastify-static'), {
  root: path.join(__dirname, 'public'),
  prefix: '/', // optional: default '/'
  })
  .listen(3000, function(err, address) {
    if (err) { throw err
  }
    fastify.log.info(`server listening on ${address} 🦋🕷🐯`);
})
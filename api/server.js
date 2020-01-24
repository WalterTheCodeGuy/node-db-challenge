const express = require('express');
const helmet = require('helmet');
const server = express();
const db = require('../data/dbconfig');

const resourcesRouter = require('../routers/resources-router');
const projectsRouter = require('../routers/projects-router');
const tasksRouter = require('../routers/tasks-router');

server.use(helmet());
server.use(express.json());
server.use('/api/resources', resourcesRouter);
server.use('/api/projects', projectsRouter);
server.use('/api/tasks', tasksRouter);
server.use('/api', db);

module.exports = server;
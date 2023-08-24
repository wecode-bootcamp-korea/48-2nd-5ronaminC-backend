const express = require('express');

const routes  = express.Router();

const wishRouter  = require('./wishRouter');

routes.use('/wishs', wishRouter);

module.exports = routes;

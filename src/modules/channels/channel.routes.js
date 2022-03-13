const router = require('express').Router();
const controller = require('./channels.controller');

/**
 * @swagger
 *   /api/channels:
 *     get:
 *       tags:
 *       - Channels
 *       description: Get all channels
 *       responses:
 *         200:
 *           description: Array with a list of channels
 */
 router.get('/', controller.getAll);

 /**
  * @swagger
  *   /api/channels/{id}:
  *     get:
  *       tags:
  *       - Channels
  *       description: Get one message by ID
  *       parameters:
  *         - in: path
  *           name: id
  *           required: true
  *           description: The message's unique ID
  *       responses:
  *         200:
  *           description: An object with a single message's data
  */
 router.get('/:id', controller.getOne);

/**
  * @swagger
  *   /api/channels/:
  *     get:
  *       tags:
  *       - Channels
  *       description: Create a new channel
  *       responses:
  *         200:
  *           description: A way to create channels
  */
 router.post('/', controller.create);

/**
  * @swagger
  *   /api/channels/{id}:
  *     get:
  *       tags:
  *       - Channels
  *       description: Delete the channel with the specifiq ID
  *       parameters:
  *         - in: path
  *           name: id
  *           required: true
  *           description: The channel unique ID
  *       responses:
  *         200:
  *           description: The way to delete a channel
  */
 router.delete('/:id', controller.delete);

 
module.exports = router;


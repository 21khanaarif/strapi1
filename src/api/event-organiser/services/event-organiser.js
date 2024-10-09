'use strict';

/**
 * event-organiser service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::event-organiser.event-organiser');

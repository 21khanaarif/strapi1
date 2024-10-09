'use strict';

/**
 * event-registrant service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::event-registrant.event-registrant');

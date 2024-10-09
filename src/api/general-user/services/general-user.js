'use strict';

/**
 * general-user service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::general-user.general-user');

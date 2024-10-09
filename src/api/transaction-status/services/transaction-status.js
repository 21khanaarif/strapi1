'use strict';

/**
 * transaction-status service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::transaction-status.transaction-status');

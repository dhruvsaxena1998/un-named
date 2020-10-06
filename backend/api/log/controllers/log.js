'use strict';

const { sanitizeEntity } = require('strapi-utils/lib');

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  create: async (ctx) => {
    const log = await strapi.services['log'].create({
      ...ctx.request.body
    });
    return sanitizeEntity(log, { model: strapi.models.log });
  }
};

// src/api/otp/controllers/otp.js
const generateOTP = require('../../../utils/otp');

module.exports = {
  // Function to send OTP to the specified email
  async sendOtp(ctx) {
    const { email } = ctx.request.body;
    if (!email) {
      return ctx.badRequest('Email is required');
    }

    const otp = generateOTP();

    try {
      await strapi.plugin('email').service('email').send({
        to: email,
        from: 'your-email@gmail.com',
        subject: 'Your OTP Code',
        text: `Your OTP code is ${otp}`,
      });

      // Store OTP in the database for verification
      await strapi.db.query('plugin::users-permissions.user').update({
        where: { email },
        data: { otp_code: otp },
      });

      ctx.send({ message: 'OTP sent successfully' });
    } catch (error) {
      ctx.send({ error: 'Failed to send OTP', details: error.message });
    }
  },

  // Function to verify the OTP input by the user
  async verifyOtp(ctx) {
    const { email, otp } = ctx.request.body;
    if (!email || !otp) {
      return ctx.badRequest('Email and OTP are required');
    }

    const user = await strapi.db.query('plugin::users-permissions.user').findOne({ where: { email } });

    if (user && user.otp_code === otp) {
      // Clear the OTP from the database for security
      await strapi.db.query('plugin::users-permissions.user').update({
        where: { email },
        data: { otp_code: null },
      });

      ctx.send({ message: 'OTP verified successfully' });
    } else {
      ctx.badRequest('Invalid OTP');
    }
  },
};



// src/api/otp/routes/otp.js
module.exports = {
    routes: [
      {
        method: 'POST',
        path: '/otp/send',
        handler: 'otp.sendOtp',
        config: { auth: false },
      },
      {
        method: 'POST',
        path: '/otp/verify',
        handler: 'otp.verifyOtp',
        config: { auth: false },
      },
    ],
  };
  




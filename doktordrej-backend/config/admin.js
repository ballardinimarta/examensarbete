module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4e65a8547d8f950998d5f2f9d87d0076'),
  },
});

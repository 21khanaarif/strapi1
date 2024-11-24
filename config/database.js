//render 

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-csu7jutumphs738nd880-a.frankfurt-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'aarifstrapidb'),
      user: env('DATABASE_USERNAME', 'aarifstrapidb_user'),
      password: env('DATABASE_PASSWORD', 'fO3k1eQofNgtpu6bP3gtpc9bvrFV83hX'),
      ssl: {
        rejectUnauthorized: false,
      },
    },
    debug: false,
  },
});

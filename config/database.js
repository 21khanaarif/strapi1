// //personal
// module.exports = ({ env }) => ({
//   connection: {
//     client: 'postgres',
//     connection: {
//       host: env('DATABASE_HOST', 'localhost'),
//       port: env.int('DATABASE_PORT', 5432),
//       database: env('DATABASE_NAME', 'aarif_db'), // replace with your database name
//       user: env('DATABASE_USERNAME', 'postgres'), // replace with your PostgreSQL username
//       password: env('DATABASE_PASSWORD', 'aarifkhan'), // replace with your PostgreSQL password
//       ssl: env.bool('DATABASE_SSL', false),
//     },
//     debug: false,
//   },
// });








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

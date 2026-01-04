export default ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DB_HOST"),
      port: env.int("DB_PORT"),
      database: env("DB_NAME"),
      user: env("DB_USER"),
      password: env("DB_PASSWORD"),
      ssl: false,
    },
    pool: {
      min: 0,
      max: 5,
    },
  },
});

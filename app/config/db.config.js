module.exports = {
  HOST: "fybyte.c48z1bqz6ck7.ap-south-1.rds.amazonaws.com",
  USER: "admin",
  PASSWORD: "amit2202",
  DB: "social",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

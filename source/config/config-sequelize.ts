const Sequelize = require("sequelize");

const MYSQL_DATABASE = "messagedb";
const MYSQL_USER = "root";
const MYSQL_PASS = "AtreaMartin";
const MYSQL_HOST = "127.0.0.1";

const SERVER_HOSTNAME = "localhost";
const SERVER_PORT = 3306;
//const SERVER_PORT = process.env.SERVER_PORT || 1337;

const sequelize = new Sequelize(MYSQL_DATABASE, MYSQL_USER, MYSQL_PASS, {
  //host: SERVER_HOSTNAME,
  //port: SERVER_PORT,
  dialect: "mysql",
  define: {
    freezeTablename: true,
  },
});

export default sequelize;


/*
const MYSQL = {
  host: MYSQL_HOST,
  database: MYSQL_DATABASE,
  user: MYSQL_USER,
  pass: MYSQL_PASS,
};

const SERVER = {
  hostname: SERVER_HOSTNAME,
  port: SERVER_PORT,
};

const config = {
  mysql: MYSQL,
  server: SERVER,
};
*/
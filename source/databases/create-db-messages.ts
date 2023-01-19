import sequelize from "../config/config-sequelize";
import logging from "../config/logging";
const { Sequelize } = require("sequelize");
const { DataTypes } = Sequelize;
const namespace = "create db messages";

const message = sequelize.define(
  "message",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoincrement: true,
      allownull: false,
    },
    targetId: {
      type: DataTypes.INTEGER,
      allownull: false,
    },
    Content: {
      type: DataTypes.STRING,
      allownull: false,
    },
    sent: {
      type: DataTypes.DATE,
      defaultValue: null,
    },
  },
  {
    freezeTablename: true,
    timestamps: false,
  }
);

function createMessageDB(): void {
  message
    .sync({ force: true })
    .then((data: any) => {
      logging.info(namespace, "Synchronized successfully.");
    })
    .catch((err: any) => {
      logging.error(namespace, "Error synchronizing.");
    });

  console.log("výpis: ");
  console.log(sequelize.models.message);
  console.log("^ výpis");
};

export default createMessageDB;

/*
    User.sync({alter: true}).then(()=>{
      return User.findAll({attributes:['username'], where: {age:45 }});
    }).then((data)=>{data.forEach((element=>{
  
    }))});
    */

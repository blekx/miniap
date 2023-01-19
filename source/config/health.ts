import sequelize from "./config-sequelize";
import logging from "./logging";

const namespace = "Health Check";

function test(): void {
  sequelize
    .authenticate()
    .then(() => {
      logging.info(namespace, "Connection Successful.");
    })
    .catch((err: any) => {
      logging.error(namespace, "Error connecting to database.");
    });
}

export default test;

import sequelize from './config/config-sequelize';
import test from './config/health';
import createMessageDB from './databases/create-db-messages';
import loop from './looper/loop';

test();
//createMessageDB();
console.log("server ts Hi");
loop();

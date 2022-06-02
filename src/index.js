import app from "./app.js";
import { sequelize } from "./database/database.js";

//This forces tables creation in sql
//import "./models/Projects.js";
//import "./models/Users.js";
//import "./models/Tasks.js";

async function main() {
  try {
    await sequelize.authenticate({ force: false });
    console.log("DB conection up");
    await sequelize.sync();
    app.listen(4000);
    console.log("server UP");
  } catch (error) {
    console.error("Unable to conecto to db", error);
  }
}

main();

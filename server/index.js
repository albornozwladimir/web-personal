const mongoose = require("mongoose");
const app = require("./app");
const port_server = process.env.PORT || 3977;
const { API_VERSION, IP_SERVER, portDb } = require("./config");

mongoose.connect(
  `mongodb://${IP_SERVER}:${portDb}/first_database`,
  (error, result) => {
    if (error) {
      throw error;
    } else {
      console.log("conexión completada");
      app.listen(port_server, () => {
        console.log("##################");
        console.log("#### API REST ####");
        console.log("##################");
        console.log(`http://${IP_SERVER}:${port_server}/api/${API_VERSION}`);
      });
    }
  }
);

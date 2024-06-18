const json_server = require("json-server");

const noteapp_server = json_server.create();

const cors = require("cors");

noteapp_server.use(cors());

const middleware = json_server.defaults();

noteapp_server.use(middleware);

const router = json_server.router("db.json");

noteapp_server.use(router);

const PORT = 8005;

noteapp_server.listen(PORT, () => {
  console.log("server started");
});

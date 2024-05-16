const express = require("express");
const cors = require("cors");

const port = process.env.PORT || 3001;

const app = express();

app.use(cors());

let dbConfig = {
  client: "mysql",
  connection: {
    user:"root",
    password: "0661131066",
    database: "portfolio",
  }
}

if (process.env.NODE_ENV == "production") {
  dbConfig.connection.socketPath = process.env.GAE_DB_SOCKET;
} else {
  dbConfig.connection.host = "34.105.63.70";
}

const knex = require("knex")(dbConfig);

app.get('/', (req, res) => {
  res.send("I work...");
});

app.get('/api/projects', async (req, res) => {
  try {
    const result = await knex.select().table("projects");
    res.send(result);
  } catch (error) {
    console.error("Error fetching projects:", error);
    res.status(500).send("Internal server error");
  }
})

app.listen(port, () => {
  console.log(`Server start listening on port ${port}`)
})

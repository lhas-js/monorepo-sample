const express = require("express");
const { project, getAuthors } = require("@monorepo-sample/common");
const app = express();
const port = 3000;

app.get("/", (req, res) =>
  res.send(`Hello ${project.name} from ${getAuthors()}!`)
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

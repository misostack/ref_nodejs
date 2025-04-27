const express = require("express");
const app = express();
const port = 1337;
const path = require("path");

// setup views
app.engine(".html", require("ejs").__express);
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "html");

app.get("/", (req, res) => {
  res.render("index", { title: "Hello World" });
});

app.listen(port, () => {
  console.log(`Example app is running at http://localhost:${port}`);
});

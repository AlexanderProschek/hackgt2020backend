const app = require("express")();

app.get("/", (req, res) => {
  res.json({ msg: "Hello" });
});

app.listen(3000);

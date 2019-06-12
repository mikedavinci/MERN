const express = require("express");
// require("./db/mongoose");
// const userRouter = require("./routers/user");
// const medRecordRouter = require("./routers/medRecord");

const app = express();

app.get("/", (req, res) => res.send("API Running"));

const port = process.env.PORT || 5000;

//automaticaly parses json to an object, so we can access with our request handlers.
// app.use(express.json());
// app.use(userRouter);
// app.use(medRecordRouter);

app.listen(port, () => {
  console.log("Server is up on port " + port);
});

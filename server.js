const express = require("express");
const connectToDB = require("./config/db");

const app = express();

connectToDB();

app.use(express.json()); //Used to parse JSON bodies

//Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  //set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is listening on ${PORT}`));

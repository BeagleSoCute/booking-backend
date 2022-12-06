const express = require("express");
const connectDB = require("./config/db");
const app = express();
const port = 6000;
const users = require("./routes/user");

// app.get("/", (req, res) => {
//   res.send("Hello Eve!");
// });
connectDB();
app.use("/users", users);

//NOTE listen to function to make our server application listen to client requests
app.listen(port, () => {
  console.log("Server is running on port " + port);
});

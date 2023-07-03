const express = require("express");
const connectDB = require("./config/db");
const app = express();
const port = 5000;
const user = require("./routes/user.route");
const auth = require("./routes/auth.route");
const booking = require("./routes/booking.route");
const product = require("./routes/product.route");
const cookieParser = require('cookie-parser')
app.use(express.json({ extended: false })); //NOTE Allow us to read the request.body
app.use(cookieParser());

// app.get("/", (req, res) => {
//   res.send("Hello Eve!");
// });
connectDB();
app.use("/api/user", user);
app.use("/api/auth", auth);
app.use("/api/booking", booking)
app.use("/api/product", product)

//NOTE listen to function to make our server application listen to client requests
app.listen(port, () => {
  console.log("Server is running on port " + port);
});

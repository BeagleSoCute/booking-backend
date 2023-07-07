const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const app = express();
const user = require("./routes/user.route");
const auth = require("./routes/auth.route");
const booking = require("./routes/booking.route");
const product = require("./routes/product.route");
require("dotenv").config();

const port = process.env.PORT || 4000;

// app.use(cors({
//   origin: 'https://booking-frontend.azurewebsites.net' // specify the allowed origin(s) here
// }));



var whitelist = [
  "https://aws-deploy.d5355usn3brkv.amplifyapp.com",
  "http://localhost:3000",
  "localhost:3000",
  "aws-deploy.d5355usn3brkv.amplifyapp.com"
]; //white list consumers
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(null, false);
    }
  },
  methods: ["GET", "PUT", "POST", "DELETE", "OPTIONS"],
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  credentials: true, //Credentials are cookies, authorization headers or TLS client certificates.
  allowedHeaders: [
    "Content-Type",
    "Authorization",
    "X-Requested-With",
    "device-remember-token",
    "Access-Control-Allow-Origin",
    "Origin",
    "Accept",
  ],
};

app.use(cors(corsOptions));



const cookieParser = require("cookie-parser");
app.use(express.json({ extended: false })); //NOTE Allow us to read the request.body
app.use(cookieParser());
connectDB();
app.use("/api/user", user);
app.use("/api/auth", auth);
app.use("/api/booking", booking);
app.use("/api/product", product);

//NOTE listen to function to make our server application listen to client requests
app.listen(port, () => {
  console.log("Server is running on port (latest aws) " + port);
});

// /* milestone-3
// const express = require("express");
// const app = express();
// const ErrorHandler = require("./middleware/error");



// // config
// if (process.env.NODE_ENV !== "PRODUCTION") {
//     require("dotenv").config({
//       path: "backend/config/.env",
//     });
// };

// // it's for ErrorHandling
// app.use(ErrorHandler);
// module.exports = app;*/
// const express = require("express");
// const app = express();
// const ErrorHandler = require("./middleware/error");
// const cookieParser = require("cookie-parser");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const path = require("path");

// app.use(express.json());
// app.use(cookieParser());
// app.use (cors())
// app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
// // app.use("/uploads",express.static("uploads"));
// // app.use("/products",express.static("products"));
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
// app.use('/products', express.static(path.join(__dirname, 'products')));
// // config
// if (process.env.NODE_ENV !== "PRODUCTION") {
//     require("dotenv").config({
//       path: "backend/config/.env",
//     });
// };
// // Configure CORS to allow requests from React frontend
// app.use(cors({
//   origin: 'http://localhost:3000', // Update this if your frontend is hosted elsewhere
//   credentials: true, // Enable if you need to send cookies or authentication headers
// }));

// //import Routes
// const user = require("./controller/user");
// const product=require("./controller/product");

// app.use("/api/v2/user", user);
// app.use("api/v2/product",product);

// // it's for ErrorHandling
// app.use(ErrorHandler);

// module.exports = app;
const express = require("express");
const app = express();
const ErrorHandler = require("./middleware/error");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use("/", express.static("uploads"));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
// config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "./config/.env",
  });
};
//import Routes
const user = require("./controller/user");
const product = require('./controller/product');

app.use("/api/v2/user", user);
app.use("/api/v2/product", product);

// it's for ErrorHandling
app.use(ErrorHandler);

module.exports = app;
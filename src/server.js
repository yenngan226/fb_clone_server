import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { createRequire } from "module";
import path from "path";
const require = createRequire(import.meta.url);
require("dotenv").config();
//import routes from "./routes/index.js";
//import { FOLDERS, FOLDER_UPLOAD, ROUTE_IMAGE } from "./constant/config.js";
import { dirname } from "path";
import { fileURLToPath } from "url";
import cookieParser from "cookie-parser";

const __dirname = dirname(fileURLToPath(import.meta.url));
const parentDirname = path.join(__dirname, "..");
const app = express();

var corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
// app.use("/api", routes);
// const handlerImage = Object.values(FOLDERS).reduce(
//   (result, current) => {
//     return [
//       ...result,
//       express.static(path.join(parentDirname, `/${FOLDER_UPLOAD}/${current}`)),
//     ];
//   },
//   [express.static(path.join(parentDirname, `/${FOLDER_UPLOAD}`))]
// );

// app.use(`/${ROUTE_IMAGE}`, ...handlerImage);

app.use((req, res, next) => {
  const status = 500;
  res.status(status);
  res.send("This route does not exist");
});
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

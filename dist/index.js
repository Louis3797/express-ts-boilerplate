import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
// import shouldCompress from "./utils/shouldCompress";
dotenv.config();
const app = express();
app.use(cors({
    // origin is given a array if we want to have multiple origins later
    origin: [process.env.CORS_ORIGIN],
    credentials: true,
}));
// Helmet is used to secure this app by configuring the http-header
app.use(helmet);
// Compression is used to reduce the size of the response body
app.use(compression());
app.get("/", (_req, res) => {
    res.send(`Hello World!`);
});
app.listen(parseInt(process.env.PORT), () => {
    console.log(`Server is running on Port: ${process.env.PORT}`);
});
//# sourceMappingURL=index.js.map
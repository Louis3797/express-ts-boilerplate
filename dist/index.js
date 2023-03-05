import express from "express";
import * as dotenv from "dotenv";
dotenv.config();
const app = express();
app.get("/", (_req, res) => {
    res.send(`Hello World!`);
});
app.listen(parseInt(process.env.PORT), () => {
    console.log(`Server is running on Port: ${process.env.PORT}`);
});
//# sourceMappingURL=index.js.map
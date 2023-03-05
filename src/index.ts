import express, { Express, Request, Response } from "express";
import * as dotenv from "dotenv";
dotenv.config();

const app: Express = express();

app.get("/", (_req: Request, res: Response) => {
  res.send(`Hello World!`);
});

app.listen(parseInt(process.env.PORT), () => {
  console.log(`Server is running on Port: ${process.env.PORT}`);
});

import express from "express";
import { IUser } from "@channelcheckr/shared";

const user: IUser = {
  firstname: "Jessica",
  lastname: "Dane",
};

const port = parseInt(process.env.PORT || "3000", 10);
const app = express();

app.get("/", (_req, res) => res.status(200).json({ user }));

app.listen(port, () => console.log(`Listening on port ${port}`));

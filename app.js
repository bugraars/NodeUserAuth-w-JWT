import express from "express";
import authRoutes from "./src/api/v1/routes/authRoutes.js";
import userRoutes from "./src/api/v1/routes/userRoutes.js";
import errorMiddleware from "./src/api/v1/middlewares/errorMiddleware.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cookieParser());
app.use(express.json());

app.use("/users", userRoutes); // users route
app.use("/auth", authRoutes); // users route

app.use(errorMiddleware); // hata yaklama middleware'i

app.listen(PORT, () => console.log(`Server running ${PORT}`));

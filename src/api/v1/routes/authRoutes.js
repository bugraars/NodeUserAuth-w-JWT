import { Router } from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import authController from "../controllers/authControllers/authControllers.js";

//Auth
const router = Router();
router.get("/login", authController.login);
router.get("/logout", authMiddleware, authController.logout);

export default router;

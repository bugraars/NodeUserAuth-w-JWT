import { Router } from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import userController from "../controllers/userControllers/userControllers.js";
// import authController from "../controllers/authControllers/authControllers.js";


const router = Router();
//User
router.post("/create", userController.createUser);
router.put("/edit", authMiddleware, userController.editUser);
router.delete("/delete/:id", authMiddleware, userController.deleteUser);
router.get("/:id", authMiddleware, userController.getUser);
router.get("/", authMiddleware, userController.getUser);

export default router;
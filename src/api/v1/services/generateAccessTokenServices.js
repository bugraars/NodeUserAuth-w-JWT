import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config();
const SECRET_KEY = process.env.KEY;

function generateAccessToken(username) {
  return jwt.sign(username, SECRET_KEY);
}
export default generateAccessToken;

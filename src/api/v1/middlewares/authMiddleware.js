import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const SECRET_KEY = process.env.KEY;

function authenticateToken(req, res, next) {
  console.log("Auth Middleware");
  let authorization = req.cookies.tokenJWT;
  if (authorization == null) authorization = req.headers["authorization"];
  // let token = authorization && authorization.split(" ")[1];
  let token = authorization;
  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) console.log(err);
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

export default authenticateToken;

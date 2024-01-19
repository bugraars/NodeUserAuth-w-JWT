// services/cryptPasswordService.js
import bcrypt from "bcrypt";
import generateAccessToken from "./generateAccessTokenServices.js";

const cryptPassword = async (password) => {
  const saltRounds = 12;
  const cryptedPassword = await bcrypt.hash(password, saltRounds);
  return cryptedPassword;
};

const compare = async (password, hashedPassword, username) => {
  const match = await bcrypt.compare(password, hashedPassword);
  if (match) {
    const token = generateAccessToken({ username });
    return { success: true, token };
  }
  return { success: false };
};

export default { cryptPassword, compare };

// userControllers/createUser.js
import generateAccessToken from "../../services/generateAccessTokenServices.js";
import { readUsers, writeUsers } from "../../services/usersJsonServices.js";
import cryptServices from "../../services/cryptPasswordServices.js";
import { fieldCheck } from "../../services/fieldCheckServices.js";
import { v4 as uuidv4 } from "uuid";

const { cryptPassword } = cryptServices;

const createUser = async (req, res) => {
  const { username, email, password, stillEmployee, role, department, age } =
    req.body;
  if (!username || !password || !email || !stillEmployee || !age) {
    return res
      .status(400)
      .json({
        message:
          "Kullanıcı adı, şifre, e-mail, çalışma durumu, yaş alanları boş bırakılamaz",
      });
  }
  const validationError = fieldCheck(req.body);
  if (validationError) {
    return res
      .status(validationError.status)
      .json({ message: validationError.message });
  }
  const users = readUsers();
  if (
    users.some((user) => user.username === username || user.email === email)
  ) {
    let message = "";
    if (users.some((user) => user.username === username)) {
      message += "Bu kullanıcı adı zaten kullanılıyor. ";
    }
    if (users.some((user) => user.email === email)) {
      message += "Bu e-posta adresi zaten kullanılıyor.";
    }
    return res.status(400).json({ message });
  }
  const id = uuidv4();
  const token = generateAccessToken({ username });
  const cryptedPassword = await cryptPassword(password);

  users.push({
    id,
    username,
    email,
    password: cryptedPassword,
    stillEmployee,
    role,
    department,
    age,
    token,
  });
  writeUsers(users);
  res
    .cookie("tokenJWT", `${token}`, { httpOnly: true, secure: true })
    .cookie("id", `${id}`, { httpOnly: true, secure: true })
    .status(201)
    .json({
      username: username,
      id: id,
      message: "Kayıt Başarıyla oluşturuldu.",
    });
};
export default createUser;

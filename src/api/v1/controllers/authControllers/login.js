import cryptPasswordServices from "../../services/cryptPasswordServices.js";
import { getUserByUsername } from "../../services/usersJsonServices.js";

const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(401).json({
      success: false,
      message: "Kullanıcı adı ve şifre boş bırakılamaz",
    });
  }
  const user = await getUserByUsername(username);
  if (!user) {
    return res
      .status(401)
      .json({ success: false, message: "Kullanıcı Bulunamadı" });
  }
  const comparePassword = await cryptPasswordServices.compare(
    password,
    user.password
  );
  if (comparePassword) {
    console.log(user);
    delete user.password;
    delete user.token;
    const token = comparePassword.token;
    res
      .cookie("tokenJWT", `${token}`, { httpOnly: true, secure: true })
      .cookie("id", `${user.id}`, { httpOnly: true, secure: true })
      .status(200)
      .json({
        username: username,
        id: user.id,
        message: "Giriş başarılı.",
      });
  } else {
    return res.status(401).json({ success: false, message: "Hatalı giriş" });
  }
};

export default login;

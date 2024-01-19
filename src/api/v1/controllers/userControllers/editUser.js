import { updateUser } from "../../services/usersJsonServices.js";
import authMiddleware from "../../middlewares/authMiddleware.js";
import { fieldCheck } from "../../services/fieldCheckServices.js";

const editUser = async (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password || !req.cookies.tokenJWT) {
    return res.status(401).json({
      message:
        "Kullanıcı adı, şifre ve token(cookie|header) ile doğrulama gerekli.",
    });
  }
  try {
    await authMiddleware(req, res, next);
    const updatedFields = await updateUser(req.body);
    const validationError = fieldCheck(req.body);
    if (validationError) {
      return res
        .status(validationError.status)
        .json({ message: validationError.message });
    }
    if (updatedFields.length === 0) {
      res.status(400).json({
        message:
          "Herhangi bir alan değiştirilmedi. Lütfen gönderdiğiniz verileri kontrol ediniz.",
      });
    } else
      res
        .status(200)
        .json({ message: "Kullanıcı başarıyla güncellendi.", updatedFields });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default editUser;

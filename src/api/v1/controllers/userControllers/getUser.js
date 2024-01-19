import { readUsers, getUserById } from "../../services/usersJsonServices.js";

const getUsers = async (req, res) => {
  const { id } = req.params;

  try {
    if (id) {
      const user = await getUserById(id);
      if (!user) {
        return res.status(404).json({ message: "Kullanıcı bulunamadı" });
      }
      delete user.password;
      delete user.token;
      return res.status(200).json(user);
    } else {
      const users = await readUsers();
      const usersWithoutSensitiveInfo = users.map((user) => {
        delete user.password;
        delete user.token;
        return user;
      });
      if (users.length === 0) {
        return res.status(404).json({ message: "Kayıtlı kullanıcı yok. Kullanıcı kaydetmelisiniz." });
      }
      return res.status(200).json(usersWithoutSensitiveInfo);
    }
  } catch (error) {
    return res.status(500).json({ message: "Bir hata oluştu" });
  }
};

export default getUsers;
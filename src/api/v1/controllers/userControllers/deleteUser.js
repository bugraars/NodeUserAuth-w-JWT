import { deleteUser } from "../../services/usersJsonServices.js";

const deleteUserController = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedUser = await deleteUser(id);
    if (!deletedUser) {
      return res.status(404).json({ message: "Kullanıcı bulunamadı" });
    }
    delete deletedUser.password;
    delete deletedUser.token;
    return res
      .status(200)
      .json({ message: "Kullanıcı başarıyla silindi", user: deletedUser });
  } catch (error) {
    return res.status(500).json({ message: "Bir hata oluştu" });
  }
};

export default deleteUserController;

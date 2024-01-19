// userControllers/userController.js
import createUser from "./createUser.js";
import editUser from "./editUser.js";
import getUser from "./getUser.js";
import deleteUser from "./deleteUser.js";

const userController = {
  createUser: createUser,
  editUser: editUser,
  deleteUser: deleteUser,
  getUser: getUser,
};

export default userController;

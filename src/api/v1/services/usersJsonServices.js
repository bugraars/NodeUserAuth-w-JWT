// services/usersJsonServices.js
import { fileURLToPath } from "url";
import { dirname } from "path";
import path from "path";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const USERS_FILE = path.join(__dirname, "..", "data", "users.json");
//kullanıcı okuma
const readUsers = () => {
  let users;
  try {
    users = JSON.parse(fs.readFileSync(USERS_FILE, "utf8"));
  } catch (error) {
    users = [];
  }
  return users;
};
//kullanıcı yazma
const writeUsers = (users) => {
  fs.writeFileSync(USERS_FILE, JSON.stringify(users));
};
//kullanıcı bulma
const getUserByUsername = (username) => {
  const users = readUsers();
  return users.find((user) => user.username === username);
};
const getUserById = (id) => {
  const users = readUsers();
  return users.find((user) => user.id === id);
};
//kullanıcı silme
const deleteUser = (id) => {
  const users = readUsers();
  const userIndex = users.findIndex((user) => user.id === id);

  if (userIndex === -1) {
    throw new Error("Kullanıcı bulunamadı");
  }
  const deletedUser = users[userIndex];
  users.splice(userIndex, 1);
  writeUsers(users);
  return deletedUser;
};
//kullanıcı güncelleme
const updateUser = async (updatedUserInfo) => {
  const existingUsers = JSON.parse(fs.readFileSync(USERS_FILE, "utf8"));
  // Güncellenecek id'yi engelle
  delete updatedUserInfo.id;
  // Güncellenecek kullanıcıyı bul
  const userIndex = existingUsers.findIndex(
    (user) => user.username === updatedUserInfo.username
  );
  // Eğer kullanıcı bulunamazsa, hata fırlat
  if (userIndex === -1) {
    throw new Error("Kullanıcı bulunamadı");
  }
  // Orijinal kullanıcı bilgisinin bir kopyasını tut
  const originalUserInfo = { ...existingUsers[userIndex] };
  // Kullanıcının bilgisini güncelle
  existingUsers[userIndex] = {
    ...existingUsers[userIndex],
    ...updatedUserInfo,
  };
  // Hangi alanların güncellendiğini belirle
  const updatedFields = Object.keys(updatedUserInfo).filter(
    (key) => originalUserInfo[key] !== updatedUserInfo[key]
  );
  // Güncellenmiş kullanıcıları dosyaya geri kaydet
  fs.writeFileSync(USERS_FILE, JSON.stringify(existingUsers, null, 2));
  // Güncellenen alanları döndür
  return updatedFields;
};

export {
  USERS_FILE,
  readUsers,
  getUserByUsername,
  getUserById,
  writeUsers,
  deleteUser,
  updateUser,
};

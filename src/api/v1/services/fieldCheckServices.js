//Alanların veri tipleri kontrol ediliyor.
function validateEmail(email) {
  const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  return emailRegex.test(email);
}

function validatePassword(password) {
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
  return passwordRegex.test(password);
}
function validateUsername(username) {
  return typeof username === "string" && username.length > 0;
}

function validateStillEmployee(stillEmployee) {
  return typeof stillEmployee === "boolean";
}

function validateRole(role) {
  return typeof role === "string" && role.length > 0;
}

function validateAge(age) {
  return typeof age === "number" && age > 0;
}

function validateDepartment(department) {
  return typeof department === "string" && department.length > 0;
}
//fonksiyona parametre ile gerekli kontrol alanlarını atıyoruz.
function fieldCheck(fields) {
  const { username, password, email, stillEmployee, role, age, department } =
    fields;

  if (!username || !validateUsername(username)) {
    return { status: 400, message: "Kullanıcı adı boş bırakılamaz" };
  }
  if (!password || !validatePassword(password)) {
    return {
      status: 400,
      message:
        "Şifre en az 8 karakter uzunluğunda olmalı, en az bir rakam, bir büyük ve bir küçük karakter içermeli.",
    };
  }
  if (!email || !validateEmail(email)) {
    return { status: 400, message: "E-mail geçersiz formatta" };
  }
  if (stillEmployee !== undefined && !validateStillEmployee(stillEmployee)) {
    return { status: 400, message: "Geçersiz çalışan durumu tipi:(Boolean)" };
  }
  if (role && !validateRole(role)) {
    return { status: 400, message: "Geçersiz rol tipi:(String)" };
  }
  if (age && !validateAge(age)) {
    return { status: 400, message: "Geçersiz yaş tipi:(Number)" };
  }
  if (department && !validateDepartment(department)) {
    return { status: 400, message: "Geçersiz departman (String)" };
  }
  return null;
}
export {
  validateEmail,
  validatePassword,
  validateUsername,
  validateStillEmployee,
  validateRole,
  validateAge,
  validateDepartment,
  fieldCheck,
};

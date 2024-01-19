const logout = (req, res) => {
  res.clearCookie("tokenJWT");
  return res
    .status(200)
    .json({ success: true, message: "Çıkış yapıldı." });
};

export default logout;

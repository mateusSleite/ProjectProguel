const User = require("../model/User");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const CryptoJS = require("crypto-js");

class UserController {
  static async register(req, res) {
    var bytes = CryptoJS.AES.decrypt(req.body.jsonCrypt, process.env.SECRET);
    const decryptd = bytes.toString(CryptoJS.enc.Utf8);
    const json = JSON.parse(decryptd);

    const { name, email, password, confirmPassword, cpf } = json;

    const emailExist = await User.findOne({ email: email });
    const cpfExist = await User.findOne({ cpf: cpf });

    if (!name) return res.status(400).json({ message: "Nome é obrigatório11" });

    if (!email) return res.status(400).json({ message: "Email é obrigatório" });

    if (!password)
      return res.status(400).json({ message: "Senha é obrigatório" });

    if (password != confirmPassword)
      return res.status(400).json({ message: "As senhas não são iguais" });

    if (!cpf) return res.status(400).json({ message: "CPF é obrigatório" });

    if (emailExist)
      return res.status(422).json({ message: "Já existe conta nesse e-mail" });

    if (cpfExist)
      return res.status(422).json({ message: "Já existe conta nesse cpf" });

    const passwordCrypt = CryptoJS.AES.encrypt(
      password,
      process.env.SECRET
    ).toString();

    const user = new User({
      name,
      email,
      password: passwordCrypt,
      cpf,
      isAdm: false,
      createdAt: Date.now(),
      updatedAt: Date.now(),
      removedAt: null,
    });

    try {
      await User.create(user);
      res.status(201).send({ message: "Usuário cadastrado com sucesso" });
    } catch (error) {
      return res
        .status(500)
        .send({ message: "Erro ao cadastrar", data: error.message });
    }
  }

  static async login(req, res) {
    console.log(req.body);
    var bytes = CryptoJS.AES.decrypt(req.body.jsonCrypt, process.env.SECRET);
    const decryptd = bytes.toString(CryptoJS.enc.Utf8);
    const json = JSON.parse(decryptd);


    const { email, password } = json;

    if (!email || !password)
      return res
        .status(400)
        .json({ menssage: "E-mail e senha são obrigatórios" });

    try {
      const user = await User.findOne({ email });

      if (!user)
        return res.status(404).json({ message: "Email não existente" });

      const decryptPassword = CryptoJS.AES.decrypt(
        user.password,
        process.env.SECRET
      ).toString(CryptoJS.enc.Utf8);

      if (decryptPassword !== password)
        return res.status(401).json({ message: "Senha incorreta" });

      const secret = process.env.SECRET;
      const token = jwt.sign(
        {
          id: user._id,
          isAdm: user.isAdm,
          name: user.name
        },
        secret,
        {
          expiresIn: "1 days",
        }
      );
      res.status(200).json({ token: token });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Erro ao logar!", data: error.menssage });
    }
  }
}

module.exports = UserController;

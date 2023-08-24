const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { userDao } = require("../models");
const { validateSignUp } = require("../utils/validator");

const hashPassword = async (plaintextPassword) => {
  const saltRounds = 10;

  return await bcrypt.hash(plaintextPassword, saltRounds);
};

const signUp = async(
  username,
  email,
  password,
  birthdate,
  phoneNumber,
  gender,
  address,
  postCode,
  preferredStoreId,
) => {
  validateSignUp(email, password, birthdate, phoneNumber,postCode);

  const hashedPassword = await hashPassword(password);
  const createUser = await userDao.createUser(
    username,
    email,
    hashedPassword,
    birthdate,
    phoneNumber,
    gender,
    address,
    postCode,
    preferredStoreId,
  );
  console.log(createUser);
  return createUser;
};

module.exports = {
  signUp,
}
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

const signIn = async (email, password) => {
  const user = await userDao.getUserByEmail(email);

  if (!user) {
    const error = new Error('INVALID_USER');
    error.statusCode = 401;

    throw error;
  }

  const isMatched = await bcrypt.compare(password, user.password);

  if (!isMatched) {
    const error = new Error('INVALID_USER');
    error.statusCode = 401;

    throw error;
  }

  const accessToken = jwt.sign({ id : user.id }, process.env.JWT_SECRET, {
    algorithm : process.env.ALGORITHM,
    expiresIn : process.env.JWT_EXPIRES_IN,
  });

  return accessToken;
};

const getUserById = async (id) => {
  return await userDao.getUserById(id);
};

module.exports = {
  signUp,
  signIn,
  getUserById
}
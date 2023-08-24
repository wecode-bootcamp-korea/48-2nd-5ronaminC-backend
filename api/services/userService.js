const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { userDao } = require("../models");

const hashPassword = async (plaintextPassword) => {
  const saltRounds = 10;

  return await bcrypt.hash(plaintextPassword, saltRounds);
};

const signUp = async (
  username,
  email,
  password,
  birthdate,
  phoneNumber,
  gender,
  address,
  postCode,
  preferredStoreId
) => {
const emailRegex = 
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
const passwordRegex = 
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
const birthdateRegex = 
    /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/;
const phoneNumberRegex = 
    /^[0-9]{11}$/;
const postCodeRegex = 
    /^[0-9]{5}$/;

  if (!emailRegex.test(email)) {
    const error = new Error("INVALID_USER : email");
    error.statusCode = 400;

    throw error;
  }

  if (!passwordRegex.test(password)) {
    const error = new Error("INVALID_USER : password");
    error.statusCode = 400;

    throw error; 
  } 

  if (!birthdateRegex.test(birthdate)) {
    const error = new Error("INVALID_USER : birthdate");
    error.statusCode = 400;

    throw error; 
  }

  if (!phoneNumberRegex.test(phoneNumber)) {
    const error = new Error("INVALID_USER : phone_number"); 
    error.statusCode = 400;
    
    throw error;  
  } 

  if (!postCodeRegex.test(postCode)) {
    const error = new Error("INVALID_USER : post_code"); 
    error.statusCode = 400;
    
    throw error;  
  } 

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
};
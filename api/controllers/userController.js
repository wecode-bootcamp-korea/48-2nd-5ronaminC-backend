const { userService } = require("../services");
const { catchAsync } = require("../utils/error");

const signUp = catchAsync(async (req, res) => {
  const {
    username,
    email,
    password,
    birthdate,
    phoneNumber,
    gender,
    address,
    postCode,
    preferredStoreId,
  } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    !birthdate ||
    !phoneNumber ||
    !gender ||
    !address ||
    !postCode ||
    !preferredStoreId
  ) {
    const error = new Error("KEY_ERROR");
    error.statusCode = 400;

    throw error;
  }
  const createUser = await userService.signUp(
    username,
    email,
    password,
    birthdate,
    phoneNumber,
    gender,
    address,
    postCode,
    preferredStoreId
  );
  res.status(201).json({ message: "user is created", createUser });
});

const signIn = async (req, res) => {
    const { email, password } = req.body;

    try {
        const accessToken = await userService.signIn(email, password);
        res.status(200).json({ accessToken });
    } catch (err) {
        res.status(err.statusCode).json({ message : err.message });
    }
};

module.exports = {
  signUp,
  signIn
};

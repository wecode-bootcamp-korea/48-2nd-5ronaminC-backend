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

module.exports = {
  signUp,
};

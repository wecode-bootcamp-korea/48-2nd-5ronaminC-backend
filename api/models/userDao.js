const dataSource = require("./dataSource");

const createUser = async (
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
  try {
    const result = await dataSource.query(
            `
            INSERT INTO users (
                username, 
                email, 
                password,
                birthdate,
                phone_number,
                gender,
                address,
                post_code,
                preferred_store_id
                ) VALUES (
                    ?, ?, ?, ?, ?, ?, ?, ?, ?
                )
            `,
      [
        username,
        email,
        password,
        birthdate,
        phoneNumber,
        gender,
        address,
        postCode,
        preferredStoreId,
      ]
    );

    return result;

  } catch(err) {
    const error = new Error("dataSource Error");
    error.statusCode = 400;

    throw error;
  }
};

module.exports = {
    createUser,
};
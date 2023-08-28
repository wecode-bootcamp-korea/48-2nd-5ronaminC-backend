const validateSignUp = async (
    email,
    password,
    birthdate,
    phoneNumber,
    postCode,
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
      const error = new Error("INVALID_USER : phoneNumber"); 
      error.statusCode = 400;
      
      throw error;  
    } 
  
    if (!postCodeRegex.test(postCode)) {
      const error = new Error("INVALID_USER : postCode"); 
      error.statusCode = 400;
      
      throw error;  
    } 
};

module.exports = {
    validateSignUp,
}
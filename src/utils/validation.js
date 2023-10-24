const EmailValidator = (email) => {
  console.log("email-----", email);
  const re = /\S+@\S+\.\S+/;
  if (!email) {
    return "Email can't be empty.";
  }
  if (!re.test(email)) {
    return "Ooops! We need a valid email address.";
  }
  return "";
};

const PhoneNumberValidator = (phoneNumber) => {
  const regex = /^[0-9+\-\s]{6,}$/;
  if (!regex.test(phoneNumber)) {
    return "Please enter a valid phone number";
  }
  return "";
};

const PasswordValidator=(pass)=>{
  const regex=/.{8,}/;

  if (!regex.test(pass)) {
    return "Password must be atleast 8 characters.";
  }
  return "";
};

const PriceValidator=(pass)=>{
  const regex=/^\d+$/;

  if (!regex.test(pass)) {
    return "Please enter valid price";
  }
  return "";
}

export {EmailValidator, PhoneNumberValidator,PasswordValidator,PriceValidator};

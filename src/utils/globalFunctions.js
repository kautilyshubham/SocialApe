export const isEmailValid = email => {
  let error = {};
  const regex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
  if (!email.trim()) {
    error["email"] = "Email required";
  } else if (regex.test(email.trim()) === false) {
    error["email"] = "Please enter valid email";
  }
  if (Object.keys(error).length) {
    return error;
  }
  return true;
};

export const isValidPassword = password => {
  let error = {};
  var passsReg = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  if (!password.trim()) {
    error["password"] = "Password required";
  } else if (password.length < 8) {
    error["password"] = "Password should be minimum of 8 charectors";
  } else if (passsReg.test(password.trim()) === false) {
    error["password"] =
      "Password must contain a number, special charector, uppercase and lowercase";
  }

  if (Object.keys(error).length) {
    return error;
  }
  return true;
};

export const isEmpty = text => {
  if (text.trim()) {
    return false;
  } else {
    return true;
  }
};

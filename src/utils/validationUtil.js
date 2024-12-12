export const handleFirstName = (value) => {
  const regex = /^[a-zA-Z]+$/;
  if (!regex.test(value)) {
    return "First name should only contain letters";
  }
  return true;
};

export const handleLastName = (value) => {
  const regex = /^[a-zA-Z]+$/;
  if (!regex.test(value)) {
    return "Last name should only contain letters";
  }
  return true;
};

export const handleEmail = (value) => {
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  if (!regex.test(value)) {
    return "Invalid email address It must be like this aa@bb.com";
  }
  return true;
};

export const handleUsername = (value) => {
  if (value.length < 4) {
    return "Username must be at least 4 characters long";
  }
  return true;
};
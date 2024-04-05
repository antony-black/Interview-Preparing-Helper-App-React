export const ValidationService = {
  validateName(name) {
    const nameRegex = /^[a-zA-Z\s\-']{4,}$/;
    const isNameValid = nameRegex.test(name);
    return isNameValid
      ? true
      : (false, alert("Name must be at least 4 characters long!"));
  },

  validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailRegex.test(email);
    return isEmailValid ? true : (false, alert("Invalid email format!"));
  },

  validatePassword(password) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    const isPasswordValid = passwordRegex.test(password);
    return isPasswordValid
      ? true
      : (false,
        alert(
          "Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, and one number!"
        ));
  },

  handleValidation(inputValue) {
    if (
      ValidationService.validateName(inputValue.name) &&
      ValidationService.validateEmail(inputValue.email) &&
      ValidationService.validatePassword(inputValue.password)
    ) {
      return true;
    }

    return false;
  },

  isValid(inputValue) {
    return ValidationService.handleValidation(inputValue);
  },
};

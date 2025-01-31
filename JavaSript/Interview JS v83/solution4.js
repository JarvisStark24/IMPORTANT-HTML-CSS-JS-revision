// 4. The Password Validator:
//    You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.

//    Examples:
//    password("password") ➞ false
//    password("P1@p") ➞ true
//    password("P1@pP1@p") ➞ false

//    Notes:
//    The input string will never be empty.

// Test cases
console.log(passwordValidator("password")); // false (no uppercase, no digit)
console.log(passwordValidator("P1@p")); // false (less than 8 characters)
console.log(passwordValidator("P1@pP1@p")); // true (meets all conditions)
console.log(passwordValidator("A1bcdefg")); // true (meets all conditions)
console.log(passwordValidator("abcdefgh")); // false (no digit, no uppercase)
console.log(passwordValidator("12345678")); // false (no uppercase, no lowercase)

// Solution
function passwordValidator(password) {
  // Checking if password is at least 8 characters long
  if (password.length !== 8) return false;

  // Checking if password contains both uppercase and lowercase letters
  let hasUpperCase = /[A-Z]/.test(password);
  let hasLowerCase = /[a-z]/.test(password);
  let hasDigit = /\d/.test(password);

  // Returning true if password meets all conditions
  return hasUpperCase && hasLowerCase && hasDigit;
}

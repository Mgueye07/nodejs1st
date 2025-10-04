const generator = require('generate-password');

function generatePassword() {
  const password = generator.generate({
    length: 10,
    numbers: true,
    symbols: true,
    uppercase: true,
    lowercase: true
  });

  console.log(password);
}

generatePassword();

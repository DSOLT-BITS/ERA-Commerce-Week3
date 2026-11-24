const bcrypt = require('bcryptjs');
//  Hash a password
const plainPassword = "John@1234";
const hash = bcrypt.hashSync(plainPassword, 10);
console.log("Hash:", hash);

// Compare the correct password
const Match = bcrypt.compareSync(plainPassword, hash);
console.log("Correct password Match:", Match);

// Compare an incorrect password
const notMatch = bcrypt.compareSync("wrongpassword", hash);
console.log("Wrong Password Match:", notMatch);
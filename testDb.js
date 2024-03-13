const connection = require("./database"); // Adjust the path as necessary
const bcrypt = require("bcrypt");

async function testDatabase() {
  // Hash a password for testing
  const password = "newPassword123!";
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  // Insert a test user
  try {
    const [insertResult] = await connection.query(
      "INSERT INTO users (email, passwordHash, passwordRaw) VALUES (?, ?, ?)",
      ["test@example.com", hashedPassword, password]
    );
    console.log("Insert result:", insertResult);
  } catch (insertError) {
    console.error("Error inserting user:", insertError);
  }

  // Retrieve the test user
  try {
    const [selectResult] = await connection.query(
      "SELECT * FROM users WHERE email = ?",
      ["test@example.com"]
    );
    console.log("Select result:", selectResult);
  } catch (selectError) {
    console.error("Error selecting user:", selectError);
  }
}

testDatabase();

import connection from "../../database"; // Import your database connection
import bcrypt from "bcrypt";

interface User {
  email: string;
  password: string;
}

const Users = {
  async createUser({ email, password }: User) {
    // Hash password
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    const [result] = await connection.query(
      "INSERT INTO users (email, passwordHash, passwordRaw) VALUES (?, ?, ?)",
      [email, passwordHash, password]
    );
    return result;
  },
  // Implement other methods as needed
};

const Adapter = {
  async getAdapter() {
    return {
      ...Users,
      // Implement other adapter methods required by NextAuth
    };
  },
};

export default Adapter;

// /api/auth/signup/route.tsx
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import connection from "../../../../../database";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Insert the new user into the database
    const [result] = await connection.query(
      "INSERT INTO tbl_users (email, password, raw_password) VALUES (?, ?, ?)",
      [email, hashedPassword, password]
    );

    console.log("User created:", result);
    return (
      NextResponse.json({ message: "User created successfully" }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (e) {
    console.error("Error inserting user:", e);
    return NextResponse.json(
      { message: "Error creating user" },
      { status: 500 }
    );
  }
}

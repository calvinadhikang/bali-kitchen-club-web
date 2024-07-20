import { db } from "@/src/utils/api";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { name, username, password, role } = await request.json();

    const user = await db.user.create({
      data: {
        name,
        username,
        password,
        role,
      },
    });

    return Response.json({
      error: false,
      message: "User created successfully",
      data: user,
    });
  } catch (error) {
    console.error(error);
    return Response.json({
      error: true,
      message: error,
    });
  }
}

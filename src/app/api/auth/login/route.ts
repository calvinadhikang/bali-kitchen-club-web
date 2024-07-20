import { db } from "@/src/utils/api";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const { username, password } = await request.json();
  const user = await db.user.findFirst({
    where: {
      username,
      password,
    },
  });

  if (!user) {
    return Response.json({
      error: true,
      message: "Invalid username or password",
    });
  }

  return Response.json({
    error: false,
    message: "Hello World",
    data: user,
  });
}

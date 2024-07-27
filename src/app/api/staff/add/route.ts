import { db } from "@/src/utils/api";

export default async function POST(request: Request) {
  const { name, username, password, role } = await request.json();

  const staff = await db.user.create({
    data: {
      name,
      username,
      password,
      role,
    },
  });

  return Response.json({
    error: false,
    message: "Staff created successfully",
    data: staff,
  });
}

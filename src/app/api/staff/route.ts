import { db } from "@/src/utils/api";
import { USER_ROLE } from "@/src/utils/enums";
import { NextRequest } from "next/server";

export const revalidate = 0;
export async function GET(request: NextRequest) {
  const staff = await db.user.findMany({
    where: {
      role: USER_ROLE.STAFF,
    },
  });

  return Response.json({
    error: false,
    message: "Fetched staff successfully",
    data: staff,
  });
}

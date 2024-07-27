import { NextRequest } from "next/server";
import { db } from "@/src/utils/api";

export async function GET() {
  const menus = await db.menu.findMany({
    include: {
      category: {
        select: {
          name: true,
        },
      },
    },
    orderBy: {
      id: "desc",
    },
  });

  return Response.json({
    error: false,
    message: "Fetched menu successfully",
    data: menus,
  });
}

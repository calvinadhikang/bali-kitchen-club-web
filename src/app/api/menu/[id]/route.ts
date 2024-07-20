import { db } from "@/src/utils/api";
import { NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const menu = await db.menu.findUnique({
    where: {
      id: parseInt(params.id),
    },
    include: {
      category: {
        select: {
          name: true,
        },
      },
    },
  });

  return Response.json({
    error: false,
    message: "Fetched menu successfully",
    data: menu,
  });
}

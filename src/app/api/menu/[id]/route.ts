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

  if (!menu) {
    return Response.json({
      error: true,
      message: "Menu not found",
      data: null,
    });
  }

  return Response.json({
    error: false,
    message: "Fetched menu successfully",
    data: menu,
  });
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { name, description, price, categoryId } = await request.json();

  const menu = await db.menu.update({
    where: {
      id: parseInt(params.id),
    },
    data: {
      name,
      description,
      price,
      categoryId,
    },
  });

  return Response.json({
    error: false,
    message: "Menu updated successfully",
    data: menu,
  });
}

import { db } from "@/src/utils/api";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const { name, description, price, categoryId } = await request.json();

  const menu = await db.menu.create({
    data: {
      name,
      description,
      price,
      categoryId,
    },
  });

  return Response.json({
    error: false,
    message: "Menu created successfully",
    data: menu,
  });
}

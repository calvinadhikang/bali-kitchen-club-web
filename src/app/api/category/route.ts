import { NextRequest } from "next/server";
import { db } from "@/src/utils/api";

export async function GET() {
  const categories = await db.category.findMany({
    orderBy: {
      id: "desc",
    },
  });

  return Response.json({
    message: "Fetched categories successfully",
    data: categories,
  });
}

export async function POST(request: NextRequest) {
  const { name } = await request.json();

  const category = await db.category.create({
    data: {
      name,
    },
  });

  return Response.json({
    error: false,
    message: "Category added successfully",
    data: category,
  });
}

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

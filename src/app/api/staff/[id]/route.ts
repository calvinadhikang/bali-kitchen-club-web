import { db } from "@/src/utils/api";

export const revalidate = 0;
export default async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const staff = await db.user.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  if (!staff) {
    return Response.json({
      error: true,
      message: "Staff not found",
      data: null,
    });
  }

  return Response.json({
    error: false,
    message: "Fetched staff successfully",
    data: staff,
  });
}

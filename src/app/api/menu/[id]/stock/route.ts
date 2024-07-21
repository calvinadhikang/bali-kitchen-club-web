import { NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  return Response.json({
    error: false,
    message: "Fetched menu stock successfully",
    params: params.id,
    data: [],
  });
}

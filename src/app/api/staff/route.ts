import { db } from "@/src/utils/api";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  // const staff = await db.staff.findMany({
  //   include: {
  //     role: {
  //       select: {
  //         name: true,
  //       },
  //     },
  //   },
  // });
  // return Response.json({
  //   error: false,
  //   message: "Fetched staff successfully",
  //   data: staff,
  // });

  return Response.json({
    error: false,
    message: "Fetched staff successfully",
    data: [],
  });
}

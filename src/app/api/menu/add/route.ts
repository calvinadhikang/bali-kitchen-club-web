import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const { name, description, price, categoryId } = await request.json();
}

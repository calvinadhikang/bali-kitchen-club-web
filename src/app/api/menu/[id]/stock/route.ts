import { db } from "@/src/utils/api";
import { STOCK_STATUS } from "@/src/utils/enums";
import { NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const stocks = await db.stock.findMany({
    where: {
      menuId: parseInt(params.id),
    },
  });

  return Response.json({
    error: false,
    message: "Fetched menu stock successfully",
    data: stocks,
  });
}

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { newQuantity }: { newQuantity: number } = await request.json();

  const oldMenu = await db.menu.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  if (!oldMenu) return;

  const menu = await db.menu.update({
    where: {
      id: parseInt(params.id),
    },
    data: {
      stock: oldMenu.stock + newQuantity,
    },
    include: {
      stockData: true,
    },
  });

  const stock = await db.stock.create({
    data: {
      menuId: parseInt(params.id),
      quantity: newQuantity,
      reference: "Stock update",
      type: newQuantity > 0 ? STOCK_STATUS.MASUK : STOCK_STATUS.KELUAR,
    },
  });

  return Response.json({
    error: false,
    message: "Stock modified successfully",
    data: menu,
  });
}

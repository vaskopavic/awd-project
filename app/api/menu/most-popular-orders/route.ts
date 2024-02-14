import { NextResponse } from "next/server";

export async function GET() {
  try {
    const responseModule = await import("../route");
    const responseData = await responseModule.GET();
    const data: IMenu[] = await responseData.json();

    const mostPopularOrders = data
      .sort((a, b) => b.price - a.price)
      .slice(0, 6);

    return NextResponse.json(mostPopularOrders, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

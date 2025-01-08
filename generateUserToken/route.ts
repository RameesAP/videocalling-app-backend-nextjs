import { NextRequest } from "next/server";

export async function POST(req: Request) {
  const { userId, name, image, email } = await req.json();
}

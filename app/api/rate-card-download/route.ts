import { readFile } from "node:fs/promises";
import path from "node:path";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const cookieName = "scenekind_rate_card";
const fileName = "Scenekind_Rate_Card_v3.pdf";
const filePath = path.join(process.cwd(), "private", fileName);

export async function GET(request: NextRequest) {
  if (request.cookies.get(cookieName)?.value !== "granted") {
    return NextResponse.redirect(new URL("/pricing?download=locked", request.url));
  }

  const file = await readFile(filePath);

  return new NextResponse(file, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="Scenekind_Rate_Card.pdf"',
      "Cache-Control": "private, no-store",
    },
  });
}

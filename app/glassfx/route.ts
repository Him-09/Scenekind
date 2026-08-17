import { readFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const filePath = path.join(
  process.cwd(),
  "public",
  "kits",
  "glassfx-spec-drop-kit.pdf"
);

export async function GET() {
  const file = await readFile(filePath);

  return new NextResponse(file, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition":
        'inline; filename="GLASSFX_DUO-HYDRAfx_Spec_Drop_Kit.pdf"',
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}

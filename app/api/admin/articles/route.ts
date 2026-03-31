import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

function checkAuth(req: NextRequest) {
  const auth = req.headers.get("authorization");
  return auth === process.env.ADMIN_PASSWORD;
}

const JSON_PATH = path.join(process.cwd(), "public", "news-articles.json");

export async function GET(req: NextRequest) {
  if (!checkAuth(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const data = await fs.readFile(JSON_PATH, "utf-8");
  return NextResponse.json(JSON.parse(data));
}

export async function PUT(req: NextRequest) {
  if (!checkAuth(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const articles = await req.json();

  // In production (Vercel), commit via GitHub API
  if (process.env.GITHUB_TOKEN && process.env.VERCEL) {
    const owner = "willbgraham";
    const repo = "padelmaine";
    const filePath = "public/news-articles.json";
    const content = Buffer.from(JSON.stringify(articles, null, 2) + "\n").toString("base64");

    // Get current file SHA
    const getRes = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/contents/${filePath}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
          Accept: "application/vnd.github.v3+json",
        },
      }
    );
    const getData = await getRes.json();

    // Commit updated file
    const putRes = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/contents/${filePath}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
          Accept: "application/vnd.github.v3+json",
        },
        body: JSON.stringify({
          message: "Update articles via admin",
          content,
          sha: getData.sha,
        }),
      }
    );

    if (!putRes.ok) {
      const err = await putRes.text();
      return NextResponse.json({ error: err }, { status: 500 });
    }

    return NextResponse.json({ success: true, method: "github" });
  }

  // Local dev: write directly
  await fs.writeFile(JSON_PATH, JSON.stringify(articles, null, 2) + "\n");
  return NextResponse.json({ success: true, method: "local" });
}

// api/visitorCounter.ts
import { IncomingMessage, ServerResponse } from "http";

export default async function handler(req: IncomingMessage, res: ServerResponse) {
  const gistId = process.env.GIST_ID;
  const token = process.env.GITHUB_TOKEN;

  if (!gistId || !token) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: "Missing GIST_ID or GITHUB_TOKEN" }));
    return;
  }

  try {
    // 1. Get current count
    const gistRes = await fetch(`https://api.github.com/gists/${gistId}`, {
      headers: { Authorization: `token ${token}` },
    });
    const gistData = await gistRes.json();
    const fileContent = JSON.parse(gistData.files["counter.json"].content);

    // 2. Increment
    fileContent.count++;

    // 3. Update Gist
    await fetch(`https://api.github.com/gists/${gistId}`, {
      method: "PATCH",
      headers: {
        Authorization: `token ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        files: {
          "counter.json": { content: JSON.stringify(fileContent) },
        },
      }),
    });

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ count: fileContent.count }));
  } catch (error: any) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: error.message }));
  }
}

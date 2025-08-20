// api/visitorCounter.ts
import { IncomingMessage, ServerResponse } from "http";

// helper to send JSON responses
function sendJson(res: ServerResponse, status: number, data: unknown) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(data));
}

export default async function handler(req: IncomingMessage, res: ServerResponse) {
  if (req.method !== "GET") {
    return sendJson(res, 405, { error: "Method not allowed" });
  }

  const gistId = process.env.GIST_ID;
  const token = process.env.GITHUB_TOKEN;

  if (!gistId || !token) {
    return sendJson(res, 500, { error: "Missing GIST_ID or GITHUB_TOKEN env vars" });
  }

  try {
    // 1. Get current count
    const gistRes = await fetch(`https://api.github.com/gists/${gistId}`, {
      headers: { Authorization: `token ${token}` },
    });

    if (!gistRes.ok) {
      throw new Error(`Failed to fetch gist: ${gistRes.status} ${gistRes.statusText}`);
    }

    const gistData = await gistRes.json();
    const fileContent = JSON.parse(gistData.files["counter.json"].content);
    fileContent.count++;

    // 2. Update Gist
    const patchRes = await fetch(`https://api.github.com/gists/${gistId}`, {
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

    if (!patchRes.ok) {
      throw new Error(`Failed to update gist: ${patchRes.status} ${patchRes.statusText}`);
    }

    return sendJson(res, 200, { count: fileContent.count });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : "Unknown error";
    console.error("Visitor counter error:", msg);
    return sendJson(res, 500, { error: msg });
  }
}

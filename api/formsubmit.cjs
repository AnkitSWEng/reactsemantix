import { IncomingMessage, ServerResponse } from "http";
import { Octokit } from "@octokit/rest";

// helper to send JSON consistently
function sendJson(res: ServerResponse, status: number, data: unknown) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(data));
}

export default async function handler(req: IncomingMessage, res: ServerResponse) {
  // ✅ only allow POST
  if (req.method !== "POST") {
    return sendJson(res, 405, { error: "Method not allowed" });
  }

  try {
    // collect request body
    let body = "";
    req.on("data", (chunk) => (body += chunk));
    req.on("end", async () => {
      try {
        const { name, email, country, subscribe } = JSON.parse(body);

        if (!name || !email) {
          return sendJson(res, 400, { error: "Missing name or email" });
        }

        const octokit = new Octokit({
          auth: process.env.GITHUB_TOKEN,
        });

        const issueBody = `
            **Name:** ${name}  
            **Email:** ${email}  
            **Country:** ${country || "Not provided"}  
            **Subscribed:** ${subscribe ? "Yes" : "No"}  
        `;

        await octokit.issues.create({
          owner: process.env.GITHUB_USER || "ankitsweng",
          repo: process.env.GITHUB_REPO || "reactsemantix",
          title: `📩 New Form Submission - ${name}`,
          body: issueBody,
          labels: ["form-pending-review"],
        });

        return sendJson(res, 200, { message: "Form submitted for review" });
      } catch (err) {
        console.error("GitHub API error:", err);
        return sendJson(res, 500, { error: "Failed to create form submission" });
      }
    });
  } catch (err) {
    console.error("Unexpected error:", err);
    return sendJson(res, 500, { error: "Server error" });
  }
}

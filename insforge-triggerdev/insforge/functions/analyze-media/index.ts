export default async function handler(req: Request) {
  try {
    const { fileUrl } = await req.json();

    let description = "";

    if (fileUrl.startsWith("data:image")) {
      // Handle base64
      description = "Processed base64 image successfully";
    } else {
      // Handle URL
      description = `AI description for: ${fileUrl}`;
    }

    return new Response(
      JSON.stringify({ description }),
      { headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: "Failed to analyze media" }),
      { status: 500 }
    );
  }
}
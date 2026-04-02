export default async function handler(req: Request) {
  const { assetId, description } = await req.json();

  console.log("Notify:", assetId, description);

  return new Response(
    JSON.stringify({ success: true }),
    { headers: { "Content-Type": "application/json" } }
  );
}
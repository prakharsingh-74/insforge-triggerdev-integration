import "dotenv/config";
import { createClient } from "@insforge/sdk";

const insforgeUrl = process.env.INSFORGE_URL;
const insforgeAnonKey = process.env.INSFORGE_ANON_KEY;

if (!insforgeUrl || !insforgeAnonKey) {
  throw new Error(
    `Missing env vars:
    INSFORGE_URL=${insforgeUrl}
    INSFORGE_ANON_KEY=${insforgeAnonKey}`
  );
}

export const insforge = createClient({
  baseUrl: insforgeUrl,
  anonKey: insforgeAnonKey,
});
import { task } from "@trigger.dev/sdk/v3";
import { insforge } from "../lib/insforge";

export default task({
  id: "media-pipeline",
  run: async (payload: { fileUrl: string }, io) => {
    console.log("Starting Insforge AI media pipeline...");
    console.log("Analyzing media:", payload.fileUrl);

    try {
    
      const { data: aiResult, error: aiError } =
        await insforge.functions.invoke("analyze-media", {
          body: { fileUrl: payload.fileUrl },
        });

      if (aiError) {
        throw new Error(`AI function error: ${aiError.message}`);
      }

      const description =
        aiResult?.data?.description ||
        aiResult?.description ||
        "No description generated";

      console.log("AI Analysis complete:", description);

      const { data, error } = await insforge.database
        .from("media_assets")
        .insert({
          file_url: payload.fileUrl,
          description,
        })
        .select()
        .single();

      if (error) {
        throw new Error(`Database error: ${error.message}`);
      }

      console.log("Stored in database, ID:", data.id);

      const { error: notifyError } =
        await insforge.functions.invoke("notify-media-upload", {
          body: {
            assetId: data.id,
            description,
          },
        });

      if (notifyError) {
        console.warn("Notification failed:", notifyError.message);
      }

      console.log("Notification function triggered.");

      return {
        success: true,
        assetId: data.id,
        description,
      };
    } catch (error) {
      console.error("Pipeline failed:", error);
      throw error;
    }
  },
});
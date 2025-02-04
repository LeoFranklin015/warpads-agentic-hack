import { Router, Request, Response } from "express";
import { adEngine } from "../utilities/adEngine/adEngine";
import { generateAPIKey } from "../utilities/apikey/generateAPIkey";
import { authMiddleware } from "../middleware/authMiddleware";
import { trackUsage } from "../utilities/adEngine/trackUsage";
import { trackResponse } from "../utilities/adEngine/trackResponse";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send("TypeScript Server is Running!");
});

router.get("/get-ad", authMiddleware, async (req: Request, res: Response) => {
  const { query } = req.body;
  const ad = await adEngine(query);
  await trackUsage(req.headers["x-api-key"] as string);
  if (ad?.includes("No ad found")) {
    res.status(404).send("No ad found");
  } else {
    res.status(200).send(ad);
  }
});

router.get("/generate-api-key", async (req: Request, res: Response) => {
  const { id } = req.body;
  const apiKey = await generateAPIKey(id);
  res.send(apiKey);
});

router.post(
  "/track-response",
  authMiddleware,
  async (req: Request, res: Response) => {
    const { platform, id } = req.body;
    await trackResponse(req.headers["x-api-key"] as string, {
      platform,
      id,
    });
    res.send("Response tracked");
  }
);

export default router;

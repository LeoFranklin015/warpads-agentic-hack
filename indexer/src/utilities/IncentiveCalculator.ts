import axios from "axios";
import connectDB, { client } from "../config/db";
import { env } from "../config/env";

export const calculateIncentive = async (agentId: number) => {
  await connectDB();
  const db = client.db();
  const adEngineResponses = await db
    .collection(`${env.NODE_ENV}_responseLogs`)
    .aggregate([
      {
        $match: {
          id: agentId,
        },
      },
      {
        $lookup: {
          from: "validatedLogs",
          localField: "_id",
          foreignField: "refResponseID",
          as: "found",
        },
      },
      {
        $match: {
          found: { $size: 0 },
        },
      },
    ])
    .toArray();

  if (adEngineResponses.length === 0) {
    throw new Error("No ads yet to be validated");
  }
  console.log(adEngineResponses);

  // Todo : script to calculate the impressions and clicks from platform
  let reward = 0;
  let taskId = "";
  adEngineResponses.forEach(async (adEngineResponse) => {
    console.log(`${adEngineResponse.platformId} is being validated`);
    // Call Cookie API to gain insights about the user reward Calculation here

    // Skyvern API to get insights about the tweet
    const response = await axios.post(
      "https://api.skyvern.com/api/v2/tasks/",
      {
        user_prompt:
          "Just navigate the twitter url and collect the impressions like No of Likes , NO of views , no of reposts , etc whatever you can . I want the output in json format {views: number, likes: number, retweets: number, replies: number}",
        url: adEngineResponse.platformId,
        webhook_callback_url: `https://warpads-cookie-hack.onrender.com//webhooks`,
      },
      {
        headers: {
          "x-api-key": env.SKYVERN_API_KEY as string,
        },
      }
    );

    console.log(`${adEngineResponse.platformId} has been validated`);
    taskId = response.data.task_id;
    // Once the reward is calculated, store it in the response to validated

    await db.collection(`${env.NODE_ENV}_validatedLogs`).insertOne({
      adSpaceId: agentId,
      refResponseID: adEngineResponse._id,
      validatedAt: new Date(),
      taskId: taskId,
    });
  });

  const adSpace = await db.collection(`${env.NODE_ENV}_adSpaces`).findOne({
    id: agentId,
  });
  console.log(`${adSpace?.metadata.name} has been validated`);

  // store the reward in the database
  await db.collection(`${env.NODE_ENV}_adSpaces`).updateOne(
    { id: agentId },
    {
      $set: {
        reward: reward + adEngineResponses.length * 1 + (adSpace?.reward || 0),
      },
    }
  );

  return reward + adEngineResponses.length * 1;
};

// calculateIncentive(2);

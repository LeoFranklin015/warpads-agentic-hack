import connectDB, { client } from "../../config/db";
import { env } from "../../config/env";

export const validateTwitterAnalytics = async (
  taskId: string,
  analytics: any
) => {
  console.log(analytics);
  console.log(analytics.views);
  console.log(analytics.likes);
  console.log(analytics.retweets);
  console.log(analytics.replies);
  await connectDB();
  const db = client.db();
  const task = await db.collection(`${env.NODE_ENV}-validatedLogs`).findOne({
    taskId,
  });

  if (!task) {
    throw new Error("Task not found");
  }

  const twitterRewards =
    analytics.views * 0.01 +
    analytics.likes * 0.01 +
    analytics.retweets * 0.01 +
    analytics.replies * 0.01;

  console.log(twitterRewards);

  await db
    .collection(`${env.NODE_ENV}-adSpaces`)
    .updateOne({ _id: task.adSpaceId }, { $inc: { reward: twitterRewards } });

  await db.collection(`${env.NODE_ENV}-validatedLogs`).updateOne(
    { taskId },
    {
      $set: {
        rewardsUpdatedAt: new Date(),
        reward: twitterRewards,
        analytics: analytics,
      },
    }
  );
};

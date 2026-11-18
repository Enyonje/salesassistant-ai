import cron from "node-cron";
import { prisma } from "../config/prisma.js";
import { runAutonomousLeadGeneration } from "../agents/autonomousLeadEngine.js";
import { runAutonomousEnterpriseCycle } from "../agents/enterpriseSalesOrchestrator.js";

export function startMorningSalesScheduler(logger) {
    // Cron pattern: "0 8 * * *" -> Every day at 08:00 AM
    const cronSchedule = process.env.MORNING_CRON_SCHEDULE || "0 8 * * *";

    logger?.info?.(`[Scheduler] Initializing morning autonomous sales cron with pattern: ${cronSchedule}`);

    const task = cron.schedule(cronSchedule, async () => {
        logger?.info?.("[Scheduler] ⏰ Starting daily 8:00 AM autonomous sales execution cycle...");

        try {
            // 1. Fetch all registered sales profiles (tenants)
            const profiles = await prisma.salesProfile.findMany({
                select: {
                    tenant_id: true,
                    owner_user_id: true,
                    business_name: true,
                    target_customer: true,
                },
            });

            for (const profile of profiles) {
                try {
                    logger?.info?.(`[Scheduler] Running morning lead generation for tenant: ${profile.tenant_id} (${profile.business_name || "Workspace"})`);

                    // Automatically generate 5 fresh leads based on their target customer profile or industry default
                    await runAutonomousLeadGeneration({
                        tenantId: profile.tenant_id,
                        actorUserId: profile.owner_user_id,
                        industry: profile.target_customer || "B2B SaaS and Enterprise Software",
                        location: "Global",
                        keywords: "High-growth executive decision makers",
                        limit: 5,
                        logger,
                    });

                    // Run full enterprise lifecycle evaluation & stall check
                    await runAutonomousEnterpriseCycle({
                        tenantId: profile.tenant_id,
                        actorUserId: profile.owner_user_id,
                        logger,
                    });

                } catch (tenantErr) {
                    logger?.error?.({ err: tenantErr, tenantId: profile.tenant_id }, "[Scheduler] Failed morning cycle for tenant");
                }
            }

            logger?.info?.("[Scheduler] ✅ Daily 8:00 AM autonomous sales cycle completed successfully.");
        } catch (err) {
            logger?.error?.({ err }, "[Scheduler] Critical failure in morning sales cron job");
        }
    });

    task.start();
    return task;
}
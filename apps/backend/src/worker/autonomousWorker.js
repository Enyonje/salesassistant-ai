import { prisma } from "../config/prisma.js";
import { runAutonomousEnterpriseCycle } from "../agents/enterpriseSalesOrchestrator.js";

export function startAutonomousSalesWorker(logger) {
    const intervalMs = Number(process.env.AUTONOMOUS_CYCLE_INTERVAL_MS || 15 * 60 * 1000);
    let running = false;

    const tick = async () => {
        if (running) return;
        running = true;
        try {
            const tenants = await prisma.salesProfile.findMany({
                select: { tenant_id: true, owner_user_id: true },
            });

            for (const t of tenants) {
                await runAutonomousEnterpriseCycle({
                    tenantId: t.tenant_id,
                    actorUserId: t.owner_user_id,
                    logger,
                });
            }
        } catch (err) {
            logger?.error?.({ err }, "Autonomous sales worker tick failed");
        } finally {
            running = false;
        }
    };

    const timer = setInterval(tick, intervalMs);
    timer.unref();
    return () => clearInterval(timer);
}
import { shimmer } from "@/app/ui/skeletons";
import { RevenueChartSkeleton } from "./ui/revenue-chart";
import { LatestInvoicesSkeleton } from "./ui/latest-invoices";
import { CardSkeleton } from "./ui/cards";

export default function Loading() {
  return <DashboardSkeleton />;
}

function DashboardSkeleton() {
  return (
    <>
      <div
        className={`${shimmer} relative mb-4 h-8 w-36 overflow-hidden rounded-md bg-gray-100`}
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <RevenueChartSkeleton />
        <LatestInvoicesSkeleton />
      </div>
    </>
  );
}

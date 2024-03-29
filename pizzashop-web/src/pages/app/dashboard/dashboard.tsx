import { Helmet } from "react-helmet-async";
import { DayOrdersAmountCard } from "./day-orders-amount-card";
import { MonthCanceledOrderAmountCard } from "./month-canceled-order-amount-card";
import { MonthOrdersAmountCard } from "./month-orders-amount-card";
import { MonthRevenueCard } from "./month-revenue-card";
import { RevenueChart } from "./revenue-chart";

export const Dashboard = () => {
  return (
    <>
      <Helmet titleTemplate="Dashboard" />
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <div className="grid grid-cols-4 gap-4">
          <MonthRevenueCard />
          <MonthOrdersAmountCard />
          <DayOrdersAmountCard />
          <MonthCanceledOrderAmountCard />
        </div>

        <div className="grid grid-cols-9 gap-4">
          <RevenueChart />
        </div>
      </div>
    </>
  );
};

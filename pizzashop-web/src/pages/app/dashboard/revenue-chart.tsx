import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const RevenueChart = () => {
  return (
    <Card className="col-span-6 pt-4">
      <CardHeader className="flex-row items-center justify-between pb-6 ">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">
            Receita no periodo
          </CardTitle>
          <CardDescription>Receita diaria no periodo</CardDescription>
        </div>
      </CardHeader>
    </Card>
  );
};

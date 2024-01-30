import { Pagination } from "@/components/Pagination";
import { OrderTableFilters } from "./Order-table-filters";
import { OrderTableRow } from "./Order-table-row";

export const Orders = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold">Pedidos</h1>
      <div className="space-y-2.5">
        <OrderTableFilters />
        <div className="border rounded-md">
          <OrderTableRow />
        </div>
        <Pagination totalCount={105} perPage={10} pageIndex={0} />
      </div>
    </div>
  );
};

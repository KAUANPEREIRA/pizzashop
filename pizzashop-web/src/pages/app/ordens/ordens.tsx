import { Input } from "@/components/ui/input";

export const Ordens = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold">Pedidos</h1>
      <div className="space-y-2.5">
        <form className="flex items-center gap-2">
          <span className="text-sm font-semibold">Filtros</span>
          <Input placeholder="nome do cliente" className="h-8 w-[320px]" />
        </form>

        <div className="border rounded-md">...</div>
      </div>
    </div>
  );
};

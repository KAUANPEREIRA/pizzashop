import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Check, Search, X } from "lucide-react";
import { OrderDetails } from "./Order-details";

export const OrderTableRow = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[64px]"></TableHead>
          <TableHead className="w-[140px]">Identificador</TableHead>
          <TableHead className="w-[180px]">Realizado há</TableHead>
          <TableHead className="w-[140px]">Status</TableHead>
          <TableHead>Cliente</TableHead>
          <TableHead className="w-[164px]">Total do pedido</TableHead>
          <TableHead className="w-[132px]"></TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm">
                  <Search className="h-3 w-3" />
                  <span className="sr-only">Detalhes do pedido</span>
                </Button>
              </DialogTrigger>
              <OrderDetails />
            </Dialog>
          </TableCell>
          <TableCell className="font-mono text-sx font-medium">
            {" "}
            6482487wy78eq98942y848
          </TableCell>
          <TableCell className="text-muted-foreground">
            {" "}
            há 15 minutos
          </TableCell>
          <TableCell>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-slate-400"></span>
              <span className="font-medium text-muted-foreground">
                Pendente
              </span>
            </div>
          </TableCell>
          <TableCell>Kauan Pereira dos Santos</TableCell>
          <TableCell className="font-medium">R$ 149,99</TableCell>
          <TableCell>
            <Button variant="ghost" size="sm">
              <Check className="h-3 w-3 mr-2" />
              Aprovar
            </Button>
          </TableCell>
          <TableCell>
            <Button variant="ghost" size="sm">
              <X className="h-3 w-3 mr-2" />
              Cancelar
            </Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

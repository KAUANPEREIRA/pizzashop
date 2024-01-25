import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Outlet } from "react-router-dom";

export const AppLayout = () => {
  return (
    <ThemeProvider storageKey="pizzashop-theme" defaultTheme="dark">
      <div className="flex min-h-screen flex-col">
        <Header />
        <div className="flex flex-1 flex-col gap-4 p-8 pt-6">{<Outlet />}</div>
        <h1>RodaPe</h1>
      </div>
    </ThemeProvider>
  );
};

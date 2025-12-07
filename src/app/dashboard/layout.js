import Dashboard from "@/component/Dashboard";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen flex">
     <SidebarProvider>
      <Dashboard></Dashboard>
      {children}
      </SidebarProvider>
    </div>
  );
}
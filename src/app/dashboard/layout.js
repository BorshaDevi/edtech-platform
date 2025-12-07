import Dashboard from "@/component/Dashboard";

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen flex">
     
      <Dashboard></Dashboard>
      {children}
    </div>
  );
}
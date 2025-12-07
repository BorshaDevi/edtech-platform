import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarRail } from "@/components/ui/sidebar";
import Link from "next/link";

const Dashboard = () => {
    return (
        <div>

            <Sidebar collapsible="icon" >
                <SidebarHeader>
                    <h1 className="text-green-600 font-bold">Dashboard</h1>
                </SidebarHeader>
                <SidebarContent>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <Link href=''> <span> </span>Student</Link>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                            <Link href=''> Student</Link>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                            <Link href=''> Student</Link>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarContent>
                <SidebarFooter>
                    <p>Footer</p>
                </SidebarFooter>
                <SidebarRail />
            </Sidebar>
        </div>
    )
}
export default Dashboard;
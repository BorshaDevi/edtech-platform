import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarRail } from "@/components/ui/sidebar";
import Link from "next/link";
import { LiaClipboardListSolid } from "react-icons/lia";
import { TbFileCheck } from "react-icons/tb";
import { IoFolderOpenOutline } from "react-icons/io5";

const Dashboard = () => {
    return (
        <div>
          {/* Student Dashboard */}
            <Sidebar>
                <SidebarHeader>
                    <h1 className="text-green-600 font-bold">Dashboard</h1>
                </SidebarHeader>
                <SidebarContent>
                    <SidebarMenu className='space-y-2 text-center '>
                        <SidebarMenuItem >
                            <Link href='' className="flex justify-start ml-5 gap-2 text-xl hover:bg-cyan-600 p-1 px-3 rounded-md w-52 "> <span className="mt-1"><IoFolderOpenOutline ></IoFolderOpenOutline></span>Courses</Link>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                            <Link href=''className="flex justify-start ml-5 gap-2 text-xl hover:bg-cyan-600 p-1 px-3 rounded-md w-52 "> <span className="mt-1"><TbFileCheck /></span>Assignments</Link>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                            <Link href=''className="flex justify-start ml-5 gap-2 text-xl hover:bg-cyan-600 p-1 px-3 rounded-md w-52 "><span className="mt-1"><LiaClipboardListSolid /></span> Quizzes</Link>
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
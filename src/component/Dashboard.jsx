import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarRail } from "@/components/ui/sidebar";
import Link from "next/link";
import { LiaClipboardListSolid } from "react-icons/lia";
import { TbFileCheck } from "react-icons/tb";
import { IoFolderOpenOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { BiBookmark } from "react-icons/bi";
import { FiClipboard } from "react-icons/fi";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Dashboard = () => {
    const role = "user";
    return (
        <div>
            <Sidebar>
                <SidebarHeader>
                    <h1 className="text-green-600 font-bold">Dashboard</h1>
                </SidebarHeader>

                {role === 'admin' ?

                    <SidebarContent>
                        {/* Admin Dashboard */}
                        <SidebarMenu className='space-y-2 text-center  '>
                            <SidebarMenuItem >
                                <Link href='' className="flex justify-start ml-5 gap-2 text-xl hover:text-white hover:bg-cyan-600 p-1 px-3 rounded-md w-52 "> <span className="mt-1"><IoFolderOpenOutline ></IoFolderOpenOutline></span>Courses</Link>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <Link href='' className="flex justify-start ml-5 gap-2 text-xl hover:text-white hover:bg-cyan-600 p-1 px-3 rounded-md w-52 "> <span className="mt-1"><FiClipboard /></span>Batches</Link>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <Link href='' className="flex justify-start ml-5 gap-2 text-xl hover:text-white hover:bg-cyan-600 p-1 px-3 rounded-md w-52 "><span className="mt-1"><LiaClipboardListSolid /></span> Enrollments</Link>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <Link href='' className="flex justify-start ml-5 gap-2 text-xl hover:text-white hover:bg-cyan-600 p-1 px-3 rounded-md w-52 "><span className="mt-1"><BiBookmark /></span> Assignments Review</Link>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarContent>

                    :


                    <SidebarContent>
                        {/* Student Dashboard */}
                        <SidebarMenu className='space-y-2 text-center '>
                            <SidebarMenuItem >
                                <Link href='' className="flex justify-start ml-5 gap-2 text-xl hover:text-white hover:bg-cyan-600 p-1 px-3 rounded-md w-52 "> <span className="mt-1"><IoFolderOpenOutline ></IoFolderOpenOutline></span>My Courses</Link>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <Link href='' className="flex justify-start ml-5 gap-2 text-xl hover:text-white hover:bg-cyan-600 p-1 px-3 rounded-md w-52 "> <span className="mt-1"><TbFileCheck /></span>Assignments</Link>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <Link href='' className="flex justify-start ml-5 gap-2 text-xl hover:text-white hover:bg-cyan-600 p-1 px-3 rounded-md w-52 "><span className="mt-1"><LiaClipboardListSolid /></span> Quizzes</Link>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <Link href='' className="flex justify-start ml-5 gap-2 text-xl hover:text-white hover:bg-cyan-600 p-1 px-3 rounded-md w-52 "><span className="mt-1"><CiUser /></span> Profile</Link>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarContent>
                }

                <SidebarFooter>
                    <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarImage src='' alt='' />
                  <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">name</span>
                  <span className="truncate text-xs">email</span>
                </div>
              </div>
                </SidebarFooter>
                <SidebarRail />
            </Sidebar>
        </div>
    )
}
export default Dashboard;
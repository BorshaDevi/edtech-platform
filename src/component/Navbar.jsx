'use client'
import Link from "next/link";
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
export default function Navbar() {
  const pathname=usePathname()
  const user = true;
  return (
    <div className={`max-w-full h-14 shadow-lg rounded-md ${pathname === '/dashboard'? 'hidden':'flex'}`}>
      <div className="p-4 w-full">
        <div className="flex justify-between px-3">
          <h1 className="uppercase text-2xl font-semibold text-cyan-500">EDTech Platform</h1>
          <Link href='/' className={`text-xl`}>Home</Link>
          {user ?
            <HoverCard>
              <HoverCardTrigger>
                <Avatar>
                  <AvatarFallback className='hover:cursor-pointer'>CN</AvatarFallback>
                </Avatar>
              </HoverCardTrigger>
              <HoverCardContent>
                <div className="grid grid-cols-1">
                  <Link href='' >Dashborad</Link>
                <Button className='mt-3'>Logout</Button>
                </div>
              </HoverCardContent>
            </HoverCard>

            : <Link href='/login' className="text-xl">Join us</Link>}
        </div>
      </div>
    </div>
  );
}


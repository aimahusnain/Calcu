"use client";

import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileSidebar from "./MobileSidebar";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <>
    <MobileSidebar />
    <div className="h-screen hidden sm:block sticky top-0 bg-white p-4">
      <Link href='/dashboard' className="text-xl font-bold font-sans md:px-3 px-0">FitHub</Link>
      <h4 className="text-zinc-400 text-sm p-3 md:block hidden">MAIN MENU</h4>
      <div className="md:mt-0 mt-7">
      {sidebarLinks.map((item: any) => {
        const isActive =
        pathname === item.route || pathname.startsWith(`${item.route}/`);
        
        return (
          <Link
          href={item.route}
          key={item.label}
          className={cn(
            "flex gap-4 items-center hover:bg-zinc-100 p-3 rounded-lg justify-start md:w-64 w-fit",
            {
              "bg-red-500 hover:bg-red-500 text-white": isActive,
            }
          )}
          >
            <item.Icon />
            <p className="text-lg font-semibold md:block hidden">{item.label}</p>
          </Link>
        );
      })}
      </div>
    </div>
      </>
  );
};

export default Sidebar;

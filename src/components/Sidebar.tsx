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
    <div className="h-screen hidden md:block bg-white p-4 space-y-1">
      <Link href='/dashboard' className="text-xl font-bold font-sans px-3">Calcu</Link>
      <h4 className="text-zinc-400 text-sm p-3">MAIN MENU</h4>
      {sidebarLinks.map((item: any) => {
        const isActive =
          pathname === item.route || pathname.startsWith(`${item.route}/`);

        return (
          <Link
            href={item.route}
            key={item.label}
            className={cn(
              "flex gap-4 items-center hover:bg-zinc-100 p-3 rounded-lg justify-start w-64",
              {
                "bg-red-500 hover:bg-red-500 text-white": isActive,
              }
            )}
          >
            <item.Icon />
            <p className="text-lg font-semibold">{item.label}</p>
          </Link>
        );
      })}
    </div>
      </>
  );
};

export default Sidebar;

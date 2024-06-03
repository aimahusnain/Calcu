"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { GanttChart } from 'lucide-react';

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="h-screen bg-white p-4">
      <h4 className="text-zinc-400 text-sm">MAIN MENU</h4>
      {sidebarLinks.map((item: any) => {
        const isActive =
          pathname === item.route || pathname.startsWith(`${item.route}/`);

        return (
          <Link
            href={item.route}
            key={item.label}
            className={cn(
              "flex gap-4 items-center p-4 rounded-lg justify-start",
              {
                "bg-red-500": isActive,
              }
            )}
          >
            {/* <Image src={item.imgURL} alt={item.label} width={24} height={24} /> */}
            <item.Icon />
            <p className="text-lg font-semibold">{item.label}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default Sidebar;

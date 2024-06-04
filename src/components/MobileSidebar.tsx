"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CgMenuLeft } from "react-icons/cg";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const MobileSidebar = () => {
  const pathname = usePathname();

  return (
    <div className="md:hidden block">
      {/* <Sheet>
        <SheetTrigger>
          <Button variant="ghost">
            <CgMenuLeft className="w-6 h-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="space-y-1 md:hidden block">
          <Link href="/dashboard" className="text-xl font-bold font-sans px-3">
            Calcu
          </Link>
          <h4 className="text-zinc-400 text-sm p-3">MAIN MENU</h4>
          {sidebarLinks.map((item: any) => {
            const isActive =
              pathname === item.route || pathname.startsWith(`${item.route}/`);

            return (
              <Link
                href={item.route}
                key={item.label}
                className={cn(
                  "flex gap-4 items-center hover:bg-zinc-100 p-3 rounded-lg justify-start w-full",
                  {
                    "bg-red-500 hover:bg-red-500 text-white": isActive,
                  }
                )}
              >
                <SheetClose className="flex gap-3">
                  <item.Icon />
                  <p className="text-lg font-semibold">{item.label}</p>
                </SheetClose>
              </Link>
            );
          })}
        </SheetContent>
      </Sheet> */}
      <div className="fixed bg-red-100 shadow-xl shadow-black/10 rounded-2xl flex justify-between max-w-full bottom-7 left-5 right-5">
      {sidebarLinks.map((item: any) => {
        const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);

        return (
          <Link
            href={item.route}
            key={item.label}
            className={cn(
              "flex flex-col items-center justify-center hover:bg-zinc-100 p-3 rounded-lg",
              {
                "text-red-500 bg-transparent mb-1": isActive,
              }
            )}
          >
            {isActive ? (
            <item.Icon className='size-9' />
          ) : (
            <item.Icon className='size-7' />
          )}
            {isActive && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="text-sm font-bold"
              >
                {item.label}
              </motion.p>
            )}
          </Link>
        );
      })}
    </div>

    </div>
  );
};

export default MobileSidebar;

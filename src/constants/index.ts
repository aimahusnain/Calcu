import { LayoutDashboard, BarChart3, Activity, Hop, SquarePlus } from "lucide-react";

export const sidebarLinks = [
  {
    Icon: LayoutDashboard,
    route: "/dashboard",
    label: "Overview",
  },
  {
    Icon: BarChart3,
    route: "/performance",
    label: "Performance",
  },
  {
    Icon: Activity,
    route: "/exercises",
    label: "Exercises",
  },
  {
    Icon: Hop,
    route: "/foods",
    label: "Foods",
  },
  {
    Icon: SquarePlus,
    route: "/calories",
    label: "Calories",
  },
];

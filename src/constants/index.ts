import { GanttChart, BarChart3, Activity, Hop, SquarePlus } from "lucide-react";

export const sidebarLinks = [
  {
    Icon: GanttChart,
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
    route: "/exercieses",
    label: "Exercieses",
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

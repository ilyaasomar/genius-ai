"use client";

import { cn } from "@/lib/utils";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  LayoutDashboard,
  MessageSquare,
  ImageIcon,
  VideoIcon,
  Code,
  Music,
  Settings,
} from "lucide-react";
import { usePathname } from "next/navigation";
const monserrat = Montserrat({ weight: "600", subsets: ["latin"] });
const Sidebar = () => {
  const pathname = usePathname();
  const routes = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
      color: "text-sky-500",
    },
    {
      label: "Conversation",
      href: "/conversation",
      icon: MessageSquare,
      color: "text-violet-500",
    },
    {
      label: "Image Generation",
      href: "/image",
      icon: ImageIcon,
      color: "text-pink-700",
    },
    {
      label: "Video Generation",
      href: "/video",
      icon: VideoIcon,
      color: "text-orange-700",
    },
    {
      label: "Music Generation",
      href: "/music",
      icon: Music,
      color: "text-emerald-700",
    },
    {
      label: "Code Generation",
      href: "/code",
      icon: Code,
      color: "text-green-700",
    },
    {
      label: "Settings",
      href: "/settings",
      icon: Settings,
    },
  ];
  return (
    <div className="space-y-4 py-4 flex flex-col h-full text-white bg-[#111827]">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative w-8 h-8 mr-4">
            <Image fill src="/logo.png" alt="Logo" />
          </div>
          <h1 className={cn("text-2xl font-bold", monserrat.className)}>
            Genius
          </h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className={cn(
                "flex group text-sm p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                pathname === route.href
                  ? "text-white bg-white/10"
                  : "text-zinc-400"
              )}
            >
              <div className="flex flex-1 items-center">
                <route.icon className={cn("w-5 h-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

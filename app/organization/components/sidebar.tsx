"use client";

import { Activity, Database, Bell, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { OrganizationSwitcher } from "@clerk/nextjs";
const AdminSidebar = () => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const navItems = [
    { name: "Dashboard", path: "/organization/dashboard", icon: Activity },
    { name: "Services", path: "/organization/services", icon: Database },
    { name: "Incidents", path: "/organization/incidents", icon: Bell },
    { name: "Settings", path: "/organization/settings", icon: Settings },
  ];

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader className="p-4 border-b">
          <Link href="/" className="flex items-center space-x-2">
            <h2 className="text-xl font-bold">Status Admin</h2>
          </Link>
        </SidebarHeader>
        <SidebarContent className="p-2">
          <nav className="space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:bg-accent
                  ${
                    isActive(item.path)
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground"
                  }`}
              >
                <item.icon className="h-4 w-4" />
                {item.name}
              </Link>
            ))}
          </nav>
        </SidebarContent>
        <SidebarFooter className="p-4 border-t mt-auto">
          <OrganizationSwitcher />
        </SidebarFooter>
      </Sidebar>
    </SidebarProvider>
  );
};
export default AdminSidebar;

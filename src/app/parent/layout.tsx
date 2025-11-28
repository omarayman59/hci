"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogOut, Home, FileText, ChartArea, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerClose,
} from "@/components/ui/drawer";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";

function ParentNavbar() {
  const pathname = usePathname();
  const isMobile = useIsMobile();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navItems = [
    {
      href: "/parent/dashboard",
      label: "Dashboard",
      icon: Home,
    },
    {
      href: "/parent/reports",
      label: "Reports",
      icon: FileText,
    },
  ];

  const NavLink = ({
    item,
    onClick,
  }: {
    item: (typeof navItems)[0];
    onClick?: () => void;
  }) => {
    const Icon = item.icon;
    const isActive = pathname === item.href;

    return (
      <Link href={item.href} onClick={onClick}>
        <Button
          variant="ghost"
          size="sm"
          className={cn(
            "font-light text-sm h-9 px-4 rounded-md transition-colors w-full justify-start",
            isActive
              ? "bg-accent text-accent-foreground"
              : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
          )}
        >
          <Icon className="w-4 h-4 mr-2" />
          {item.label}
        </Button>
      </Link>
    );
  };

  return (
    <nav className="border-b border-border/40 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <Link href="/parent/dashboard" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <ChartArea className="w-4 h-4 text-primary" />
            </div>
            <span className="text-lg font-light text-foreground hidden sm:inline-block">
              Monitor
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink key={item.href} item={item} />
            ))}
          </div>

          {/* Mobile Menu */}
          {isMobile ? (
            <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
              <DrawerTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-9 w-9 p-0"
                  aria-label="Open menu"
                >
                  <Menu className="w-5 h-5" />
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <div className="flex items-center justify-between">
                    <DrawerTitle className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                        <ChartArea className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-lg font-light">Monitor</span>
                    </DrawerTitle>
                    <DrawerClose asChild>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-9 w-9 p-0"
                        aria-label="Close menu"
                      >
                        <X className="w-5 h-5" />
                      </Button>
                    </DrawerClose>
                  </div>
                </DrawerHeader>
                <div className="px-4 pb-4 space-y-2">
                  {navItems.map((item) => (
                    <NavLink
                      key={item.href}
                      item={item}
                      onClick={() => setDrawerOpen(false)}
                    />
                  ))}
                  <Link href="/" onClick={() => setDrawerOpen(false)}>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="font-light text-sm text-muted-foreground hover:text-foreground h-9 px-4 w-full justify-start"
                    >
                      <LogOut className="w-4 h-4 mr-2" />
                      Logout
                    </Button>
                  </Link>
                </div>
              </DrawerContent>
            </Drawer>
          ) : (
            /* Desktop Actions */
            <div className="flex items-center gap-2">
              <Link href="/">
                <Button
                  variant="ghost"
                  size="sm"
                  className="font-light text-sm text-muted-foreground hover:text-foreground h-9 px-4"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default function ParentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <ParentNavbar />
      {children}
    </div>
  );
}

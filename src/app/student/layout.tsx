"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpen,
  Trophy,
  LogOut,
  Home,
  Menu,
  X,
  HelpCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerClose,
} from "@/components/ui/drawer";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";

function StudentNavbar() {
  const pathname = usePathname();
  const isMobile = useIsMobile();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navItems = [
    {
      href: "/student/dashboard",
      label: "Dashboard",
      icon: Home,
    },
    {
      href: "/student/leaderboard",
      label: "Leaderboard",
      icon: Trophy,
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
          <Link href="/student/dashboard" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <BookOpen className="w-4 h-4 text-primary" />
            </div>
            <span className="text-lg font-light text-foreground hidden sm:inline-block">
              Learn
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
                        <BookOpen className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-lg font-light">Learn</span>
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
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="font-light text-sm text-muted-foreground hover:text-foreground h-9 px-4 w-full justify-start"
                        aria-label="Help"
                      >
                        <HelpCircle className="w-4 h-4 mr-2" />
                        Help
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-80">
                      <div className="space-y-3">
                        <h4 className="font-medium text-sm">
                          Help Instructions
                        </h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex gap-2">
                            <span className="font-medium text-foreground">
                              1.
                            </span>
                            <span>
                              Press on a lesson to watch its videos or take its
                              quiz
                            </span>
                          </li>
                          <li className="flex gap-2">
                            <span className="font-medium text-foreground">
                              2.
                            </span>
                            <span>
                              Press on a lesson to submit that lesson's
                              assignment
                            </span>
                          </li>
                          <li className="flex gap-2">
                            <span className="font-medium text-foreground">
                              3.
                            </span>
                            <span>
                              Press on leaderboards to view your position on the
                              leaderboard and the top placing students
                            </span>
                          </li>
                        </ul>
                      </div>
                    </PopoverContent>
                  </Popover>
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
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="font-light text-sm text-muted-foreground hover:text-foreground h-9 px-4"
                    aria-label="Help"
                  >
                    <HelpCircle className="w-4 h-4 mr-2" />
                    Help
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80" align="end">
                  <div className="space-y-3">
                    <h4 className="font-medium text-sm">Help Instructions</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex gap-2">
                        <span className="font-medium text-foreground">1.</span>
                        <span>
                          Press on a lesson to watch its videos or take its quiz
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span className="font-medium text-foreground">2.</span>
                        <span>
                          Press on a lesson to submit that lesson's assignment
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span className="font-medium text-foreground">3.</span>
                        <span>
                          Press on leaderboards to view your position on the
                          leaderboard and the top placing students
                        </span>
                      </li>
                    </ul>
                  </div>
                </PopoverContent>
              </Popover>
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

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <StudentNavbar />
      {children}
    </div>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { BookOpen, FileText, ArrowRight, UserPlus } from "lucide-react";
import ChildPopover from "./ChildPopover";

const ParentDashboard = () => {
  const children = [
    { name: "Emma", age: 8, lessonsCompleted: 12, screenTime: "2h 30m" },
    { name: "Liam", age: 10, lessonsCompleted: 18, screenTime: "3h 15m" },
  ];

  const stats = {
    totalLessons: 30,
    totalScreenTime: "5h 45m",
    avgScore: 92,
  };

  return (
    <>
      {/* Main Content */}
      <main className="container mx-auto max-w-7xl px-6 py-12">
        {/* Stats Overview - Minimal Cards */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Total Lessons */}
            <Card className="border-border/40 bg-card/50 hover:bg-card/80 transition-colors duration-200">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <BookOpen className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-light text-muted-foreground uppercase tracking-wider">
                        Total Lessons
                      </p>
                      <p className="text-2xl font-light mt-1">
                        {stats.totalLessons}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* AI Reports */}
            <Link href="/parent/reports">
              <Card className="border-border/40 bg-card/50 hover:bg-card hover:border-border transition-all duration-200 cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                        <FileText className="w-5 h-5 text-accent-foreground" />
                      </div>
                      <div>
                        <p className="text-xs font-light text-muted-foreground uppercase tracking-wider">
                          AI Reports
                        </p>
                        <p className="text-2xl font-light mt-1">View</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </section>

        {/* Children Progress */}
        <section>
          <div className="mb-6">
            <h2 className="text-xl font-light text-foreground mb-1">
              Children's Progress
            </h2>
            <p className="text-sm font-light text-muted-foreground">
              Track your children's learning journey
            </p>
          </div>

          <div className="space-y-3">
            {children.map((child) => (
              <StudentCard key={child.name} child={child} />
            ))}
            <StudentCard />
          </div>
        </section>
      </main>
    </>
  );
};

export default ParentDashboard;

const StudentCard = ({
  child,
}: {
  child?: {
    name: string;
    age: number;
    lessonsCompleted: number;
    screenTime: string;
  };
}) => {
  if (!child) {
    return <ChildPopover />;
  }

  return (
    <Card className="group border-border/40 bg-card/50 hover:bg-card hover:border-border transition-all duration-200">
      <CardContent className="p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                <BookOpen className="w-4 h-4 text-primary" />
              </div>
              <div className="min-w-0">
                <h3 className="text-base font-light text-foreground group-hover:text-primary transition-colors truncate">
                  {child.name}
                </h3>
                <p className="text-sm font-light text-muted-foreground">
                  Age {child.age}
                </p>
              </div>
            </div>
            <div className="ml-0 sm:ml-11 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-4">
              <div>
                <p className="text-xs font-light text-muted-foreground uppercase tracking-wider mb-1">
                  Lessons Completed
                </p>
                <p className="text-lg font-light">
                  {child.lessonsCompleted} lessons
                </p>
              </div>
              <div>
                <p className="text-xs font-light text-muted-foreground uppercase tracking-wider mb-1">
                  Screen Time Today
                </p>
                <p className="text-lg font-light">{child.screenTime}</p>
              </div>
            </div>
          </div>
          <div className="ml-0 sm:ml-6 shrink-0 self-start sm:self-center">
            <Link href="/parent/reports">
              <Button
                variant="ghost"
                size="sm"
                className="font-light text-muted-foreground group-hover:text-foreground opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity w-full sm:w-auto"
              >
                View Details
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

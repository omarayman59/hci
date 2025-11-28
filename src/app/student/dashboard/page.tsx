"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { BookOpen, Trophy, Target, ArrowRight, TrendingUp } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const StudentDashboard = () => {
  const lessons = [
    {
      id: 1,
      name: "Cultural Diversity",
      description: "Learn about different cultures around the world",
      completed: false,
      progress: 0,
    },
    {
      id: 2,
      name: "Traditions & Celebrations",
      description: "Explore traditions and celebrations",
      completed: false,
      progress: 0,
    },
    {
      id: 3,
      name: "Global Cuisines",
      description: "Discover global cuisines",
      completed: false,
      progress: 0,
    },
    {
      id: 4,
      name: "Cultural Understanding",
      description: "Understanding cultural diversity",
      completed: false,
      progress: 0,
    },
  ];

  const stats = {
    lessonsCompleted: 8,
    totalLessons: 20,
    totalPoints: 1250,
    currentStreak: 5,
  };

  const progressPercentage =
    (stats.lessonsCompleted / stats.totalLessons) * 100;

  return (
    <>
      {/* Main Content */}
      <main className="container mx-auto max-w-7xl px-6 py-12">
        {/* Stats Overview - Minimal Cards */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Lessons Progress */}
            <Card className="border-border/40 bg-card/50 hover:bg-card/80 transition-colors duration-200">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <BookOpen className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-light text-muted-foreground uppercase tracking-wider">
                        Progress
                      </p>
                      <p className="text-2xl font-light mt-1">
                        {stats.lessonsCompleted}/{stats.totalLessons}
                      </p>
                    </div>
                  </div>
                </div>
                <Progress value={progressPercentage} className="h-1.5" />
                <p className="text-xs font-light text-muted-foreground mt-2">
                  {Math.round(progressPercentage)}% complete
                </p>
              </CardContent>
            </Card>

            {/* Points */}
            <Card className="border-border/40 bg-card/50 hover:bg-card/80 transition-colors duration-200">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Trophy className="w-5 h-5 text-accent-foreground" />
                    </div>
                    <div>
                      <p className="text-xs font-light text-muted-foreground uppercase tracking-wider">
                        Total Points
                      </p>
                      <p className="text-2xl font-light mt-1">
                        {stats.totalPoints.toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-light text-muted-foreground">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>Keep learning to earn more</span>
                </div>
              </CardContent>
            </Card>

            {/* Streak */}
            <Card className="border-border/40 bg-card/50 hover:bg-card/80 transition-colors duration-200">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Target className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-light text-muted-foreground uppercase tracking-wider">
                        Current Streak
                      </p>
                      <p className="text-2xl font-light mt-1">
                        {stats.currentStreak}{" "}
                        {stats.currentStreak === 1 ? "day" : "days"}
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-xs font-light text-muted-foreground">
                  Maintain your daily learning habit
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Lessons Section */}
        <section>
          <div className="mb-6">
            <h2 className="text-xl font-light text-foreground mb-1">
              Your Lessons
            </h2>
            <p className="text-sm font-light text-muted-foreground">
              Continue where you left off or start something new
            </p>
          </div>

          <div className="space-y-3">
            {lessons.map((lesson) => (
              <Card
                key={lesson.id}
                className="group border-border/40 bg-card/50 hover:bg-card hover:border-border transition-all duration-200 cursor-pointer"
              >
                <Link href={`/student/lesson/${lesson.id}`}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                            <BookOpen className="w-4 h-4 text-primary" />
                          </div>
                          <h3 className="text-base font-light text-foreground group-hover:text-primary transition-colors">
                            {lesson.name}
                          </h3>
                        </div>
                        <p className="text-sm font-light text-muted-foreground ml-11">
                          {lesson.description}
                        </p>
                        {lesson.progress > 0 && (
                          <div className="mt-3 ml-11">
                            <Progress value={lesson.progress} className="h-1" />
                          </div>
                        )}
                      </div>
                      <div className="ml-6 shrink-0">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="font-light text-muted-foreground group-hover:text-foreground opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          Start
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default StudentDashboard;

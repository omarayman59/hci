import Link from "next/link";

import { Button } from "@/components/ui/button";

import {
  BookOpen,
  Award,
  Shield,
  BarChart3,
  Sparkles,
  Users,
  ArrowRight,
} from "lucide-react";

const HomePage = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Interactive Lessons",
      description:
        "Engaging video lessons and activities that make learning fun and memorable",
    },
    {
      icon: Award,
      title: "Gamified Learning",
      description:
        "Earn points, climb leaderboards, and celebrate achievements along the way",
    },
    {
      icon: Shield,
      title: "Safe Environment",
      description:
        "Protected from harmful content with built-in safety controls and monitoring",
    },
    {
      icon: BarChart3,
      title: "Progress Tracking",
      description:
        "Parents can monitor learning progress and screen time in real-time",
    },
    {
      icon: Sparkles,
      title: "AI-Powered Reports",
      description:
        "Intelligent insights into your child's learning journey and growth",
    },
    {
      icon: Users,
      title: "Parent Dashboard",
      description:
        "Full control and visibility over your child's educational experience",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border/50 sticky top-0 bg-background/80 backdrop-blur-sm z-50">
        <div className="container mx-auto max-w-7xl px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-light tracking-tight">NG</div>
            <div className="flex items-center gap-8">
              <Link
                href="/login/student"
                className="text-base font-light text-muted-foreground hover:text-foreground transition-colors"
              >
                Sign in
              </Link>
              <Link href="/signup/student">
                <Button variant="default" size="default" className="font-light">
                  Get started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-32 px-6 md:py-40">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center space-y-8">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-foreground leading-[1.1]">
              Learn, Play, Grow
            </h1>
            <p className="text-2xl md:text-3xl font-light text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A safe and fun educational platform where children explore the
              world through interactive lessons, quizzes, and parent-monitored
              activities
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center pt-8">
              <Link href="/signup/student">
                <Button
                  size="lg"
                  className="px-10 py-7 text-lg font-light rounded-md"
                >
                  Start Learning
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/signup/parent">
                <Button
                  size="lg"
                  variant="outline"
                  className="px-10 py-7 text-lg font-light rounded-md"
                >
                  Parent Access
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 px-6 md:py-40 bg-muted/20">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-24 space-y-4">
            <h2 className="text-5xl md:text-6xl font-light tracking-tight text-foreground">
              Everything Kids Need to Learn
            </h2>
            <p className="text-xl md:text-2xl font-light text-muted-foreground max-w-2xl mx-auto">
              Designed with safety, engagement, and educational excellence in
              mind
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {features.map((feature, index) => (
              <div
                key={index}
                className="w-full bg-card p-10 rounded-lg border border-border/50 space-y-6 group hover:border-border transition-colors"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-light text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-lg font-light text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 md:py-40">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <h2 className="text-5xl md:text-6xl font-light tracking-tight text-foreground">
            Ready to Start the Journey?
          </h2>
          <p className="text-xl md:text-2xl font-light text-muted-foreground max-w-2xl mx-auto">
            Join thousands of families making learning fun and safe
          </p>
          <div className="pt-6">
            <Link href="/signup/student">
              <Button
                size="lg"
                className="px-12 py-7 text-lg font-light rounded-md"
              >
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-16 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-base font-light text-muted-foreground">
              © 2024 EduPlatform. All rights reserved.
            </div>
            <div className="flex items-center gap-8 text-base">
              <Link
                href="#"
                className="font-light text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="#"
                className="font-light text-muted-foreground hover:text-foreground transition-colors"
              >
                Terms
              </Link>
              <Link
                href="#"
                className="font-light text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;

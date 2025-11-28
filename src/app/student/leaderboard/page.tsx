"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";
import { Trophy, Share2, ArrowLeft, Crown } from "lucide-react";

const Leaderboard = () => {
  const topPlayers = [
    { rank: 1, name: "Alex", points: 2450 },
    { rank: 2, name: "Jordan", points: 2100 },
    { rank: 3, name: "Sam", points: 1850 },
    { rank: 4, name: "Taylor", points: 1720 },
    { rank: 5, name: "Morgan", points: 1650 },
  ];

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const getRankBadge = (rank: number) => {
    if (rank === 1) {
      return (
        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
          <Crown className="w-3.5 h-3.5 text-primary" />
        </div>
      );
    }
    return (
      <span className="text-xs font-light text-muted-foreground">#{rank}</span>
    );
  };

  return (
    <div className="bg-background">
      {/* Main Content */}
      <main className="container mx-auto max-w-4xl px-6 py-12">
        <Card className="border-border/40 bg-card/50">
          <CardContent className="p-0">
            <div className="divide-y divide-border/40">
              {topPlayers.map((player, index) => (
                <div
                  key={player.rank}
                  className={`group flex items-center gap-4 px-6 py-5 transition-colors duration-200 ${
                    player.rank === 1 ? "bg-primary/5" : "hover:bg-muted/50"
                  }`}
                >
                  {/* Rank Badge */}
                  <div className="w-8 shrink-0 flex items-center justify-center">
                    {getRankBadge(player.rank)}
                  </div>

                  {/* Avatar */}
                  <Avatar className="size-10 shrink-0">
                    <AvatarFallback className="bg-primary/10 text-primary text-xs font-light">
                      {getInitials(player.name)}
                    </AvatarFallback>
                  </Avatar>

                  {/* Name */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-light text-foreground truncate">
                      {player.name}
                    </h3>
                  </div>

                  {/* Points */}
                  <div className="text-right shrink-0">
                    <p className="text-base font-light text-foreground">
                      {player.points.toLocaleString()}
                    </p>
                    <p className="text-xs font-light text-muted-foreground">
                      points
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="px-6 py-6 border-t border-border/40 flex gap-3">
              <Button
                variant="outline"
                className="flex-1 font-light h-10"
                asChild
              >
                <Link href="/student/dashboard">View Dashboard</Link>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="h-10 font-light text-muted-foreground hover:text-foreground"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Leaderboard;

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { CheckCircle2 } from "lucide-react";

const Quiz = () => {
  const router = useRouter();
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    setIsSubmitted(true);
    setTimeout(() => {
      router.push("/student/leaderboard");
    }, 2000);
  };

  return (
    <div className="bg-background flex items-center justify-center p-6">
      <div className="w-full max-w-3xl">
        {!isSubmitted ? (
          <div className="space-y-12">
            {/* Header */}
            <div className="space-y-2">
              <h1 className="text-4xl font-light text-foreground tracking-tight">
                Quiz
              </h1>
              <p className="text-base font-light text-muted-foreground">
                Select the correct answer
              </p>
            </div>

            {/* Question */}
            <div className="space-y-6">
              <h2 className="text-xl font-light text-foreground">
                What is the correct answer?
              </h2>

              <RadioGroup
                value={selectedAnswer}
                onValueChange={setSelectedAnswer}
                className="space-y-2"
              >
                {["A", "B", "C", "D"].map((option) => (
                  <div key={option} className="group relative">
                    <Label
                      htmlFor={option}
                      className={`
                        flex items-center gap-4 p-4 rounded-lg border transition-all cursor-pointer
                        ${
                          selectedAnswer === option
                            ? "border-foreground/20 bg-accent/30"
                            : "border-border bg-background hover:border-foreground/10 hover:bg-accent/10"
                        }
                      `}
                    >
                      <RadioGroupItem
                        value={option}
                        id={option}
                        className="border-foreground/30"
                      />
                      <span className="text-base font-light text-foreground flex-1">
                        Option {option}
                      </span>
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <Button
                className="w-full h-11 text-base font-light rounded-lg text-background hover:bg-primary/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                onClick={handleSubmit}
                disabled={!selectedAnswer}
              >
                Submit Answer
              </Button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 space-y-6">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8 text-primary" />
            </div>
            <div className="text-center space-y-2">
              <h3 className="text-2xl font-light text-foreground">
                Great job!
              </h3>
              <p className="text-sm font-light text-muted-foreground">
                Redirecting to leaderboard...
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;

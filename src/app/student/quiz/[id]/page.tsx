"use client";

import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useRouter, useParams } from "next/navigation";
import { CheckCircle2 } from "lucide-react";

interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
}

interface QuizData {
  [lessonId: number]: QuizQuestion[];
}

const quizData: QuizData = {
  1: [
    {
      question: "What is cultural diversity?",
      options: [
        "The practice of one dominant culture",
        "The variety of human societies and cultures in a specific region or in the world",
        "The elimination of cultural differences",
        "The focus on a single cultural perspective",
      ],
      correctAnswer: "B",
    },
    {
      question: "Why is understanding cultural diversity important?",
      options: [
        "It helps eliminate all cultural differences",
        "It promotes tolerance, respect, and better communication between different groups",
        "It encourages cultural isolation",
        "It focuses only on Western cultures",
      ],
      correctAnswer: "B",
    },
    {
      question: "Which of the following is an example of cultural diversity?",
      options: [
        "Everyone speaking the same language",
        "Different religious practices, languages, and traditions coexisting",
        "Uniform clothing styles worldwide",
        "All countries having the same laws",
      ],
      correctAnswer: "B",
    },
  ],
  2: [
    {
      question: "What is the significance of cultural traditions?",
      options: [
        "They limit personal freedom",
        "They preserve cultural identity and connect generations",
        "They are outdated and should be abandoned",
        "They only exist in developing countries",
      ],
      correctAnswer: "B",
    },
    {
      question: "How do celebrations help communities?",
      options: [
        "They create division among people",
        "They strengthen social bonds and cultural identity",
        "They are only for entertainment",
        "They discourage participation",
      ],
      correctAnswer: "B",
    },
    {
      question: "Which is an example of a global celebration?",
      options: [
        "A celebration that only one country observes",
        "New Year's Eve, which is celebrated in various ways across different cultures",
        "A celebration with no cultural meaning",
        "A celebration that excludes certain groups",
      ],
      correctAnswer: "B",
    },
  ],
  3: [
    {
      question: "What role does food play in culture?",
      options: [
        "It's only for nutrition",
        "It reflects history, traditions, and social values of a community",
        "It has no cultural significance",
        "It's the same across all cultures",
      ],
      correctAnswer: "B",
    },
    {
      question: "How do global cuisines differ?",
      options: [
        "They are all identical",
        "They vary in ingredients, cooking methods, and cultural significance",
        "They only differ in presentation",
        "They have no connection to culture",
      ],
      correctAnswer: "B",
    },
    {
      question: "What can we learn from exploring different cuisines?",
      options: [
        "Nothing significant",
        "We can learn about cultural values, history, and social practices",
        "Only cooking techniques",
        "That all food tastes the same",
      ],
      correctAnswer: "B",
    },
  ],
  4: [
    {
      question: "What is cultural understanding?",
      options: [
        "Judging other cultures by your own standards",
        "Recognizing and respecting differences while finding common ground",
        "Ignoring cultural differences",
        "Forcing your culture on others",
      ],
      correctAnswer: "B",
    },
    {
      question: "How can we build global connections?",
      options: [
        "By avoiding interaction with other cultures",
        "Through open communication, empathy, and mutual respect",
        "By focusing only on our own culture",
        "By eliminating cultural differences",
      ],
      correctAnswer: "B",
    },
    {
      question: "What is the key to effective cross-cultural communication?",
      options: [
        "Assuming everyone thinks the same way",
        "Active listening, cultural awareness, and respect for differences",
        "Speaking louder to be understood",
        "Ignoring cultural context",
      ],
      correctAnswer: "B",
    },
  ],
};

const Quiz = () => {
  const router = useRouter();
  const params = useParams();
  const id = params?.id as string;
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const lessonId = useMemo(() => {
    return parseInt(id || "1", 10);
  }, [id]);

  const questions = useMemo(() => {
    return quizData[lessonId] || quizData[1];
  }, [lessonId]);

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  const handleSubmit = () => {
    if (!selectedAnswer) return;

    if (isLastQuestion) {
      setIsSubmitted(true);
      setTimeout(() => {
        router.push("/student/leaderboard");
      }, 2000);
    } else {
      setSelectedAnswer("");
      setCurrentQuestionIndex((prev) => prev + 1);
    }
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
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-light text-foreground">
                    {currentQuestion.question}
                  </h2>
                </div>
                <p className="text-sm font-light text-muted-foreground">
                  Question {currentQuestionIndex + 1} of {questions.length}
                </p>
              </div>

              <RadioGroup
                value={selectedAnswer}
                onValueChange={setSelectedAnswer}
                className="space-y-2"
              >
                {currentQuestion.options.map((option, index) => {
                  const optionLetter = String.fromCharCode(65 + index); // A, B, C, D
                  return (
                    <div key={optionLetter} className="group relative">
                      <Label
                        htmlFor={optionLetter}
                        className={`
                          flex items-center gap-4 p-4 rounded-lg border transition-all cursor-pointer
                          ${
                            selectedAnswer === optionLetter
                              ? "border-foreground/20 bg-accent/30"
                              : "border-border bg-background hover:border-foreground/10 hover:bg-accent/10"
                          }
                        `}
                      >
                        <RadioGroupItem
                          value={optionLetter}
                          id={optionLetter}
                          className="border-foreground/30"
                        />
                        <span className="text-base font-light text-foreground flex-1">
                          {option}
                        </span>
                      </Label>
                    </div>
                  );
                })}
              </RadioGroup>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <Button
                className="w-full h-11 text-base font-light rounded-lg text-background hover:bg-primary/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                onClick={handleSubmit}
                disabled={!selectedAnswer}
              >
                {isLastQuestion ? "Submit Quiz" : "Next Question"}
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

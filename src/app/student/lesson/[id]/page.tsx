"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { ArrowLeft, Play, Lock, Upload, FileText, X } from "lucide-react";
import { useRouter, useParams } from "next/navigation";
import { fireConfetti } from "@/utils/helpers";

const LessonView = () => {
  const router = useRouter();
  const params = useParams();
  const id = params?.id as string;
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleFileSelect(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (file && file.type === "application/pdf") {
      setSelectedFile(file);
    } else if (file) {
      alert("Please select a PDF file.");
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  }

  function handleRemoveFile() {
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }

  function handleSubmit() {
    if (selectedFile) {
      fireConfetti();
      // Here you would typically upload the file to your server
      console.log("Submitting file:", selectedFile.name);
    }
  }

  return (
    <div className="bg-background">
      <main className="container mx-auto max-w-5xl px-6 py-12">
        <div className="space-y-3">
          {/* Active Lesson */}
          <div className="group">
            <Card className="border rounded-lg hover:border-border/80 transition-colors bg-card">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 space-y-1">
                    <CardTitle className="text-base font-normal tracking-tight">
                      Lesson 1: Cultural Diversity
                    </CardTitle>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Learn about different cultures around the world and their
                      unique traditions
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="aspect-video bg-muted/50 rounded-md border overflow-hidden flex items-center justify-center group-hover:bg-muted/60 transition-colors">
                  <button className="flex flex-col items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                    <div className="w-14 h-14 rounded-full bg-foreground/10 flex items-center justify-center group-hover:bg-foreground/15 transition-colors">
                      <Play className="w-6 h-6 ml-0.5 text-foreground" />
                    </div>
                    <span className="text-sm font-normal">Play Video</span>
                  </button>
                </div>
                <Button
                  className="w-full h-10 font-normal"
                  onClick={() => router.push("/student/quiz/1")}
                >
                  Complete & Take Quiz
                </Button>

                <div className="space-y-3">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      Assignment Submission
                    </label>
                    <div className="flex items-center gap-2">
                      <Input
                        ref={fileInputRef}
                        type="file"
                        accept="application/pdf"
                        onChange={handleFileSelect}
                        className="hidden"
                        id="assignment-file"
                      />
                      <Button
                        type="button"
                        variant="outline"
                        className="flex-1 h-10 font-normal"
                        onClick={() => fileInputRef.current?.click()}
                      >
                        <Upload className="w-4 h-4 mr-2" />
                        {selectedFile ? "Change PDF" : "Attach PDF"}
                      </Button>
                    </div>
                    {selectedFile && (
                      <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-md border">
                        <FileText className="w-4 h-4 text-muted-foreground shrink-0" />
                        <span className="text-sm flex-1 truncate">
                          {selectedFile.name}
                        </span>
                        <button
                          type="button"
                          onClick={handleRemoveFile}
                          className="text-muted-foreground hover:text-foreground transition-colors"
                          aria-label="Remove file"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </div>
                  <Button
                    className="w-full h-10 font-normal"
                    onClick={handleSubmit}
                    disabled={!selectedFile}
                  >
                    Submit Assignment
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Upcoming Lessons */}
          <div className="group">
            <Card className="border rounded-lg opacity-60 hover:opacity-100 transition-opacity bg-card">
              <CardHeader className="py-4">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3 flex-1">
                    <Lock className="h-4 w-4 text-muted-foreground shrink-0" />
                    <div>
                      <CardTitle className="text-base font-normal tracking-tight text-muted-foreground">
                        Lesson 2: Global Communication
                      </CardTitle>
                      <p className="text-sm text-muted-foreground mt-0.5">
                        Available after completing Lesson 1
                      </p>
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>

          <div className="group">
            <Card className="border rounded-lg opacity-60 hover:opacity-100 transition-opacity bg-card">
              <CardHeader className="py-4">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3 flex-1">
                    <Lock className="h-4 w-4 text-muted-foreground shrink-0" />
                    <div>
                      <CardTitle className="text-base font-normal tracking-tight text-muted-foreground">
                        Lesson 3: Cross-Cultural Understanding
                      </CardTitle>
                      <p className="text-sm text-muted-foreground mt-0.5">
                        Available after completing Lesson 2
                      </p>
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>

          <div className="group">
            <Card className="border rounded-lg opacity-60 hover:opacity-100 transition-opacity bg-card">
              <CardHeader className="py-4">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3 flex-1">
                    <Lock className="h-4 w-4 text-muted-foreground shrink-0" />
                    <div>
                      <CardTitle className="text-base font-normal tracking-tight text-muted-foreground">
                        Lesson 4: Building Global Connections
                      </CardTitle>
                      <p className="text-sm text-muted-foreground mt-0.5">
                        Available after completing Lesson 3
                      </p>
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LessonView;

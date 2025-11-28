import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, TrendingUp, Download } from "lucide-react";

const AIReports = () => {
  const reports = [
    {
      title: "Emma's Learning Report - Week 47",
      date: "Nov 20-26, 2024",
      subject: "Cultural Studies",
      highlights: [
        "Completed 4 lessons with 95% average score",
        "Strong engagement with video content",
        "Recommended: More interactive quizzes",
      ],
    },
    {
      title: "Liam's Learning Report - Week 47",
      date: "Nov 20-26, 2024",
      subject: "World Geography",
      highlights: [
        "Completed 6 lessons with 88% average score",
        "Excellent progress in map activities",
        "Recommended: Practice time zones",
      ],
    },
  ];

  return (
    <>
      {/* Main Content */}
      <main className="container mx-auto max-w-7xl px-6 py-12">
        <div className="space-y-4">
          {reports.map((report, index) => (
            <Card
              key={index}
              className="group border-border/40 bg-card/50 hover:bg-card hover:border-border transition-all duration-200"
            >
              <CardContent className="p-8">
                <div className="space-y-6">
                  {/* Report Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                          <FileText className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <h2 className="text-lg font-light text-foreground group-hover:text-primary transition-colors">
                            {report.title}
                          </h2>
                          <p className="text-xs font-light text-muted-foreground mt-0.5">
                            {report.date}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Subject Section */}
                  <div className="pl-11">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-6 h-6 rounded bg-primary/10 flex items-center justify-center">
                        <TrendingUp className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <p className="text-sm font-light text-foreground">
                        {report.subject}
                      </p>
                    </div>

                    {/* Key Highlights */}
                    <div className="space-y-3">
                      <p className="text-xs font-light text-muted-foreground uppercase tracking-wider">
                        Key Highlights
                      </p>
                      <ul className="space-y-2.5">
                        {report.highlights.map((highlight, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-sm font-light text-muted-foreground"
                          >
                            <span className="text-primary mt-1.5 shrink-0">
                              •
                            </span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="pt-4 border-t border-border/40">
                    <Button
                      variant="ghost"
                      className="w-full font-light text-muted-foreground hover:text-foreground group-hover:bg-muted/50 transition-colors"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download Full Report
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </>
  );
};

export default AIReports;

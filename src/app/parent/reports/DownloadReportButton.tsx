"use client";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";

import { Download } from "lucide-react";

const DownloadReportButton = () => {
  return (
    <Button
      variant="ghost"
      className="cursor-pointer w-full font-light text-muted-foreground hover:text-foreground group-hover:bg-muted/50 transition-colors"
      onClick={() => toast.success("Report downloaded successfully")}
    >
      <Download className="size-4 mr-2" />
      Download Full Report
    </Button>
  );
};

export default DownloadReportButton;

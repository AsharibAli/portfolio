"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CopyIcon, CheckIcon, DownloadIcon, ExternalLinkIcon } from "lucide-react";

interface JsonDisplayProps {
  data: any;
  title?: string;
}

export function JsonDisplay({ data, title = "API Data" }: JsonDisplayProps) {
  // State to track copy status
  const [copied, setCopied] = useState(false);
  // State to store formatted JSON string
  const [jsonString, setJsonString] = useState("");

  // Format JSON data on component mount
  useEffect(() => {
    const formatted = JSON.stringify(data, null, 2);
    setJsonString(formatted);
  }, [data]);

  // Function to copy JSON to clipboard
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(jsonString);
      setCopied(true);
      // Reset copy status after 2 seconds
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  // Function to download JSON as file
  const downloadJson = () => {
    const blob = new Blob([jsonString], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "resume-data.json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Function to open API route in new tab
  const openApiRoute = () => {
    window.open("/api/profile", "_blank");
  };

  return (
    <div className="mx-auto w-full max-w-6xl space-y-3 sm:space-y-4">
      {/* Header with title and action buttons */}
      <Card className="p-0">
        <CardHeader className="mb-0 px-3 py-2 sm:px-4 sm:py-2.5 md:px-6 md:py-3">
          <div className="flex min-h-[3.5rem] flex-col justify-center gap-2 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="leading-none text-lg font-semibold sm:text-xl md:text-2xl">{title}</h2>
            <div className="flex gap-2">
              {/* Copy JSON button */}
              <Button
                onClick={copyToClipboard}
                variant="outline"
                size="sm"
                className="flex items-center gap-1 px-2 py-1 text-xs md:gap-2 md:px-4 md:py-2 md:text-sm"
              >
                {copied ? (
                  <>
                    <CheckIcon className="h-3 w-3 md:h-4 md:w-4" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <CopyIcon className="h-3 w-3 md:h-4 md:w-4" />
                    <span>Copy data</span>
                  </>
                )}
              </Button>

              {/* API Route button */}
              <Button
                onClick={openApiRoute}
                variant="outline"
                size="sm"
                className="flex items-center gap-1 px-2 py-1 text-xs md:gap-2 md:px-4 md:py-2 md:text-sm"
              >
                <ExternalLinkIcon className="h-3 w-3 md:h-4 md:w-4" />
                <span>API Route</span>
              </Button>
              
              {/* Download button */}
              <Button
                onClick={downloadJson}
                variant="outline"
                size="sm"
                className="flex items-center gap-1 px-2 py-1 text-xs md:gap-2 md:px-4 md:py-2 md:text-sm"
              >
                <DownloadIcon className="h-3 w-3 md:h-4 md:w-4" />
                <span>Download JSON</span>
              </Button>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* JSON display area */}
      <Card className="p-0">
        <CardContent className="p-0">
          <div className="max-h-[65vh] sm:max-h-[75vh] overflow-auto scrollbar-hide">
            <pre className="p-3 font-mono text-xs leading-relaxed text-muted-foreground sm:p-4 sm:text-sm md:p-6">
              <code className="language-json">{jsonString}</code>
            </pre>
          </div>
        </CardContent>
      </Card>


    </div>
  );
}

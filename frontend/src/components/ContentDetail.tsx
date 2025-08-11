"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Download, 
  Copy, 
  CheckCheck,
  Calendar,
  Type 
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ContentDetailProps {
  isOpen: boolean;
  onClose: () => void;
  content: {
    id: number;
    title: string;
    type: string;
    createdAt: string;
    preview: string;
    imageUrl: string | null;
  } | null;
}

export function ContentDetail({ isOpen, onClose, content }: ContentDetailProps) {
  const [isCopied, setIsCopied] = useState(false);

  if (!content) return null;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(content.preview);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className={cn(
        "max-w-3xl h-[80vh]",
        "grid grid-rows-[auto,1fr] gap-4"
      )}>
        <DialogHeader>
          <DialogTitle>{content.title}</DialogTitle>
          <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
            <div className="flex items-center gap-1">
              <Type className="h-4 w-4" />
              <span className="capitalize">{content.type}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{new Date(content.createdAt).toLocaleDateString()}</span>
            </div>
          </div>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Content Preview */}
          <ScrollArea className="h-full">
            <div className="pr-4">
              <div className="prose prose-neutral dark:prose-invert">
                <p>{content.preview}</p>
              </div>
            </div>
          </ScrollArea>

          {/* Image and Actions */}
          <div className="space-y-4">
            <div className="aspect-square bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-950 dark:to-cyan-950 rounded-lg shadow-sm" />
            <div className="flex flex-col gap-2">
              <Button 
                onClick={handleCopy} 
                variant="outline" 
                className="w-full h-10"
              >
                {isCopied ? (
                  <>
                    <CheckCheck className="mr-2 h-4 w-4" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="mr-2 h-4 w-4" />
                    Copy Content
                  </>
                )}
              </Button>
              <Button className="w-full h-10">
                <Download className="mr-2 h-4 w-4" />
                Download
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

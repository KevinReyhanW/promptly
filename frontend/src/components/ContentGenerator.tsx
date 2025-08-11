"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Sparkles, Download, Bookmark, Copy, CheckCheck } from "lucide-react";

const MAX_DAILY_GENERATIONS = 5;
const MAX_STORED_ITEMS = 10;

export default function ContentGenerator() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [hasGenerated, setHasGenerated] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [dailyGenerations, setDailyGenerations] = useState(() => {
    // Check localStorage for today's generations
    const today = new Date().toDateString();
    const stored = localStorage.getItem('dailyGenerations');
    if (stored) {
      const { date, count } = JSON.parse(stored);
      if (date === today) return count;
    }
    return 0;
  });

  const handleGenerate = async () => {
    // Check daily limit
    if (dailyGenerations >= MAX_DAILY_GENERATIONS) {
      alert("You've reached your daily generation limit. Please try again tomorrow!");
      return;
    }

    // Check storage limit
    const storedItems = JSON.parse(localStorage.getItem('generatedContent') || '[]');
    if (storedItems.length >= MAX_STORED_ITEMS) {
      alert(`You've reached the maximum storage limit of ${MAX_STORED_ITEMS} items. Please delete some items to continue.`);
      return;
    }

    setIsGenerating(true);
    // TODO: Implement generation logic
    setTimeout(() => {
      setIsGenerating(false);
      setHasGenerated(true);
      
      // Update daily generations
      const newCount = dailyGenerations + 1;
      setDailyGenerations(newCount);
      localStorage.setItem('dailyGenerations', JSON.stringify({
        date: new Date().toDateString(),
        count: newCount
      }));
    }, 2000);
  };

  const handleCopyToClipboard = async () => {
    const content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    await navigator.clipboard.writeText(content);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="container max-w-7xl mx-auto py-10 px-6">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
          Content Generator
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8">
        <div className="space-y-6">
          <Card className="p-8">
            <Tabs defaultValue="generate" className="space-y-6">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="generate">Generate</TabsTrigger>
                <TabsTrigger value="result" disabled={!hasGenerated}>
                  Result
                </TabsTrigger>
              </TabsList>

              <TabsContent value="generate" className="space-y-8">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label>Content Type</Label>
                    <Select defaultValue="blog">
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select content type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="blog">Blog Article</SelectItem>
                        <SelectItem value="social">Social Media Post</SelectItem>
                        <SelectItem value="email">Email Campaign</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Topic</Label>
                    <Input 
                      placeholder="Enter your topic or idea" 
                      className="w-full" 
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Tone</Label>
                      <Select defaultValue="friendly">
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select tone" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="friendly">Friendly</SelectItem>
                          <SelectItem value="professional">Professional</SelectItem>
                          <SelectItem value="academic">Academic</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Image Style</Label>
                      <Select defaultValue="photorealistic">
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select style" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="photorealistic">Photorealistic</SelectItem>
                          <SelectItem value="illustration">Illustration</SelectItem>
                          <SelectItem value="3d">3D Render</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Button 
                    size="lg" 
                    className="w-full h-12 text-base font-medium"
                    onClick={handleGenerate}
                    disabled={isGenerating}
                  >
                    {isGenerating ? (
                      <>Generating...</>
                    ) : (
                      <>
                        <Sparkles className="mr-2 h-5 w-5" />
                        Generate Content
                      </>
                    )}
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="result" className="space-y-6">
                <div className="space-y-8">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-semibold">How to Train Your AI</h3>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={handleCopyToClipboard}
                        className="text-muted-foreground hover:text-foreground"
                      >
                        {isCopied ? (
                          <>
                            <CheckCheck className="mr-2 h-4 w-4" />
                            Copied!
                          </>
                        ) : (
                          <>
                            <Copy className="mr-2 h-4 w-4" />
                            Copy
                          </>
                        )}
                      </Button>
                    </div>
                    <div className="prose prose-neutral dark:prose-invert max-w-none">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="p-4">
                      <div className="aspect-square rounded-lg bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-950 dark:to-cyan-950" />
                    </Card>
                    <div className="space-y-4">
                      <Button variant="outline" className="w-full" size="lg">
                        <Bookmark className="mr-2 h-5 w-5" />
                        Save to Library
                      </Button>
                      <Button className="w-full" size="lg">
                        <Download className="mr-2 h-5 w-5" />
                        Download
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </Card>
        </div>

        {/* Recent Creations Sidebar */}
        <div className="space-y-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-6">Recent Creations</h3>
            <div className="space-y-6">
              <div className="group cursor-pointer hover:opacity-90 transition-opacity">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-950 dark:to-cyan-950 rounded-lg mb-3 shadow-sm"></div>
                <p className="font-medium group-hover:text-primary truncate">AI in 2025: The Future of Technology</p>
                <p className="text-sm text-muted-foreground">Blog Article • 2 days ago</p>
              </div>
              <div className="group cursor-pointer hover:opacity-90 transition-opacity">
                <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-950 dark:to-pink-950 rounded-lg mb-3 shadow-sm"></div>
                <p className="font-medium group-hover:text-primary truncate">10 Essential Coding Tips for Beginners</p>
                <p className="text-sm text-muted-foreground">Blog Article • 3 days ago</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

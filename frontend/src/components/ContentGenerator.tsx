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
import Image from "next/image";

export default function ContentGenerator() {
  return (
    <div className="container max-w-7xl mx-auto py-10 px-6">
      <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">New Content</h1>
      <div className="grid grid-cols-[1fr_320px] gap-8">
        {/* Main Content */}
        <div className="space-y-8">
          <Card className="p-8 border-2">
            <h2 className="text-2xl font-semibold mb-8">New Content Generator</h2>
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Prompt Type</label>
                <Select defaultValue="blog">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select prompt type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="blog">Blog Article</SelectItem>
                    <SelectItem value="social">Social Media Post</SelectItem>
                    <SelectItem value="email">Email Campaign</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Topic</label>
                <Input placeholder="Enter your topic" className="w-full" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Tone</label>
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
                <label className="text-sm font-medium text-muted-foreground">Image Style</label>
                <Select defaultValue="photorealistic">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select image style" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="photorealistic">Photorealistic</SelectItem>
                    <SelectItem value="illustration">Illustration</SelectItem>
                    <SelectItem value="3d">3D</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="w-full text-base py-6" size="lg">Generate</Button>
            </div>
          </Card>

          {/* Result Panel */}
          <Card className="p-8 border-2">
            <h3 className="text-2xl font-semibold mb-6">How to Train Your AI</h3>
            <div className="grid grid-cols-[2fr_1fr] gap-8">
              <div className="prose prose-neutral dark:prose-invert max-w-none">
                <p className="text-base leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
              </div>
              <div className="space-y-4">
                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-sm"></div>
                <div className="flex gap-3">
                  <Button variant="outline" className="flex-1 h-10">
                    Save to Library
                  </Button>
                  <Button variant="default" className="flex-1 h-10">
                    Download
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Sidebar */}
        <div>
          <Card className="p-6 border-2">
            <h3 className="text-xl font-semibold mb-6">Recent Creations</h3>
            <div className="space-y-6">
              <div className="group cursor-pointer hover:opacity-90 transition-opacity">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-950 dark:to-cyan-950 rounded-lg mb-3 shadow-sm"></div>
                <p className="font-medium group-hover:text-primary">AI in 2025</p>
              </div>
              <div className="group cursor-pointer hover:opacity-90 transition-opacity">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-950 dark:to-cyan-950 rounded-lg mb-3 shadow-sm"></div>
                <p className="font-medium group-hover:text-primary">10 Coding Tips</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, BookText, Clock } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <div className="w-full bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-background py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
            Welcome to Promptly
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Transform your ideas into compelling content with AI-powered generation.
            Create blog posts, social media content, and more in seconds.
          </p>
          <Button size="lg" className="h-12 px-8" asChild>
            <Link href="/new-content">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quick Start Card */}
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950 p-8 transition-all hover:shadow-lg border-2">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-50 transition-opacity group-hover:opacity-70" />
            <Sparkles className="h-10 w-10 text-blue-500 mb-4" />
            <h2 className="text-2xl font-semibold mb-4">Quick Start</h2>
            <p className="text-muted-foreground mb-6">Create new AI-generated content with just a few clicks.</p>
            <Button variant="secondary" className="group-hover:translate-x-1 transition-transform" asChild>
              <Link href="/new-content">
                Create content <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* My Library Card */}
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950 p-8 transition-all hover:shadow-lg border-2">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-50 transition-opacity group-hover:opacity-70" />
            <BookText className="h-10 w-10 text-purple-500 mb-4" />
            <h2 className="text-2xl font-semibold mb-4">My Library</h2>
            <p className="text-muted-foreground mb-6">Access your saved content and generated assets.</p>
            <Button variant="secondary" className="group-hover:translate-x-1 transition-transform" asChild>
              <Link href="/library">
                View library <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Recent Activity Card */}
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950 dark:to-teal-950 p-8 transition-all hover:shadow-lg border-2">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 opacity-50 transition-opacity group-hover:opacity-70" />
            <Clock className="h-10 w-10 text-emerald-500 mb-4" />
            <h2 className="text-2xl font-semibold mb-4">Recent Activity</h2>
            <p className="text-muted-foreground mb-6">See your latest generated content and activities.</p>
            <Button variant="secondary" className="group-hover:translate-x-1 transition-transform" asChild>
              <Link href="/dashboard">
                View activity <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}

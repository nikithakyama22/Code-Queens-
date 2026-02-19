import { Link } from "react-router-dom";
import { Activity, Brain, Utensils, TrendingUp, ChevronRight, Heart, Dumbbell, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const features = [
  {
    icon: Dumbbell,
    title: "AI Workout Planner",
    description: "Personalized workout plans that adapt to your fitness level, goals, and available equipment.",
  },
  {
    icon: Utensils,
    title: "Nutrition Guidance",
    description: "Smart meal plans and calorie tracking tailored to your dietary needs and health goals.",
  },
  {
    icon: MessageCircle,
    title: "AI Health Coach Chat",
    description: "Get instant answers, motivation, and expert advice from your personal AI health coach.",
  },
  {
    icon: TrendingUp,
    title: "Progress Tracking",
    description: "Visualize your fitness journey with detailed analytics and milestone tracking.",
  },
];

const stats = [
  { value: "10K+", label: "Active Users" },
  { value: "500+", label: "Workout Plans" },
  { value: "98%", label: "Satisfaction" },
  { value: "24/7", label: "AI Support" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Heart className="h-7 w-7 text-primary" />
            <span className="text-xl font-bold text-foreground">ArogyaMitra</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <Link to="/workout" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Workouts</Link>
            <Link to="/nutrition" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Nutrition</Link>
            <Link to="/chat" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">AI Coach</Link>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" asChild>
              <Link to="/auth">Log In</Link>
            </Button>
            <Button asChild>
              <Link to="/auth">Get Started</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        </div>
        <div className="container relative z-10 flex flex-col items-center justify-center py-24 md:py-36 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 mb-6 animate-fade-in">
            <Activity className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">AI-Powered Health Platform</span>
          </div>
          <h1 className="max-w-4xl text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Your Personal
            <span className="gradient-hero bg-clip-text text-transparent"> AI Personal Health </span>
            Coach
          </h1>
          <p className="mt-6 max-w-2xl text-lg md:text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: '0.2s' }}>
            ArogyaMitra combines AI-driven workout planning, nutrition guidance, and health coaching to help you achieve your fitness goals smarter and faster.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Button size="lg" className="text-base px-8" asChild>
              <Link to="/dashboard">
                Get Started Free
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8" asChild>
              <Link to="/chat">Talk to AI Coach</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 md:py-28">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Everything You Need to Stay Healthy
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Powered by advanced AI to deliver personalized health and fitness experiences.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <div
                key={feature.title}
                className="group rounded-xl border border-border bg-card p-6 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg gradient-hero">
                  <feature.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container">
          <div className="rounded-2xl gradient-hero p-12 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Start Your Fitness Journey Today
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8">
              Join thousands of users transforming their health with AI-powered guidance.
            </p>
            <Button size="lg" variant="secondary" className="text-base px-8" asChild>
              <Link to="/dashboard">
                Get Started Free
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Heart className="h-5 w-5 text-primary" />
            <span className="font-semibold text-foreground">ArogyaMitra</span>
          </div>
          <p className="text-sm text-muted-foreground">© 2026 ArogyaMitra. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

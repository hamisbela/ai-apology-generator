import { Card } from "@/components/ui/card";
import { Heart, PenTool, Target, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-red-600 text-transparent bg-clip-text">
            About Us ✨
          </h1>
          <p className="text-xl text-gray-600">
            Empowering sincere communication through AI-driven apologies
          </p>
        </div>
        
        <div className="gradient-border mb-16">
          <div className="p-8 text-center">
            <p className="text-xl leading-relaxed text-gray-700">
              Welcome to AI Apology Generator, where empathy meets artificial intelligence to help
              people craft sincere, heartfelt apologies. Our platform leverages cutting-edge
              AI technology to generate authentic apologies that effectively communicate
              remorse and commitment to making things right. ✨
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="p-8 hover:shadow-lg transition-all duration-300 border-2 hover:border-pink-200">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-pink-100 rounded-full flex items-center justify-center">
                <Target className="h-8 w-8 text-pink-500" />
              </div>
              <h2 className="text-2xl font-semibold">Our Mission 🎯</h2>
              <p className="text-gray-600">
                Making sincere apology writing accessible to everyone, helping restore
                relationships and trust.
              </p>
            </div>
          </Card>

          <Card className="p-8 hover:shadow-lg transition-all duration-300 border-2 hover:border-pink-200">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-pink-100 rounded-full flex items-center justify-center">
                <Heart className="h-8 w-8 text-pink-500" />
              </div>
              <h2 className="text-2xl font-semibold">Our Values ❤️</h2>
              <p className="text-gray-600">
                We believe in authenticity, empathy, and making powerful communication tools
                accessible to everyone.
              </p>
            </div>
          </Card>
        </div>

        <div className="space-y-12 mb-16">
          <section className="text-center">
            <div className="w-16 h-16 mx-auto bg-pink-100 rounded-full flex items-center justify-center mb-6">
              <PenTool className="h-8 w-8 text-pink-500" />
            </div>
            <h2 className="text-3xl font-semibold mb-4">How It Works ⚡</h2>
            <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Our AI-powered platform uses advanced natural language processing to understand your
              situation and generate relevant, sincere apologies. We combine empathy and
              professionalism to create apologies that effectively communicate your remorse
              and commitment to making things right.
            </p>
          </section>

          <section className="text-center">
            <div className="w-16 h-16 mx-auto bg-pink-100 rounded-full flex items-center justify-center mb-6">
              <Users className="h-8 w-8 text-pink-500" />
            </div>
            <h2 className="text-3xl font-semibold mb-4">Our Commitment 🤝</h2>
            <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
              We're committed to providing a reliable, user-friendly tool that helps people
              craft genuine apologies. We continuously improve our AI models and user
              experience based on feedback from our community.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
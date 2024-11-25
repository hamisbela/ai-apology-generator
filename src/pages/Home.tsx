import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Coffee, Sparkles, PenTool, Star, Heart, Copy, Check } from 'lucide-react';
import { genAI } from '@/lib/gemini';

export default function Home() {
  const [description, setDescription] = useState('');
  const [apology, setApology] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const generateApology = async () => {
    if (!description.trim()) return;
    
    setLoading(true);
    setError(null);
    try {
      if (!genAI) {
        throw new Error("API key not configured. Please add your Gemini API key to continue.");
      }
      
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const prompt = `Generate a sincere and professional apology letter/email (between 100-300 words) based on this context: ${description}. The apology should be genuine, take responsibility, and offer a solution or way forward. Make it personal and empathetic, avoiding generic corporate language.`;
      
      const result = await model.generateContent(prompt);
      setApology(result.response.text());
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred while generating the apology');
      setApology('');
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(apology);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12 py-4">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-red-600 text-transparent bg-clip-text leading-tight">
            Free AI Apology Generator ✨
          </h1>
          <p className="text-xl text-gray-600">
            Generate sincere, heartfelt apologies in seconds! 💌
          </p>
        </div>
        
        <div className="gradient-border mb-8">
          <div className="p-8">
            <div className="space-y-6">
              <Textarea
                placeholder="✍️ Describe the situation and what you're apologizing for..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="min-h-[120px] text-lg border-2 focus:border-pink-400"
              />
              
              <Button 
                onClick={generateApology}
                disabled={loading || !description.trim()}
                className="w-full text-lg py-6 bg-gradient-to-r from-pink-500 to-red-600 hover:from-pink-600 hover:to-red-700"
              >
                {loading ? (
                  <>
                    <Sparkles className="mr-2 h-5 w-5 animate-spin" />
                    Creating Magic...
                  </>
                ) : (
                  <>
                    <PenTool className="mr-2 h-5 w-5" />
                    Generate Apology ✨
                  </>
                )}
              </Button>

              {error && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-600">
                  {error}
                </div>
              )}
            </div>
          </div>
        </div>

        {apology && (
          <Card className="p-6 mb-12 hover:shadow-lg transition-all duration-300 border-2 hover:border-pink-200">
            <div className="flex justify-between items-start gap-4 mb-4">
              <h3 className="text-xl font-semibold">Your Apology</h3>
              <Button
                variant="outline"
                size="sm"
                onClick={copyToClipboard}
                className="flex items-center gap-2 hover:bg-pink-50"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    <span>Copy</span>
                  </>
                )}
              </Button>
            </div>
            <p className="whitespace-pre-wrap text-gray-700 leading-relaxed">
              {apology}
            </p>
          </Card>
        )}

        <Card className="p-8 bg-gradient-to-br from-pink-50 to-red-50 border-2 border-pink-200 mb-16">
          <div className="text-center space-y-4">
            <Coffee className="h-12 w-12 mx-auto text-pink-500" />
            <h2 className="text-2xl font-bold">Support Our Work ❤️</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Help us maintain and improve our AI tools by supporting our API & hosting costs. 
              Your contribution helps keep this tool free for everyone! 🙏
            </p>
            <a
              href="https://roihacks.gumroad.com/coffee"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button size="lg" className="text-lg px-8 bg-gradient-to-r from-pink-500 to-red-600 hover:from-pink-600 hover:to-red-700">
                <Coffee className="mr-2 h-5 w-5" />
                Buy Us a Coffee ☕
              </Button>
            </a>
          </div>
        </Card>

        <div className="bg-gradient-to-br from-pink-50 to-red-50 rounded-2xl shadow-xl p-8 mb-16">
          <article className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-red-600 text-transparent bg-clip-text">
              Free AI Apology Generator: Write Perfect Apologies Instantly ⚡
            </h2>
            
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed">
                Our Free AI Apology Generator is the ultimate tool for crafting sincere, heartfelt apologies. 
                Using advanced artificial intelligence, we help you create genuine, empathetic apologies that 
                effectively communicate your remorse and commitment to making things right.
              </p>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <Star className="h-6 w-6 text-pink-500" />
                  The #1 AI Apology Generator 🎯
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="mr-2">💝</span>
                    <span>Genuine, heartfelt apologies tailored to your situation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">🤖</span>
                    <span>AI-powered technology for authentic communication</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">⚡</span>
                    <span>Generate professional apologies in seconds</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✨</span>
                    <span>Perfect balance of sincerity and professionalism</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">💎</span>
                    <span>Free to use with unlimited generations</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <Heart className="h-6 w-6 text-pink-500" />
                  Why Choose Our AI Apology Generator? 💫
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our AI-powered apology generator stands out by understanding the nuances of effective apologies,
                  ensuring your message is:
                </p>
                <ul className="mt-4 space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <span>🎯</span> Sincere and authentic
                  </li>
                  <li className="flex items-center gap-2">
                    <span>💡</span> Clear and concise
                  </li>
                  <li className="flex items-center gap-2">
                    <span>🌟</span> Solution-focused
                  </li>
                  <li className="flex items-center gap-2">
                    <span>🚀</span> Professionally written
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-2xl font-semibold mb-4">Perfect For Every Situation 💌</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our AI apology generator is perfect for:
                </p>
                <ul className="mt-4 space-y-2 text-gray-600">
                  <li>• Professional apologies to clients</li>
                  <li>• Personal relationship reconciliation</li>
                  <li>• Business communication</li>
                  <li>• Customer service responses</li>
                  <li>• Team communication</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-2xl font-semibold mb-4">Tips for Effective Apologies 🎯</h3>
                <ol className="list-decimal pl-5 space-y-2 text-gray-600">
                  <li>Be specific about what you're apologizing for</li>
                  <li>Take responsibility for your actions</li>
                  <li>Express genuine remorse</li>
                  <li>Offer a solution or way forward</li>
                  <li>Make a commitment to change</li>
                </ol>
              </div>
            </div>
          </article>
        </div>

        <Card className="p-8 bg-gradient-to-br from-pink-50 to-red-50 border-2 border-pink-200 mb-16">
          <div className="text-center space-y-4">
            <Coffee className="h-12 w-12 mx-auto text-pink-500" />
            <h2 className="text-2xl font-bold">Love Our Free AI Apology Generator? Support Its Growth! 🚀</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Your support helps us maintain our AI infrastructure, improve the tool's capabilities,
              and keep it accessible to everyone. Every coffee counts! ☕
            </p>
            <div className="pt-2">
              <a
                href="https://roihacks.gumroad.com/coffee"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button size="lg" className="text-lg px-8 bg-gradient-to-r from-pink-500 to-red-600 hover:from-pink-600 hover:to-red-700">
                  <Coffee className="mr-2 h-5 w-5" />
                  Buy Us a Coffee ☕
                </Button>
              </a>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
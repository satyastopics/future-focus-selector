
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Briefcase, Layers, LightBulb, ArrowRight, Star } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Index = () => {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-career-purple to-purple-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                Shape Your Future Career Path
              </h1>
              <p className="text-lg opacity-90 mb-6">
                Explore career clusters, discover high-income skills, and build a personalized roadmap 
                for your professional journey.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/library">
                  <Button size="lg" className="bg-white text-career-purple hover:bg-gray-100">
                    <BookOpen className="mr-2 h-5 w-5" /> Explore Careers
                  </Button>
                </Link>
                <Link to="/library">
                  <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                    <Briefcase className="mr-2 h-5 w-5" /> Start Planning
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-yellow-400 rounded-full opacity-20"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-400 rounded-full opacity-20"></div>
                <div className="relative bg-white p-6 rounded-xl shadow-lg">
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <div className="bg-orange-100 p-3 rounded-lg text-orange-800 font-medium text-center">Technology</div>
                    <div className="bg-blue-100 p-3 rounded-lg text-blue-800 font-medium text-center">Healthcare</div>
                    <div className="bg-green-100 p-3 rounded-lg text-green-800 font-medium text-center">Engineering</div>
                    <div className="bg-purple-100 p-3 rounded-lg text-purple-800 font-medium text-center">Education</div>
                  </div>
                  <div className="text-gray-600 text-sm text-center">
                    Over 25 career clusters and hundreds of careers to explore
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">How Career Explorer Works</h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
              A simple yet powerful approach to career planning designed by FutureReadySchools.com
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-t-4 border-t-blue-500">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Layers className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Explore Clusters</CardTitle>
                <CardDescription>
                  Start by exploring career clusters that match your interests and strengths
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Browse over 25 industry clusters to understand the landscape of career opportunities available to you.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-t-4 border-t-purple-500">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Briefcase className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Discover Careers</CardTitle>
                <CardDescription>
                  Find specific careers within your chosen clusters
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Explore detailed information about each career, including required skills, learning paths, and future potential.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-t-4 border-t-green-500">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <LightBulb className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Build Your Plan</CardTitle>
                <CardDescription>
                  Create a personalized roadmap for skill acquisition
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Get recommendations on learning resources, transferable skills, and step-by-step paths to achieve your career goals.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* High Income Skills Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Building a High-Income Skill Portfolio</h2>
              <p className="text-gray-600 mb-4">
                In today's rapidly changing job market, developing high-income skills is crucial for long-term career success. These skills are often:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700"><span className="font-medium">Future-proof</span> – Resistant to automation and outsourcing</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700"><span className="font-medium">In high demand</span> – Sought after across multiple industries</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700"><span className="font-medium">Scalable</span> – Can increase your earning potential over time</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700"><span className="font-medium">Transferable</span> – Applicable across different roles and industries</span>
                </li>
              </ul>
              <p className="text-gray-600 mb-6">
                Our career explorer helps you identify these high-value skills within your chosen career path and provides resources to develop them systematically.
              </p>
              <Link to="/library">
                <Button className="flex items-center gap-2">
                  Discover High-Income Careers <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="flex-1">
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4 text-career-purple">Top High-Income Skills</h3>
                <div className="space-y-4">
                  <div className="p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="font-medium">Data Analysis & Visualization</div>
                    <div className="text-sm text-gray-600">Used in finance, technology, healthcare and more</div>
                  </div>
                  <div className="p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="font-medium">AI & Machine Learning</div>
                    <div className="text-sm text-gray-600">Rapidly growing field with applications across industries</div>
                  </div>
                  <div className="p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="font-medium">UX/UI Design</div>
                    <div className="text-sm text-gray-600">Essential for digital products and experiences</div>
                  </div>
                  <div className="p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="font-medium">Digital Marketing</div>
                    <div className="text-sm text-gray-600">Critical for business growth and customer acquisition</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Multidisciplinary Knowledge Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">The Power of Multidisciplinary Knowledge</h2>
            <p className="text-gray-600 mt-2 max-w-3xl mx-auto">
              Combining knowledge from different fields creates unique advantages in today's interconnected world
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-start mb-4">
                <div className="bg-green-100 p-2 rounded mr-4">
                  <Layers className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-1">Beyond Specialization</h3>
                  <p className="text-gray-600">
                    While specialization is valuable, the most innovative solutions often come from combining insights across different domains. This approach helps you see connections that specialists might miss.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-100 p-2 rounded mr-4">
                  <ArrowRight className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-1">Adaptability Advantage</h3>
                  <p className="text-gray-600">
                    Professionals who understand multiple disciplines can pivot more easily as industries evolve. This flexibility is increasingly valuable in an unpredictable job market.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-xl mb-4 text-career-purple">Suggested Combinations</h3>
              <div className="space-y-3">
                <div className="flex items-center p-3 border border-gray-100 rounded-lg">
                  <div className="font-medium text-career-purple mr-2">Technology + Healthcare</div>
                  <div className="text-sm text-gray-600">Health informatics, medical devices, telemedicine</div>
                </div>
                <div className="flex items-center p-3 border border-gray-100 rounded-lg">
                  <div className="font-medium text-career-purple mr-2">Design + Psychology</div>
                  <div className="text-sm text-gray-600">UX research, behavior design, product development</div>
                </div>
                <div className="flex items-center p-3 border border-gray-100 rounded-lg">
                  <div className="font-medium text-career-purple mr-2">Business + Data Science</div>
                  <div className="text-sm text-gray-600">Business analytics, market research, strategic planning</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="font-semibold text-xl mb-4 text-center">How to Develop Multidisciplinary Knowledge</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-600 font-bold text-xl">1</span>
                </div>
                <h4 className="font-medium mb-2">Start With Your Core</h4>
                <p className="text-sm text-gray-600">Begin with a strong foundation in one area before branching out</p>
              </div>
              <div className="text-center p-4">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-600 font-bold text-xl">2</span>
                </div>
                <h4 className="font-medium mb-2">Identify Complementary Fields</h4>
                <p className="text-sm text-gray-600">Find disciplines that naturally connect with your primary expertise</p>
              </div>
              <div className="text-center p-4">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-600 font-bold text-xl">3</span>
                </div>
                <h4 className="font-medium mb-2">Apply Integrative Thinking</h4>
                <p className="text-sm text-gray-600">Practice combining insights from different domains to solve problems</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* First Principles Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-10">
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">First Principles Thinking</h2>
              <p className="text-gray-600 mb-6">
                First principles thinking is the practice of breaking down complex problems into their fundamental elements and 
                then reassembling them from the ground up. This approach is especially valuable when planning your career path.
              </p>
              
              <div className="space-y-6 mb-6">
                <div className="bg-amber-50 p-5 rounded-lg border border-amber-100">
                  <h3 className="font-semibold text-xl mb-2 text-amber-700">When Planning Your Career</h3>
                  <p className="text-gray-700">
                    Instead of following predefined career paths, first principles thinking encourages you to ask:
                  </p>
                  <ul className="mt-3 space-y-2">
                    <li className="flex items-start">
                      <div className="bg-amber-200 text-amber-800 w-6 h-6 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-1">?</div>
                      <span>What fundamental skills and knowledge create value in this field?</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-amber-200 text-amber-800 w-6 h-6 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-1">?</div>
                      <span>What problems need solving, regardless of how they've been approached in the past?</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-amber-200 text-amber-800 w-6 h-6 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-1">?</div>
                      <span>How can I apply my unique abilities to create the most impact?</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <p className="text-gray-600">
                By focusing on fundamentals rather than conventional wisdom, you can craft a career path that's both 
                innovative and resilient to changes in the job market.
              </p>
            </div>
            
            <div className="flex-1">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="font-semibold text-xl mb-4 text-center">Applying First Principles to Learning</h3>
                
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-medium text-career-purple mb-2">Identify Core Concepts</h4>
                    <p className="text-sm text-gray-600">
                      Focus on mastering the fundamental concepts that form the foundation of any field. These concepts rarely change even as technologies evolve.
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-medium text-career-purple mb-2">Question Assumptions</h4>
                    <p className="text-sm text-gray-600">
                      Challenge conventional career advice and paths. Ask "why" things are done a certain way and whether there might be better approaches.
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-medium text-career-purple mb-2">Build From Scratch</h4>
                    <p className="text-sm text-gray-600">
                      Once you understand the fundamentals, build your knowledge systematically, ensuring you truly understand each concept before moving forward.
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-medium text-career-purple mb-2">Connect Across Domains</h4>
                    <p className="text-sm text-gray-600">
                      Look for fundamental principles that apply across different fields. These connections often lead to the most innovative career opportunities.
                    </p>
                  </div>
                </div>
                
                <div className="mt-6 text-center">
                  <Link to="/library">
                    <Button variant="outline" className="border-career-purple text-career-purple hover:bg-career-light-purple">
                      Start Your Career Exploration
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Final CTA section */}
      <section className="bg-career-purple py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Plan Your Future Career?</h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Explore our comprehensive career library with detailed roadmaps, skill requirements, and learning resources
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/library">
              <Button size="lg" className="bg-white text-career-purple hover:bg-gray-100">
                <BookOpen className="mr-2 h-5 w-5" /> Browse Career Library
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <footer className="bg-white py-6 border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} FutureReadySchools.com | Career Explorer
              </p>
            </div>
            <div className="flex gap-8">
              <Link to="/" className="text-gray-600 hover:text-career-purple transition-colors">Home</Link>
              <Link to="/library" className="text-gray-600 hover:text-career-purple transition-colors">Career Library</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

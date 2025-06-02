
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowDown, CheckCircle, Star, Zap, Globe, Users, Building, Rocket, Heart, Megaphone, ShoppingBag, MapPin, Clock, Target, TrendingUp, Play, Mail, Phone, MapPin as Location } from 'lucide-react';
import DroneCanvas from '@/components/DroneCanvas';

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-blue-900/20 to-gray-800">
        {/* 3D Drone Animation - Only in Hero */}
        <DroneCanvas />
        
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-1 h-1 bg-blue-400 rounded-full animate-ping"></div>
          <div className="absolute bottom-40 left-1/4 w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-75"></div>
          <div className="absolute top-60 right-1/3 w-2 h-2 bg-cyan-300 rounded-full animate-ping delay-100"></div>
          <div className="absolute bottom-20 right-10 w-1 h-1 bg-blue-300 rounded-full animate-pulse delay-150"></div>
        </div>

        <div className="container mx-auto px-6 text-center z-10 relative">
          <div className="animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              The Ad-Project
            </h1>
            <h2 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight">
              Elevate Your Brand
            </h2>
            <h3 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              with the Power of the Skies
            </h3>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Next-gen advertising through synchronized drone shows and aerial tech. 
              Create unforgettable experiences that illuminate the night sky.
            </p>
            <Button 
              onClick={() => scrollToSection('cta')}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-12 py-6 text-xl rounded-full shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
            >
              <Rocket className="mr-3 h-6 w-6" />
              Book a Drone Show
            </Button>
          </div>
          
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="h-8 w-8 text-cyan-400" />
          </div>
        </div>
      </section>

      {/* What is Drone Advertising */}
      <section id="what-is" className="py-20 bg-gray-800/50 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              What is Drone Advertising?
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Revolutionary marketing technology that transforms hundreds of drones into a synchronized aerial canvas, 
              creating stunning 3D displays, logos, and even interactive QR codes in the night sky.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-cyan-500/20 p-3 rounded-full">
                  <Zap className="h-6 w-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-cyan-300">Synchronized Swarms</h3>
                  <p className="text-gray-400">Hundreds of drones move in perfect harmony, creating complex formations and animations.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-blue-500/20 p-3 rounded-full">
                  <Globe className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-blue-300">Sky QR Codes</h3>
                  <p className="text-gray-400">Interactive QR codes formed in the sky that audiences can scan with their phones.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-purple-500/20 p-3 rounded-full">
                  <Star className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-purple-300">3D Storytelling</h3>
                  <p className="text-gray-400">Transform your brand message into captivating aerial narratives that mesmerize audiences.</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 p-8 rounded-3xl border border-cyan-500/20">
                <div className="grid grid-cols-6 gap-2 mb-6">
                  {Array.from({ length: 30 }, (_, i) => (
                    <div 
                      key={i} 
                      className={`w-3 h-3 rounded-full animate-pulse ${
                        i % 3 === 0 ? 'bg-cyan-400' : i % 3 === 1 ? 'bg-blue-400' : 'bg-purple-400'
                      }`}
                      style={{ animationDelay: `${i * 0.1}s` }}
                    ></div>
                  ))}
                </div>
                <p className="text-center text-cyan-300 font-semibold">Live Drone Formation Simulation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Use Drone Advertising */}
      <section className="py-20 bg-gray-900 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Why Choose Drone Advertising?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-gray-800/50 border-green-500/20 hover:border-green-500/40 transition-all duration-300 hover:transform hover:scale-105">
              <CardHeader>
                <div className="bg-green-500/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-green-400" />
                </div>
                <CardTitle className="text-green-300">Eco-Friendly</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">100% sustainable alternative to fireworks. Zero pollution, reusable technology.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800/50 border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:transform hover:scale-105">
              <CardHeader>
                <div className="bg-cyan-500/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-cyan-400" />
                </div>
                <CardTitle className="text-cyan-300">High Engagement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">98% audience retention rate. Creates viral social media moments instantly.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800/50 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105">
              <CardHeader>
                <div className="bg-purple-500/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-purple-400" />
                </div>
                <CardTitle className="text-purple-300">Massive Visibility</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">Visible from up to 5 miles away. Reach thousands simultaneously.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800/50 border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:transform hover:scale-105">
              <CardHeader>
                <div className="bg-blue-500/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-blue-400" />
                </div>
                <CardTitle className="text-blue-300">Tech-Enabled</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">Interactive QR codes, app integration, real-time audience engagement.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Perfect for Every Occasion
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Heart, title: "Weddings & Events", description: "Create magical moments with personalized sky displays", color: "pink" },
              { icon: Rocket, title: "Brand Launches", description: "Launch products with unforgettable aerial spectacles", color: "cyan" },
              { icon: Megaphone, title: "Political Rallies", description: "Amplify your message across entire cities", color: "purple" },
              { icon: Building, title: "Smart City Promotions", description: "Showcase urban innovation with futuristic displays", color: "blue" },
              { icon: ShoppingBag, title: "Mall Activations", description: "Drive foot traffic with spectacular sky shows", color: "green" },
              { icon: Star, title: "Product Releases", description: "Generate buzz with exclusive preview events", color: "yellow" }
            ].map((useCase, index) => (
              <Card key={index} className={`bg-gray-800/50 border-${useCase.color}-500/20 hover:border-${useCase.color}-500/40 transition-all duration-300 hover:transform hover:scale-105 group`}>
                <CardHeader>
                  <div className={`bg-${useCase.color}-500/20 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:bg-${useCase.color}-500/30 transition-colors`}>
                    <useCase.icon className={`h-8 w-8 text-${useCase.color}-400`} />
                  </div>
                  <CardTitle className={`text-${useCase.color}-300 text-xl`}>{useCase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">{useCase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-900 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              How It Works
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Book Your Show", description: "Contact us with your vision and requirements", icon: Phone },
              { step: "02", title: "Strategy & Design", description: "Our team creates custom choreography for your brand", icon: Target },
              { step: "03", title: "Rehearsal & Testing", description: "Precise programming and safety testing of all drones", icon: Clock },
              { step: "04", title: "Show Day Magic", description: "Flawless execution of your aerial brand experience", icon: Star }
            ].map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-8">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <step.icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-purple-500 text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-cyan-300">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Benefits */}
      <section className="py-20 bg-gradient-to-b from-gray-900 via-blue-900/10 to-gray-800 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Sky High Returns
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Transform your marketing budget into unprecedented engagement and viral reach
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="bg-gray-800/50 border-green-500/20 hover:border-green-500/40 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-green-300 text-xl">Small Business Power</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-4">Single-drone banner flights over local areas. Perfect for gyms, restaurants, and local franchises.</p>
                <Badge variant="secondary" className="bg-green-500/20 text-green-300">Local Impact</Badge>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800/50 border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-cyan-300 text-xl">City-Wide Campaigns</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-4">Multi-drone night shows for mid-sized companies. Dominate urban skylines with your brand message.</p>
                <Badge variant="secondary" className="bg-cyan-500/20 text-cyan-300">Regional Reach</Badge>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800/50 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-purple-300 text-xl">National Spectacles</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-4">PAN-India synchronized shows with QR sky branding. Enterprise-level brand storytelling.</p>
                <Badge variant="secondary" className="bg-purple-500/20 text-purple-300">National Scale</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-800 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Success Stories
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="bg-gray-900/50 border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:transform hover:scale-105">
              <CardHeader>
                <CardTitle className="text-cyan-300">Mahindra Lifespaces</CardTitle>
                <CardDescription className="text-gray-400">Sky QR to Metaverse Portal</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">Created the world's first sky-to-metaverse experience, generating 10M+ social impressions and 500% increase in website traffic.</p>
                <Badge variant="secondary" className="bg-cyan-500/20 text-cyan-300">Innovation Leader</Badge>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-900/50 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105">
              <CardHeader>
                <CardTitle className="text-purple-300">Amaravati Drone Summit</CardTitle>
                <CardDescription className="text-gray-400">World Record Achievement</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">5,500 synchronized drones created a world record, establishing Amaravati as a global tech destination.</p>
                <Badge variant="secondary" className="bg-purple-500/20 text-purple-300">World Record</Badge>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-900/50 border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:transform hover:scale-105">
              <CardHeader>
                <CardTitle className="text-blue-300">Mercedes & Godrej</CardTitle>
                <CardDescription className="text-gray-400">Luxury Brand Storytelling</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">Premium aerial campaigns that elevated brand perception and generated exclusive media coverage worth ₹50 crores.</p>
                <Badge variant="secondary" className="bg-blue-500/20 text-blue-300">Luxury Tier</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

     {/* Pricing */}
<section className="py-20 bg-gray-900 relative z-10">
  <div className="container mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
        Investment Packages
      </h2>
    </div>

    <div className="grid lg:grid-cols-3 gap-8">
      {/* Starter Show */}
      <Card className="bg-gray-900 border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:transform hover:scale-105 group">
        <CardHeader>
          <CardTitle className="text-2xl text-cyan-300">Starter Show</CardTitle>
          <div className="text-4xl font-bold text-white mt-4">₹10L</div>
          <CardDescription className="text-gray-400">100 Drones</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-400 mr-2" />5-minute show duration</li>
            <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-400 mr-2" />Basic logo formations</li>
            <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-400 mr-2" />HD video recording</li>
            <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-400 mr-2" />Social media package</li>
          </ul>
        </CardContent>
      </Card>

      {/* Premium Experience */}
      <Card className="bg-gray-900 border-purple-500/40 hover:border-purple-500/60 transition-all duration-300 hover:transform hover:scale-105 group relative">
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <Badge className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-4 py-1">Most Popular</Badge>
        </div>
        <CardHeader>
          <CardTitle className="text-2xl text-purple-300">Premium Experience</CardTitle>
          <div className="text-4xl font-bold text-white mt-4">₹30L</div>
          <CardDescription className="text-gray-400">500 Drones</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-400 mr-2" />15-minute spectacular</li>
            <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-400 mr-2" />3D storytelling & animations</li>
            <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-400 mr-2" />Interactive QR codes</li>
            <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-400 mr-2" />4K multi-angle recording</li>
            <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-400 mr-2" />Full marketing support</li>
          </ul>
        </CardContent>
      </Card>

      {/* Enterprise Scale */}
      <Card className="bg-gray-900 border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300 hover:transform hover:scale-105 group">
        <CardHeader>
          <CardTitle className="text-2xl text-yellow-300">Enterprise Scale</CardTitle>
          <div className="text-4xl font-bold text-white mt-4">Custom</div>
          <CardDescription className="text-gray-400">1000+ Drones</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-400 mr-2" />Multi-city synchronized shows</li>
            <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-400 mr-2" />Custom choreography</li>
            <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-400 mr-2" />International coordination</li>
            <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-400 mr-2" />Dedicated project team</li>
            <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-400 mr-2" />Complete media production</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  </div>
</section>


     
                {/* Animated background effect */}
                <div className="absolute inset-0 opacity-20">
                  <div className="grid grid-cols-12 gap-1 h-full">
                    {Array.from({ length: 144 }, (_, i) => (
                      <div 
                        key={i} 
                        className="bg-cyan-400 animate-pulse"
                        style={{ animationDelay: `${i * 0.05}s` }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-20 bg-gradient-to-r from-gray-900 via-blue-900/20 to-purple-900/20 relative z-10">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Ready to Light Up the Sky?
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Transform your brand into an unforgettable aerial experience. 
              Join the revolution of next-generation advertising.
            </p>
            
            <div className="bg-gray-800/50 p-8 rounded-3xl border border-cyan-500/20 mb-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-cyan-300 mb-6">Get Your Custom Quote</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none"
                />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none"
                />
              </div>
              <input 
                type="text" 
                placeholder="Event Location" 
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none mb-6"
              />
              <Button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white py-4 text-lg rounded-lg shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300">
                <Rocket className="mr-3 h-6 w-6" />
                Book Your Drone Show Now
              </Button>
            </div>
            
            <div className="flex justify-center space-x-8 text-gray-400">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-cyan-400" />
                <span>+91 8050853225</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-cyan-400" />
                <span>inquiry@theadproject.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12 relative z-10">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
              SkyShows
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Pioneering the future of advertising through innovative drone technology. 
              Elevating brands to new heights, one show at a time.
            </p>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-500">
              © 2025 The Ad Project. All rights reserved. | Revolutionizing advertising through aerial innovation.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

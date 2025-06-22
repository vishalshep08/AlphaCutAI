import React from 'react';
import {
  Mail, Phone, MapPin, Zap, Shield, Globe, Users,
  Target, Eye, Cpu, CheckCircle, Star, Award, Sparkles,
  ArrowRight, Github, Twitter, Linkedin
} from 'lucide-react';

const AboutUs = () => {
  // Key features of the platform
  const features = [
    {
      icon: Cpu,
      title: "Advanced AI",
      description: "State-of-the-art deep learning models for pixel-perfect background detection",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Process thousands of images in seconds with our optimized AI engine",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Globe,
      title: "Developer Friendly",
      description: "Powerful REST API with comprehensive documentation and SDKs",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "End-to-end encryption with automatic image deletion after processing",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Users,
      title: "Any Device",
      description: "Fully responsive design works perfectly on desktop, tablet, and mobile",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Award,
      title: "Transparent Pricing",
      description: "Flexible plans with no hidden fees, perfect for individuals and teams",
      color: "from-pink-500 to-rose-500"
    }
  ];

  // Team members listed with their roles
  const teamMembers = [
    {
      name: "Vishal Shep",
      role: "Full-Stack Developer & Founder",
      description: "Visionary leader driving AI innovation in image processing",
      avatar: "VS"
    }
  ];

  // Company stats
  const stats = [
    { number: "100+", label: "Images Processed" },
    { number: "99.9%", label: "Accuracy Rate" },
    { number: "50+", label: "Happy Users" },
    { number: "<2s", label: "Processing Time" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">

      {/* Blurred background circles for aesthetic effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-pink-500/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-60 h-60 bg-blue-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative">

        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium mb-8 backdrop-blur-sm border border-purple-500/30">
              <Sparkles className="w-4 h-4" />
              AI-Powered Background Removal
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              About
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
                AlphaCut.AI
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
              Cutting-edge AI background removal for creators, professionals, and businesses.
              <span className="text-white font-semibold"> Fast. Reliable. Powerful.</span>
            </p>

            {/* Company Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400 text-sm sm:text-base">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who We Are Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Who We Are</h2>
                <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                  <p>
                    AlphaCut.AI is an AI-first image editing platform designed to make background removal
                    fast, effortless, and accurate. Whether you're a designer, photographer, store owner,
                    or developer, our tools empower you to create stunning visuals without manual effort.
                  </p>
                  <p>
                    Built by a team of passionate engineers, we're dedicated to
                    democratizing advanced image editing capabilities through cutting-edge artificial intelligence.
                  </p>
                </div>
              </div>

              {/* Mini Feature Grid */}
              <div className="relative">
                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-xl rounded-2xl border border-gray-700/50 p-8">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: CheckCircle, text: "AI-Powered" },
                      { icon: Zap, text: "Lightning Fast" },
                      { icon: Shield, text: "Secure" },
                      { icon: Globe, text: "Global" }
                    ].map((item, index) => (
                      <div key={index} className="flex flex-col items-center text-center p-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-3">
                          <item.icon className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-white font-medium">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">

              {/* Mission */}
              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-xl rounded-2xl border border-purple-500/20 p-6 sm:p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Our Mission</h3>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  To eliminate tedious manual editing and offer automated solutions that help people
                  bring their creative ideas to life, effortlessly. We believe technology should
                  empower creativity, not hinder it.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-xl rounded-2xl border border-blue-500/20 p-6 sm:p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Our Vision</h3>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  To become the world's most trusted AI assistant in image editing — empowering
                  digital creators at every level to achieve professional results instantly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Our Technology</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Powered by state-of-the-art deep learning models that detect and extract subjects
              with pixel-level precision across millions of diverse image samples.
            </p>

            {/* Tech Stats */}
            <div className="bg-gray-800/30 backdrop-blur-xl rounded-2xl border border-gray-700/50 p-6 sm:p-8 mb-12">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
                  <div className="text-gray-400">Accuracy Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-pink-400 mb-2">&lt;2s</div>
                  <div className="text-gray-400">Processing Time</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
                  <div className="text-gray-400">API Availability</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Why Choose AlphaCut.AI?</h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Experience the next generation of AI-powered image editing with features
                designed for modern workflows.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-gray-800/30 backdrop-blur-xl rounded-2xl border border-gray-700/50 p-6 hover:scale-105 transition-all duration-300 hover:border-purple-500/30"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Meet Our Team</h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                AlphaCut.AI is built and maintained by a passionate team of creators,
                engineers, and AI researchers dedicated to pushing the boundaries of what's possible.
              </p>
            </div>

            {/* Team Cards */}
            <div className="grid grid-cols-1 justify-center place-items-center gap-6 lg:gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-gray-800/30 backdrop-blur-xl rounded-2xl border border-gray-700/50 p-6 text-center hover:scale-105 transition-all duration-300 w-full max-w-sm"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                    {member.avatar}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-purple-400 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{member.description}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-cyan-500/10 backdrop-blur-xl rounded-3xl border border-gray-700/50 p-8 sm:p-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Get In Touch</h2>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                  Have questions, feedback, or partnership inquiries? We'd love to hear from you!
                  Our team is always ready to help.
                </p>
              </div>

              {/* Contact Info */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {[
                  { icon: MapPin, label: 'Office', value: 'Maharashtra, India' },
                  { icon: Mail, label: 'Email', value: 'support@alphacut.ai' },
                  { icon: Phone, label: 'Phone', value: '+91 9689541883' }
                ].map((contact, idx) => (
                  <div key={idx} className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <contact.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">{contact.label}</h4>
                    <p className="text-gray-300">{contact.value}</p>
                  </div>
                ))}
              </div>

              {/* CTA Buttons and Socials */}
              <div className="text-center">
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all flex items-center justify-center gap-2 group">
                    Contact Support
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="px-8 py-4 bg-gray-700/50 text-white rounded-xl font-semibold hover:bg-gray-600/50 transition-all border border-gray-600/50">
                    Partnership Inquiry
                  </button>
                </div>
                <div className="flex justify-center gap-6">
                  {[
                    { Icon: Github, href: "https://github.com/vishalshep08" },
                    { Icon: Twitter, href: "#" },
                    { Icon: Linkedin, href: "https://linkedin.com/in/vishal-shep" }
                  ].map(({ Icon, href }, index) => (
                    <a
                      key={index}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-700/50 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-600 transition-all"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Experience the Future?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Join thousands of creators who trust AlphaCut.AI for their image editing needs.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all flex items-center justify-center gap-2 mx-auto group">
              Get Started Free
              <Star className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;

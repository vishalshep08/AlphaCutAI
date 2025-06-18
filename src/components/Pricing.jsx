import React, { useContext, useState } from "react";
import { useAuth, useClerk } from "@clerk/clerk-react";
import { toast } from "react-hot-toast";
import { AppContext } from "../context/AppContext";
import { placeOrder } from "../service/OrderService";
import { Check, Star, Zap, Shield, Users, Crown, Sparkles, ArrowRight, Info } from "lucide-react";

const plans = [
  {
    id: "Basic",
    name: "Basic Package",
    price: 499,
    originalPrice: 699,
    credits: "100 credits",
    description: "Perfect for personal projects",
    popular: false,
    icon: Users,
    color: "from-blue-500 to-cyan-500",
    features: [
      "100 background removals",
      "HD quality exports",
      "Basic support",
      "Standard processing speed",
      "Personal use license"
    ],
    limitations: ["Watermark on free tier", "Limited file formats"]
  },
  {
    id: "Premium",
    name: "Premium Package",
    price: 899,
    originalPrice: 1299,
    credits: "250 credits",
    description: "Ideal for growing businesses",
    popular: true,
    icon: Crown,
    color: "from-purple-500 to-pink-500",
    features: [
      "250 background removals",
      "Ultra HD quality exports",
      "Priority support",
      "Fast processing speed",
      "Commercial use license",
      "Batch processing"
    ],
    limitations: []
  },
  {
    id: "Ultimate",
    name: "Ultimate Package",
    price: 1499,
    originalPrice: 2199,
    credits: "1000 credits",
    description: "Built for enterprise scale",
    popular: false,
    icon: Zap,
    color: "from-orange-500 to-red-500",
    features: [
      "1000 background removals",
      "Ultra HD + 4K exports",
      "24/7 dedicated support",
      "Lightning fast processing",
      "Enterprise license",
      "Unlimited batch processing",
      "Custom integrations",
      "Priority processing queue"
    ],
    limitations: []
  },
];

const Pricing = () => {
  const { isSignedIn, getToken, user } = useAuth();
  const { openSignIn } = useClerk();
  const { loadUserCredits, backendUrl } = useContext(AppContext);
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [isLoading, setIsLoading] = useState(false);

  const handleOrder = async (planId) => {
    if (!isSignedIn) {
      openSignIn();
      return;
    }

    setIsLoading(true);
    try {
      await placeOrder({
        planId,
        getToken,
        backendUrl,
        onSuccess: () => {
          toast.success("Order placed successfully!");
          loadUserCredits?.(); // Refresh user credits if applicable
        },
      });
    } catch (err) {
      const status = err.response?.status;
      const message = err.response?.data?.data || err.response?.data?.message || err.message;

      if (status === 409) {
        toast.error("You already purchased this plan.");
      } else if (status === 500 && message?.includes("Duplicate entry")) {
        toast.error("You already purchased this plan."); // Customized for DB conflict
      } else {
        toast.error(message || "Unexpected error occurred.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const calculateSavings = (price, originalPrice) => {
    return Math.round(((originalPrice - price) / originalPrice) * 100);
  };

  const getPriceByBilling = (price) => {
    return billingCycle === 'yearly' ? Math.round(price * 0.8) : price;
  };

  if (!isSignedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
        <div className="text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Please sign in to continue</h2>
          <button 
            className="px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors"
            onClick={() => openSignIn()}
          >
            Sign In
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 overflow-hidden rounded-lg">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-violet-500/10 to-transparent rounded-full"></div>
      </div>

      <div className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-purple-500/30">
              <Sparkles className="w-4 h-4" />
              Flexible Pricing Plans
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Choose Your Perfect
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Package
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Select from our carefully curated packages designed to meet your specific needs and budget. 
              Start free, scale as you grow.
            </p>

            {/* Billing Toggle */}
            <div className="inline-flex items-center bg-gray-800/50 backdrop-blur-sm rounded-full p-1 border border-gray-700/50">
              <button
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  billingCycle === 'monthly'
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white'
                }`}
                onClick={() => setBillingCycle('monthly')}
              >
                Monthly
              </button>
              <button
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all relative ${
                  billingCycle === 'yearly'
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white'
                }`}
                onClick={() => setBillingCycle('yearly')}
              >
                Yearly
                <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                  Save 20%
                </span>
              </button>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
            {plans.map((plan, index) => {
              const IconComponent = plan.icon;
              const savings = calculateSavings(plan.price, plan.originalPrice);
              const displayPrice = getPriceByBilling(plan.price);
              const displayOriginalPrice = plan.originalPrice ? getPriceByBilling(plan.originalPrice) : null;
              
              return (
                <div
                  key={plan.id}
                  className={`relative group ${
                    plan.popular 
                      ? 'scale-105 lg:scale-110 z-10' 
                      : 'hover:scale-105 z-0'
                  } transition-all duration-300`}
                >
                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
                        <Star className="w-4 h-4" />
                        Most Popular
                      </div>
                    </div>
                  )}

                  {/* Savings Badge */}
                  {savings > 0 && (
                    <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-3 py-1 rounded-full font-bold z-20">
                      Save {savings}%
                    </div>
                  )}

                  <div className={`relative h-full bg-gray-800/50 backdrop-blur-xl rounded-2xl border transition-all duration-300 ${
                    plan.popular
                      ? 'border-purple-500/50 shadow-2xl shadow-purple-500/20'
                      : 'border-gray-700/50 hover:border-purple-500/30 hover:shadow-xl hover:shadow-purple-500/10'
                  }`}>
                    {/* Card Header */}
                    <div className="p-6 sm:p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${plan.color}`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                          <p className="text-gray-400 text-sm">{plan.description}</p>
                        </div>
                      </div>

                      {/* Pricing */}
                      <div className="mb-6">
                        <div className="flex items-baseline gap-2 mb-2">
                          <span className="text-4xl sm:text-5xl font-bold text-white">
                            ₹{displayPrice}
                          </span>
                          {displayOriginalPrice && (
                            <span className="text-lg text-gray-500 line-through">
                              ₹{displayOriginalPrice}
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                          <span>{plan.credits}</span>
                          <Info className="w-4 h-4" />
                        </div>
                      </div>

                      {/* CTA Button */}
                      <button
                        className={`w-full py-4 px-6 rounded-xl font-semibold text-center transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed ${
                          plan.popular
                            ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl'
                            : 'bg-gray-700/50 hover:bg-gray-600/50 text-white border border-gray-600/50 hover:border-purple-500/50'
                        }`}
                        onClick={() => handleOrder(plan.id)}
                        disabled={isLoading}
                      >
                        {isLoading ? 'Processing...' : (plan.popular ? 'Get Started' : 'Choose Plan')}
                        {!isLoading && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                      </button>
                    </div>

                    {/* Features List */}
                    <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                      <div className="space-y-3">
                        {plan.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-3">
                            <div className="flex-shrink-0 w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center">
                              <Check className="w-3 h-3 text-green-400" />
                            </div>
                            <span className="text-gray-300 text-sm">{feature}</span>
                          </div>
                        ))}
                        {plan.limitations.map((limitation, limitIndex) => (
                          <div key={limitIndex} className="flex items-center gap-3 opacity-60">
                            <div className="flex-shrink-0 w-5 h-5 bg-gray-600/20 rounded-full flex items-center justify-center">
                              <span className="text-gray-500 text-xs">×</span>
                            </div>
                            <span className="text-gray-500 text-sm line-through">{limitation}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Feature Comparison */}
          <div className="bg-gray-800/30 backdrop-blur-xl rounded-2xl border border-gray-700/50 p-6 sm:p-8 mb-16">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Why Choose Our Platform?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Zap, title: "Lightning Fast", desc: "Process images in under 5 seconds" },
                { icon: Shield, title: "Secure & Private", desc: "Your data is encrypted and protected" },
                { icon: Star, title: "99.9% Accuracy", desc: "AI-powered precision cutting" },
                { icon: Users, title: "24/7 Support", desc: "Expert help when you need it" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl mb-4">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">{item.title}</h4>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-400 mb-6">
              Our team is here to help you choose the perfect plan for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-gray-700/50 text-white rounded-lg hover:bg-gray-600/50 transition-colors border border-gray-600/50">
                View FAQ
              </button>
              <button className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
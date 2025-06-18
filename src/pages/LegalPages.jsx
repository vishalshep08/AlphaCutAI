import React, { useState } from 'react';
import { FileText, Shield, Scale, ChevronRight, Home, Mail, Phone } from 'lucide-react';

const LegalPages = () => {
  const [activeTab, setActiveTab] = useState('privacy');

  const PrivacyPolicy = () => (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg border border-gray-200">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Shield className="w-8 h-8 text-purple-600" />
          <h1 className="text-4xl font-bold text-gray-900">Privacy Policy</h1>
        </div>
        <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
          <p><strong>Effective Date:</strong> January 1, 2025</p>
          <p><strong>Last Updated:</strong> January 1, 2025</p>
        </div>
      </div>

      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-purple-200 pb-2">1. Introduction</h2>
          <p className="text-gray-700 leading-relaxed">
            Welcome to AlphaCut.AI ("we," "our," or "us"). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered background removal service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-purple-200 pb-2">2. Information We Collect</h2>
          
          <div className="bg-blue-50 p-6 rounded-lg mb-4">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">2.1 Personal Information</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Account Information:</strong> Email address, username, password (encrypted)</li>
              <li><strong>Payment Information:</strong> Billing details, payment method information (processed securely through third-party payment processors)</li>
              <li><strong>Profile Information:</strong> Name, profile picture, preferences</li>
            </ul>
          </div>

          <div className="bg-green-50 p-6 rounded-lg mb-4">
            <h3 className="text-xl font-semibold text-green-800 mb-3">2.2 Usage Data</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Images:</strong> Photos you upload for background removal processing</li>
              <li><strong>Technical Data:</strong> IP address, browser type, device information, operating system</li>
              <li><strong>Usage Analytics:</strong> Pages visited, features used, time spent on platform</li>
              <li><strong>Performance Data:</strong> Processing times, success rates, error logs</li>
            </ul>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-purple-800 mb-3">2.3 Cookies and Tracking Technologies</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Essential cookies for website functionality</li>
              <li>Analytics cookies to improve our services</li>
              <li>Preference cookies to remember your settings</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-purple-200 pb-2">3. How We Use Your Information</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-800 mb-3">Service Provision</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>Process images using our AI technology</li>
                <li>Provide background removal and editing features</li>
                <li>Maintain and improve service quality</li>
                <li>Deliver processed images to you</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-800 mb-3">Account Management</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>Create and manage your account</li>
                <li>Process payments and billing</li>
                <li>Provide customer support</li>
                <li>Send service-related communications</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-purple-200 pb-2">4. Image Processing and AI Training</h2>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-4">
            <h3 className="text-xl font-semibold text-yellow-800 mb-3">🔒 Image Processing Security</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Images are processed using our proprietary AI technology</li>
              <li>Processing occurs on secure servers with enterprise-grade security</li>
              <li><strong>Original images are automatically deleted after 24 hours</strong></li>
              <li>Processed images are stored for 30 days for download access</li>
            </ul>
          </div>

          <div className="bg-red-50 border-l-4 border-red-400 p-6">
            <h3 className="text-xl font-semibold text-red-800 mb-3">🤖 AI Model Training</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>We may use anonymized, non-identifiable image data to improve our AI models</li>
              <li>Personal or identifiable content is removed before any training use</li>
              <li><strong>You can opt-out of AI training use in your account settings</strong></li>
              <li>Sensitive content (faces, personal documents) is never used for training</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-purple-200 pb-2">5. Your Rights and Choices</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Account Controls</h3>
              <ul className="space-y-2">
                <li>✓ Access and update your personal information</li>
                <li>✓ Download your processed images</li>
                <li>✓ Delete your account and associated data</li>
                <li>✓ Opt-out of marketing communications</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Data Protection Rights</h3>
              <ul className="space-y-2">
                <li>✓ Right to Access your data</li>
                <li>✓ Right to Rectification</li>
                <li>✓ Right to Erasure</li>
                <li>✓ Right to Data Portability</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-purple-200 pb-2">6. Contact Information</h2>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-700 mb-4">For privacy-related questions or concerns:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-purple-600" />
                <span><strong>Email:</strong> privacy@alphacut.ai</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-purple-600" />
                <span><strong>DPO:</strong> dpo@alphacut.ai</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );

  const TermsConditions = () => (
    <div className="max-w-4xl mx-auto p-8 bg-white max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg border border-gray-200">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Scale className="w-8 h-8 text-purple-600" />
          <h1 className="text-4xl font-bold text-gray-900">Terms and Conditions</h1>
        </div>
        <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
          <p><strong>Effective Date:</strong> January 1, 2025</p>
          <p><strong>Last Updated:</strong> January 1, 2025</p>
        </div>
      </div>

      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-purple-200 pb-2">1. Acceptance of Terms</h2>
          <p className="text-gray-700 leading-relaxed">
            By accessing or using AlphaCut.AI ("Service," "Platform," "we," "us," or "our"), you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree to these Terms, please do not use our Service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-purple-200 pb-2">2. Description of Service</h2>
          <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-6 rounded-lg">
            <p className="text-gray-700 mb-4">AlphaCut.AI is an AI-powered image editing platform that provides:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Automated background removal from images</li>
              <li>High-quality image processing capabilities</li>
              <li>Various export formats and resolutions</li>
              <li>Additional editing tools and features</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-purple-200 pb-2">3. Subscription Plans and Payments</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Basic Package</h3>
              <div className="text-3xl font-bold text-blue-600 mb-2">₹499</div>
              <p className="text-sm text-blue-600 mb-4">per month</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>✓ 100 credits</li>
                <li>✓ HD quality exports</li>
                <li>✓ Basic support</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 border-2 border-purple-300 p-6 rounded-lg relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                Most Popular
              </div>
              <h3 className="text-xl font-semibold text-purple-800 mb-3">Premium Package</h3>
              <div className="text-3xl font-bold text-purple-600 mb-2">₹899</div>
              <p className="text-sm text-purple-600 mb-4">per month</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>✓ 250 credits</li>
                <li>✓ Ultra HD exports</li>
                <li>✓ Priority support</li>
              </ul>
            </div>
            
            <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-orange-800 mb-3">Ultimate Package</h3>
              <div className="text-3xl font-bold text-orange-600 mb-2">₹1499</div>
              <p className="text-sm text-orange-600 mb-4">per month</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>✓ 1000 credits</li>
                <li>✓ Enterprise features</li>
                <li>✓ 24/7 dedicated support</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
            <h3 className="text-xl font-semibold text-yellow-800 mb-3">Payment Terms</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Subscriptions are billed monthly or annually in advance</li>
              <li>All fees are non-refundable except as required by law</li>
              <li>Prices may change with 30 days notice</li>
              <li>Failed payments may result in service suspension</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-purple-200 pb-2">4. Acceptable Use Policy</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 border-l-4 border-green-400 p-6">
              <h3 className="text-xl font-semibold text-green-800 mb-3">✅ Permitted Uses</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Personal and commercial image editing</li>
                <li>Creating content for legitimate business purposes</li>
                <li>Educational and research activities</li>
                <li>Non-commercial creative projects</li>
              </ul>
            </div>
            
            <div className="bg-red-50 border-l-4 border-red-400 p-6">
              <h3 className="text-xl font-semibold text-red-800 mb-3">❌ Prohibited Uses</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Illegal, harmful, or offensive content</li>
                <li>Copyrighted material without authorization</li>
                <li>Pornographic or sexually explicit content</li>
                <li>Personal identification documents</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-purple-200 pb-2">5. Service Limitations</h2>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Technical Limits</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>Images must not exceed 10MB in size</li>
                  <li>Supported formats: JPG, PNG, WEBP, GIF</li>
                  <li>Maximum resolution: 8K for Premium users</li>
                  <li>Batch processing limits apply</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Service Level</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>We strive for 99.9% uptime</li>
                  <li>Processing times may vary</li>
                  <li>Premium users get priority processing</li>
                  <li>Maintenance windows may affect availability</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-purple-200 pb-2">6. Contact Information</h2>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-700 mb-4">For questions about these Terms:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-purple-600" />
                <span><strong>Legal:</strong> legal@alphacut.ai</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-purple-600" />
                <span><strong>Support:</strong> support@alphacut.ai</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 rounded-lg overflow-hidden">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="text-xl font-bold">
                <span className="text-gray-900">Alpha</span>
                <span className="text-purple-600">Cut.AI</span>
              </span>
            </div>
            <nav className="flex items-center gap-6">
              <a href="/" className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors">
                <Home className="w-4 h-4" />
                Home
              </a>
              <button 
                onClick={() => setActiveTab('privacy')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeTab === 'privacy' 
                    ? 'bg-purple-100 text-purple-700' 
                    : 'text-gray-600 hover:text-purple-600'
                }`}
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => setActiveTab('terms')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeTab === 'terms' 
                    ? 'bg-purple-100 text-purple-700' 
                    : 'text-gray-600 hover:text-purple-600'
                }`}
              >
                Terms & Conditions
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Tab Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab('privacy')}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'privacy'
                  ? 'border-purple-500 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                Privacy Policy
              </div>
            </button>
            <button
              onClick={() => setActiveTab('terms')}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'terms'
                  ? 'border-purple-500 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center gap-2">
                <Scale className="w-4 h-4" />
                Terms & Conditions
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="py-8">
        {activeTab === 'privacy' ? <PrivacyPolicy /> : <TermsConditions />}
      </main>
    </div>
  );
};

export default LegalPages;
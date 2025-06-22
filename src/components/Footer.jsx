import { Link } from 'react-router-dom';
import assets from "../assets/assets";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-gradient-to-br from-gray-50 to-gray-100 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10">
          
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <img src={assets.logo} alt="AlphaCut.AI Logo" className="w-9 h-9" />
              <span className="text-xl font-bold text-gray-900">AlphaCut.AI</span>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed">
              Remove backgrounds from images instantly with AI-powered precision. 
              Perfect for e-commerce, social media, and professional photography.
            </p>

            <div className="space-y-1">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Supported Formats
              </p>
              <div className="flex flex-wrap gap-2">
                {["JPG", "PNG", "WEBP", "HEIC", "GIF"].map(format => (
                  <span
                    key={format}
                    className="px-2 py-1 bg-white border border-gray-200 rounded text-xs font-medium text-gray-700"
                  >
                    {format}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-3 pt-3 flex-wrap">
              {[
                {
                  link: "https://linkedin.com",
                  icon: "https://img.icons8.com/fluent/48/000000/linkedin-2.png",
                  alt: "LinkedIn",
                },
                {
                  link: "https://instagram.com",
                  icon: "https://img.icons8.com/fluent/48/000000/instagram-new.png",
                  alt: "Instagram",
                },
                {
                  link: "https://twitter.com",
                  icon: "https://img.icons8.com/fluent/48/000000/twitter.png",
                  alt: "Twitter",
                },
                {
                  link: "https://youtube.com",
                  icon: "https://img.icons8.com/fluent/48/000000/youtube-play.png",
                  alt: "YouTube",
                },
              ].map(({ link, icon, alt }) => (
                <a
                  key={link}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white border border-gray-200 rounded-lg flex items-center justify-center hover:bg-indigo-50 transition duration-200"
                  aria-label={alt}
                >
                  <img src={icon} alt={alt} className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {[
            {
              title: "Product",
              links: [
                { name: "Background Remover", href: "/" },
                { name: "Batch Processing", href: "/batch" },
                { name: "API Access", href: "/api" },
                { name: "Mobile App", href: "/mobile" },
              ],
            },
            {
              title: "Resources",
              links: [
                { name: "How it Works", href: "/how-it-works" },
                { name: "Tutorials", href: "/tutorials" },
                { name: "Blog", href: "/blog" },
                { name: "Image Formats", href: "/formats" },
              ],
            },
            {
              title: "Support",
              links: [
                { name: "Help Center", href: "/aboutus" },
                { name: "Contact Us", href: "/aboutus" },
                { name: "FAQ", href: "/legalpages" },
                { name: "System Status", href: "/status" },
              ],
            },
            {
              title: "Company",
              links: [
                { name: "About Us", href: "/aboutus" },
                { name: "Pricing", href: "/pricing" },
                { name: "Privacy Policy", href: "/legalpages" },
                { name: "Terms of Service", href: "/legalpages" },
              ],
            },
          ].map(({ title, links }) => (
            <div key={title} className="space-y-3">
              <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">{title}</h4>
              <ul className="space-y-2">
                {links.map(({ name, href }) => (
                  <li key={name}>
                    <Link
                      to={href}
                      className="text-sm text-gray-600 hover:text-indigo-600 transition-colors block"
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                icon: <span className="text-green-600 font-bold text-sm">AI</span>,
                title: "AI-Powered",
                desc: "Advanced algorithms",
              },
              {
                icon: <span className="text-blue-600 text-lg">⚡</span>,
                title: "Lightning Fast",
                desc: "Process in seconds",
              },
              {
                icon: <span className="text-purple-600 text-lg">🔒</span>,
                title: "Secure",
                desc: "Privacy protected",
              },
              {
                icon: <span className="text-orange-600 text-lg">📱</span>,
                title: "Any Device",
                desc: "Works everywhere",
              },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                  {icon}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{title}</p>
                  <p className="text-xs text-gray-600">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            
            <p className="text-sm text-gray-600 text-center sm:text-left">
              &copy; {new Date().getFullYear()} alphacutai.vercel.app by{" "}
              <span className="font-semibold text-gray-900">Vishal Shep</span>
            </p>

            <div className="flex items-center gap-4">
              <select className="text-sm border border-gray-200 rounded px-3 py-1 bg-white text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <option value="en">US English</option>
                <option value="hi">IND Hindi</option>
                <option value="mr">IND Marathi</option>
                <option value="ja">JPN Japanese</option>
              </select>

              <button
                onClick={scrollToTop}
                className="text-sm text-indigo-600 hover:text-indigo-700 font-medium flex items-center gap-1 group"
              >
                Back to top
                <span className="group-hover:-translate-y-0.5 transition-transform">↑</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Phone } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full bg-white dark:bg-[#121212] border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50 backdrop-blur-sm bg-white/95 dark:bg-[#121212]/95">
      <div className="max-w-[1240px] mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="block">
              <img 
                src="/images/logo.png" 
                alt="SOHUB Connect Logo" 
                className="w-40 h-24 object-contain cursor-pointer"
              />
            </a>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('features');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="font-inter text-sm font-medium text-[#525252] dark:text-white dark:text-opacity-70 hover:text-[#22C55E] dark:hover:text-[#22C55E] transition-colors duration-200 cursor-pointer"
            >
              Features
            </a>
            <a
              href="#pricing"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('pricing');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="font-inter text-sm font-medium text-[#525252] dark:text-white dark:text-opacity-70 hover:text-[#22C55E] dark:hover:text-[#22C55E] transition-colors duration-200 cursor-pointer"
            >
              Pricing
            </a>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('about');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="font-inter text-sm font-medium text-[#525252] dark:text-white dark:text-opacity-70 hover:text-[#22C55E] dark:hover:text-[#22C55E] transition-colors duration-200 cursor-pointer"
            >
              About
            </a>
            <a
              href="https://connect.sohub.com.bd/authentication"
              target="_blank"
              rel="noopener noreferrer"
              className="font-inter text-sm font-medium text-[#525252] dark:text-white dark:text-opacity-70 hover:text-[#22C55E] dark:hover:text-[#22C55E] transition-colors duration-200"
            >
              Dashboard
            </a>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <a
              href="https://connect.sohub.com.bd/authentication"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-2.5 rounded-full bg-[#22C55E] text-white font-inter font-semibold text-sm hover:bg-[#16A34A] active:bg-[#15803D] active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#22C55E] focus:ring-opacity-50"
            >
              Start Free
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

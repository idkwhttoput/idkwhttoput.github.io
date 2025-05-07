import { FaGithub, FaLinkedin, FaTwitter, FaDribbble } from "react-icons/fa";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export default function Footer() {
  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: <FaGithub className="text-xl" />, href: "https://github.com", label: "GitHub" },
    { icon: <FaLinkedin className="text-xl" />, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: <FaTwitter className="text-xl" />, href: "https://twitter.com", label: "Twitter" },
    { icon: <FaDribbble className="text-xl" />, href: "https://dribbble.com", label: "Dribbble" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold">John Doe</a>
            <p className="text-gray-400 mt-2">Full-Stack Developer</p>
          </div>
          
          <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-8 mb-6 md:mb-0">
            {navLinks.map((link) => (
              <a 
                key={link.label}
                href={link.href} 
                className="text-gray-300 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          
          <div className="flex space-x-4 items-center">
            {socialLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
            <div className="ml-2 text-gray-300">
              <ThemeToggle />
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} John Doe. All rights reserved.</p>
          <p className="text-gray-400 mt-2 md:mt-0">Made with <span className="text-red-500">❤</span> in San Francisco</p>
        </div>
      </div>
    </footer>
  );
}

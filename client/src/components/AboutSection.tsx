import { FaGithub, FaLinkedin, FaTwitter, FaDribbble } from "react-icons/fa";

export default function AboutSection() {
  const socialLinks = [
    { icon: <FaGithub className="text-2xl" />, href: "https://github.com", label: "GitHub" },
    { icon: <FaLinkedin className="text-2xl" />, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: <FaTwitter className="text-2xl" />, href: "https://twitter.com", label: "Twitter" },
    { icon: <FaDribbble className="text-2xl" />, href: "https://dribbble.com", label: "Dribbble" },
  ];

  const personalInfo = [
    { label: "Email", value: "hello@johndoe.com" },
    { label: "Location", value: "San Francisco, CA" },
    { label: "Education", value: "MIT, Computer Science" },
    { label: "Experience", value: "5+ Years" },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white dark:bg-gray-900 section-transition">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white">About Me</h2>
        
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=800" 
              alt="My workspace" 
              className="rounded-lg shadow-lg w-full h-auto border border-gray-200 dark:border-gray-700" 
            />
          </div>
          
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">My Journey</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              With over 5 years of experience in web development, I've had the opportunity to work on diverse projects ranging from e-commerce platforms to complex web applications. My passion lies in creating clean, efficient, and user-friendly solutions.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              I graduated with a Computer Science degree from MIT and have since worked with startups and established companies alike, helping them achieve their digital goals through thoughtful planning and execution.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              {personalInfo.map((info, index) => (
                <div key={index}>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">{info.label}</h4>
                  <p className="text-gray-600 dark:text-gray-300">{info.value}</p>
                </div>
              ))}
            </div>
            
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

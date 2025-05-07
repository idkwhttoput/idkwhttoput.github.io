import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section id="home" className="pt-24 md:pt-32 pb-16 md:pb-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-white">
              Hello, I'm 
              <span className="text-primary"> John Doe</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6">Full-Stack Developer</h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 leading-relaxed">
              I build exceptional digital experiences with a focus on accessibility, performance, and beautiful design.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                asChild
                className="bg-primary hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                <a href="#projects">View My Work</a>
              </Button>
              <Button 
                asChild
                variant="outline"
                className="bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-primary border border-primary font-medium py-3 px-6 rounded-lg transition-colors"
              >
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </div>
          <div className="w-full md:w-2/5">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800" 
              alt="John Doe portrait" 
              className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover mx-auto shadow-lg border-4 border-white dark:border-gray-700" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}

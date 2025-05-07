import { useQuery } from "@tanstack/react-query";
import { FaGithub, FaArrowRight } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Project } from "@shared/schema";

export default function ProjectsSection() {
  const { data: projects, isLoading } = useQuery<Project[]>({
    queryKey: ["/api/projects"],
  });

  return (
    <section id="projects" className="py-16 md:py-24 bg-gray-50 section-transition">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">My Projects</h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-16">
          Here are some of the projects I've worked on. Each project represents different challenges and solutions.
        </p>
        
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="bg-white rounded-lg overflow-hidden shadow-md animate-pulse">
                <div className="w-full h-64 bg-gray-200" />
                <CardContent className="p-6">
                  <div className="h-6 bg-gray-200 rounded mb-4 w-3/4" />
                  <div className="h-4 bg-gray-200 rounded mb-2 w-full" />
                  <div className="h-4 bg-gray-200 rounded mb-2 w-full" />
                  <div className="h-4 bg-gray-200 rounded mb-4 w-2/3" />
                  <div className="flex flex-wrap gap-2 mb-4">
                    {[1, 2, 3].map((j) => (
                      <div key={j} className="h-6 bg-gray-200 rounded-full w-16" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects?.map((project) => (
              <Card key={project.id} className="bg-white rounded-lg overflow-hidden shadow-md card-hover">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-64 object-cover" 
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <Badge 
                        key={index} 
                        variant="secondary"
                        className={`px-3 py-1 rounded-full text-sm ${
                          tech.startsWith('React') ? 'bg-blue-100 text-blue-800' : 
                          tech.startsWith('Node') ? 'bg-green-100 text-green-800' : 
                          tech.startsWith('Vue') ? 'bg-yellow-100 text-yellow-800' :
                          tech.startsWith('D3') ? 'bg-red-100 text-red-800' :
                          tech.startsWith('Graph') ? 'bg-green-100 text-green-800' :
                          tech.startsWith('React Native') ? 'bg-blue-100 text-blue-800' :
                          tech.startsWith('MongoDB') ? 'bg-purple-100 text-purple-800' :
                          tech.startsWith('Firebase') ? 'bg-blue-100 text-blue-800' :
                          tech.startsWith('AWS') ? 'bg-gray-100 text-gray-800' :
                          'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex justify-between">
                    <a href={project.demoUrl} className="text-primary hover:text-blue-700 font-medium transition-colors">
                      View Project
                    </a>
                    <a href={project.githubUrl} className="text-gray-600 hover:text-gray-800 transition-colors">
                      <FaGithub className="text-xl" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
        
        <div className="text-center mt-12">
          <a href="#" className="inline-flex items-center gap-2 text-primary hover:text-blue-700 font-medium transition-colors">
            View All Projects
            <FaArrowRight className="ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
}

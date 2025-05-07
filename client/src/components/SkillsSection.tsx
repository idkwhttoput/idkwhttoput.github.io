import { useQuery } from "@tanstack/react-query";
import { SkillBar } from "@/components/ui/skill-bar";
import { Badge } from "@/components/ui/badge";
import { SkillCategory } from "@shared/schema";

export default function SkillsSection() {
  const { data: skillCategories, isLoading } = useQuery<SkillCategory[]>({
    queryKey: ["/api/skills"],
  });

  return (
    <section id="skills" className="py-16 md:py-24 bg-white section-transition">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">My Skills</h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-16">
          I've worked with a variety of technologies and continue to expand my knowledge daily.
        </p>
        
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[1, 2].map((cat) => (
              <div key={cat} className="animate-pulse">
                <div className="h-8 bg-gray-200 w-1/2 mb-6 rounded" />
                {[1, 2, 3, 4].map((skill) => (
                  <div key={skill} className="mb-6">
                    <div className="flex justify-between mb-2">
                      <div className="h-4 bg-gray-200 w-1/3 rounded" />
                      <div className="h-4 bg-gray-200 w-12 rounded" />
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-gray-300 rounded-full h-2.5 w-3/4" />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {skillCategories?.map((category) => (
              <div key={category.id}>
                <h3 className="text-xl font-bold mb-6 pb-2 border-b border-gray-200">
                  {category.name}
                </h3>
                
                {category.skills.map((skill) => (
                  <SkillBar 
                    key={skill.id}
                    name={skill.name}
                    percentage={skill.percentage}
                    color={category.name.includes("Frontend") ? "primary" : "accent"}
                  />
                ))}
              </div>
            ))}
          </div>
        )}
        
        <div className="mt-16">
          <h3 className="text-xl font-bold mb-6 text-center">Other Skills & Tools</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {isLoading ? (
              Array(10).fill(0).map((_, index) => (
                <div key={index} className="px-4 py-2 bg-gray-200 rounded-lg w-20 h-10 animate-pulse" />
              ))
            ) : (
              skillCategories?.find(cat => cat.name === "Other Skills & Tools")?.skills.map((tool) => (
                <Badge key={tool.id} variant="outline" className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg">
                  {tool.name}
                </Badge>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

import { db } from "./index";
import * as schema from "@shared/schema";

const projects = [
  {
    title: "E-commerce Platform",
    description: "A fully responsive e-commerce platform with product filtering, user authentication, and payment integration.",
    imageUrl: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    demoUrl: "#",
    githubUrl: "https://github.com",
    technologies: ["React", "Node.js", "MongoDB"],
    featured: true,
  },
  {
    title: "Analytics Dashboard",
    description: "Real-time analytics dashboard with customizable widgets, data visualization, and export features.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    demoUrl: "#",
    githubUrl: "https://github.com",
    technologies: ["Vue.js", "D3.js", "Firebase"],
    featured: true,
  },
  {
    title: "Fitness Tracking App",
    description: "Mobile application for tracking workouts, nutrition, and fitness progress with social features.",
    imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    demoUrl: "#",
    githubUrl: "https://github.com",
    technologies: ["React Native", "GraphQL", "AWS"],
    featured: true,
  }
];

const skillCategories = [
  {
    name: "Frontend Development",
    order: 1,
    skills: [
      { name: "JavaScript / TypeScript", percentage: 95, order: 1 },
      { name: "React / Vue.js", percentage: 90, order: 2 },
      { name: "HTML5 / CSS3", percentage: 98, order: 3 },
      { name: "Tailwind / SASS", percentage: 85, order: 4 },
    ]
  },
  {
    name: "Backend Development",
    order: 2,
    skills: [
      { name: "Node.js / Express", percentage: 92, order: 1 },
      { name: "Python / Django", percentage: 80, order: 2 },
      { name: "SQL / NoSQL Databases", percentage: 88, order: 3 },
      { name: "GraphQL / REST APIs", percentage: 85, order: 4 },
    ]
  },
  {
    name: "Other Skills & Tools",
    order: 3,
    skills: [
      { name: "Git", percentage: 90, order: 1 },
      { name: "Docker", percentage: 85, order: 2 },
      { name: "AWS", percentage: 80, order: 3 },
      { name: "Figma", percentage: 75, order: 4 },
      { name: "Jest", percentage: 85, order: 5 },
      { name: "CI/CD", percentage: 80, order: 6 },
      { name: "Webpack", percentage: 70, order: 7 },
      { name: "Redux", percentage: 85, order: 8 },
      { name: "Firebase", percentage: 80, order: 9 },
      { name: "WordPress", percentage: 70, order: 10 },
    ]
  }
];

async function seed() {
  try {
    console.log("Starting to seed database...");

    // Seed projects
    console.log("Seeding projects...");
    const existingProjects = await db.query.projects.findMany();
    
    if (existingProjects.length === 0) {
      for (const project of projects) {
        await db.insert(schema.projects).values(project);
      }
      console.log("Projects seeded successfully");
    } else {
      console.log("Projects already exist, skipping seeding");
    }

    // Seed skill categories and skills
    console.log("Seeding skill categories and skills...");
    const existingCategories = await db.query.skillCategories.findMany();
    
    if (existingCategories.length === 0) {
      for (const category of skillCategories) {
        const [insertedCategory] = await db.insert(schema.skillCategories)
          .values({
            name: category.name,
            order: category.order
          })
          .returning();
        
        const categoryId = insertedCategory.id;
        
        // Insert skills for this category
        for (const skill of category.skills) {
          await db.insert(schema.skills)
            .values({
              name: skill.name,
              percentage: skill.percentage,
              categoryId: categoryId,
              order: skill.order
            });
        }
      }
      console.log("Skill categories and skills seeded successfully");
    } else {
      console.log("Skill categories already exist, skipping seeding");
    }

    console.log("Seed completed successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
}

seed();

import { db } from "@db";
import { 
  projects, 
  skillCategories, 
  skills, 
  contactMessages,
  type Project,
  type SkillCategory,
  type ContactMessageInsert,
  type ContactMessage
} from "@shared/schema";
import { eq, desc } from "drizzle-orm";

export const storage = {
  // Projects
  async getAllProjects(): Promise<Project[]> {
    return await db.query.projects.findMany({
      orderBy: desc(projects.createdAt)
    });
  },

  async getFeaturedProjects(): Promise<Project[]> {
    return await db.query.projects.findMany({
      where: eq(projects.featured, true),
      orderBy: desc(projects.createdAt)
    });
  },

  // Skills
  async getAllSkillsWithCategories(): Promise<SkillCategory[]> {
    return await db.query.skillCategories.findMany({
      orderBy: skillCategories.order,
      with: {
        skills: {
          orderBy: skills.order
        }
      }
    });
  },

  // Contact
  async saveContactMessage(messageData: ContactMessageInsert): Promise<ContactMessage> {
    const [result] = await db.insert(contactMessages)
      .values(messageData)
      .returning();
    
    return result;
  },

  async getAllContactMessages(): Promise<ContactMessage[]> {
    return await db.query.contactMessages.findMany({
      orderBy: desc(contactMessages.createdAt)
    });
  },

  async markContactMessageAsRead(id: number): Promise<void> {
    await db.update(contactMessages)
      .set({ read: true })
      .where(eq(contactMessages.id, id));
  }
};

import { pgTable, text, serial, integer, boolean, json, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
import { relations } from "drizzle-orm";

// Users table (already exists)
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Projects table
export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  imageUrl: text("image_url").notNull(),
  demoUrl: text("demo_url").notNull(),
  githubUrl: text("github_url").notNull(),
  technologies: json("technologies").$type<string[]>().notNull(),
  featured: boolean("featured").default(false).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const projectsInsertSchema = createInsertSchema(projects, {
  title: (schema) => schema.min(2, "Title must be at least 2 characters"),
  description: (schema) => schema.min(10, "Description must be at least 10 characters"),
  technologies: z.array(z.string()),
});

export type ProjectInsert = z.infer<typeof projectsInsertSchema>;
export type Project = typeof projects.$inferSelect;

// Skills category table
export const skillCategories = pgTable("skill_categories", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  order: integer("order").notNull(),
});

export const skillCategoriesInsertSchema = createInsertSchema(skillCategories, {
  name: (schema) => schema.min(2, "Category name must be at least 2 characters"),
});

export type SkillCategoryInsert = z.infer<typeof skillCategoriesInsertSchema>;
export type SkillCategoryBase = typeof skillCategories.$inferSelect;

// Skills table
export const skills = pgTable("skills", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  percentage: integer("percentage").notNull(),
  categoryId: integer("category_id").references(() => skillCategories.id).notNull(),
  order: integer("order").notNull(),
});

export const skillsInsertSchema = createInsertSchema(skills, {
  name: (schema) => schema.min(2, "Skill name must be at least 2 characters"),
  percentage: (schema) => schema.min(0).max(100, "Percentage must be between 0 and 100"),
});

export type SkillInsert = z.infer<typeof skillsInsertSchema>;
export type Skill = typeof skills.$inferSelect;

// Contact messages table
export const contactMessages = pgTable("contact_messages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  subject: text("subject"),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  read: boolean("read").default(false).notNull(),
});

export const contactMessagesInsertSchema = createInsertSchema(contactMessages, {
  name: (schema) => schema.min(2, "Name must be at least 2 characters"),
  email: (schema) => schema.email("Please enter a valid email address"),
  message: (schema) => schema.min(10, "Message must be at least 10 characters"),
});

export type ContactMessageInsert = z.infer<typeof contactMessagesInsertSchema>;
export type ContactMessage = typeof contactMessages.$inferSelect;

// Relations
export const skillsCategoriesRelations = relations(skillCategories, ({ many }) => ({
  skills: many(skills),
}));

export const skillsRelations = relations(skills, ({ one }) => ({
  category: one(skillCategories, {
    fields: [skills.categoryId],
    references: [skillCategories.id],
  }),
}));

// Type with relations
export interface SkillCategory extends SkillCategoryBase {
  skills: Skill[];
}

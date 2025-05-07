import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import { contactMessagesInsertSchema } from "@shared/schema";
import { ZodError } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  const apiPrefix = "/api";

  // Get all projects
  app.get(`${apiPrefix}/projects`, async (req, res) => {
    try {
      const projects = await storage.getAllProjects();
      res.json(projects);
    } catch (error) {
      console.error("Error fetching projects:", error);
      res.status(500).json({ message: "Failed to fetch projects" });
    }
  });

  // Get featured projects
  app.get(`${apiPrefix}/projects/featured`, async (req, res) => {
    try {
      const featuredProjects = await storage.getFeaturedProjects();
      res.json(featuredProjects);
    } catch (error) {
      console.error("Error fetching featured projects:", error);
      res.status(500).json({ message: "Failed to fetch featured projects" });
    }
  });

  // Get all skill categories with skills
  app.get(`${apiPrefix}/skills`, async (req, res) => {
    try {
      const skillCategories = await storage.getAllSkillsWithCategories();
      res.json(skillCategories);
    } catch (error) {
      console.error("Error fetching skills:", error);
      res.status(500).json({ message: "Failed to fetch skills" });
    }
  });

  // Submit contact form
  app.post(`${apiPrefix}/contact`, async (req, res) => {
    try {
      const contactData = contactMessagesInsertSchema.parse(req.body);
      const result = await storage.saveContactMessage(contactData);
      res.status(201).json({ success: true, message: "Message sent successfully" });
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ 
          message: "Validation failed", 
          errors: error.errors 
        });
      } else {
        console.error("Error saving contact message:", error);
        res.status(500).json({ message: "Failed to send message" });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}

import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaTwitter, FaDribbble } from "react-icons/fa";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { ContactMessage } from "@shared/schema";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormValues) => {
      return await apiRequest("POST", "/api/contact", data as ContactMessage);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thanks for your message! I'll get back to you soon.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error sending message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
    onSettled: () => {
      setIsSubmitting(false);
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    setIsSubmitting(true);
    contactMutation.mutate(data);
  };

  const contactInfo = [
    { 
      icon: <FaMapMarkerAlt className="text-xl mt-1 text-primary" />,
      title: "Location",
      content: "San Francisco, California" 
    },
    { 
      icon: <FaEnvelope className="text-xl mt-1 text-primary" />,
      title: "Email",
      content: "hello@johndoe.com" 
    },
    { 
      icon: <FaPhone className="text-xl mt-1 text-primary" />,
      title: "Phone",
      content: "+1 (123) 456-7890" 
    },
  ];

  const socialLinks = [
    { icon: <FaGithub className="text-2xl" />, href: "https://github.com", label: "GitHub" },
    { icon: <FaLinkedin className="text-2xl" />, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: <FaTwitter className="text-2xl" />, href: "https://twitter.com", label: "Twitter" },
    { icon: <FaDribbble className="text-2xl" />, href: "https://dribbble.com", label: "Dribbble" },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50 section-transition">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Get In Touch</h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-16">
          Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
        </p>
        
        <div className="flex flex-col md:flex-row gap-12">
          <div className="w-full md:w-1/2">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your name" 
                          {...field}
                          className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input 
                          type="email" 
                          placeholder="Your email address" 
                          {...field}
                          className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Subject of your message" 
                          {...field}
                          className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Your message" 
                          {...field}
                          rows={5}
                          className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="bg-primary hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-colors w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </div>
          
          <div className="w-full md:w-1/2">
            <div className="bg-white p-8 rounded-lg shadow-md h-full">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="text-primary text-xl mt-1">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">{info.title}</h4>
                      <p className="text-gray-600">{info.content}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-10">
                <h4 className="font-medium text-gray-800 mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((link, index) => (
                    <a 
                      key={index}
                      href={link.href} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-gray-600 hover:text-primary transition-colors"
                      aria-label={link.label}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
              
              <div className="mt-10 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400" 
                  alt="San Francisco map" 
                  className="w-full h-auto" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

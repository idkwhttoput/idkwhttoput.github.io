import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://yourusername.github.io/portfolio/"),
  title: { default: "Alex Morgan — Product Designer & Developer", template: "%s | Alex Morgan" },
  description: "Independent product designer and developer creating thoughtful digital experiences for ambitious teams.",
  keywords: ["product designer", "frontend developer", "portfolio", "web design"],
  authors: [{ name: "Alex Morgan" }],
  openGraph: {
    title: "Alex Morgan — Product Designer & Developer",
    description: "Thoughtful digital experiences, built from idea to launch.",
    type: "website",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "Alex Morgan portfolio" }],
  },
  twitter: { card: "summary_large_image", title: "Alex Morgan — Product Designer & Developer", description: "Thoughtful digital experiences, built from idea to launch.", images: ["/og-image.svg"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-[family-name:var(--font-sans)] antialiased">{children}</body>
    </html>
  );
}

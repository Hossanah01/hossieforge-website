import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://hossieforge-website.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Akande Hossanah Israel | Full-Stack Developer & Founder of HossieForge",
    template: "%s | HossieForge"
  },
  description:
    "Akande Hossanah Israel is a Nigeria-based full-stack developer and founder of HossieForge, building thoughtful websites, web apps, dashboards and digital products.",
  applicationName: "HossieForge",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Akande Hossanah Israel | HossieForge",
    description: "Turning ideas into digital reality. Full-stack development by Akande Hossanah Israel.",
    siteName: "HossieForge",
    images: ["/profile.png"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Akande Hossanah Israel | HossieForge",
    description: "Full-Stack Developer · Founder of HossieForge",
    images: ["/profile.png"]
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Akande Hossanah Israel",
    alternateName: "HossieForge",
    jobTitle: "Full-Stack Developer",
    description: "Full-stack developer and founder of HossieForge, based in Nigeria.",
    email: "mailto:akandehossanah1@gmail.com",
    image: `${siteUrl}/profile.png`,
    url: siteUrl,
    sameAs: [
      "https://github.com/Hossanah01",
      "https://linkedin.com/in/hossieforge",
      "https://www.facebook.com/hossieforgeofficial",
      "https://wa.me/2349162041260"
    ]
  };

  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }} />
        {children}
      </body>
    </html>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Services } from "@/components/portfolio/Services";
import { Projects } from "@/components/portfolio/Projects";
import { CareerStatus } from "@/components/portfolio/CareerStatus";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

const title = "Aung Zaw Myo | Web Designer, UI/UX Designer & Frontend Developer";
const description =
  "Aung Zaw Myo is a fourth-year Computer University student and aspiring Web Designer, UI/UX Designer, and Frontend Developer currently looking for internship and junior-level opportunities.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "Web Designer, UI/UX Designer, Frontend Developer, Computer University Mandalay, Frontend Developer Myanmar, Web Designer Myanmar, UI/UX Designer Myanmar, Internship, Junior Developer",
      },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Aung Zaw Myo",
          jobTitle: "Web Designer, UI/UX Designer, Frontend Developer",
          email: "mailto:errendear@gmail.com",
          telephone: "09-771724696",
          alumniOf: { "@type": "CollegeOrUniversity", name: "Computer University, Mandalay" },
          knowsAbout: ["HTML", "CSS", "Tailwind CSS", "Figma", "GitHub", "UI/UX Design"],
          seeks: "Internship and junior-level opportunities",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <CareerStatus />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

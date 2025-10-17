"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";
import { Boxes as BackgroundBoxes } from "@/components/ui/background-boxes";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";

const email1 = "victorchikwado122@gmail.com";
const subject = "Hello from your website";
const body2 = "Hi,How may i be at your service.";

const mailtoLink = `mailto:${email1}?subject=${encodeURIComponent(
  subject
)}&body=${encodeURIComponent(body2)}`;

export default function Home() {
  const [navOpen, setNavOpen] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_zly223m",
        "template_qpnxewl",
        formRef.current,
        "rjW1PnNH-zajPgd14"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          formRef.current?.reset();
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          console.error(error);
        }
      );
  };
  return (
    <div className="min-h-screen bg-background text-foreground font-sans pb-24 sm:pb-0">
      <ScrollProgress />

      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block h-3 w-3 rounded-full bg-gradient-to-tr from-fuchsia-500 via-sky-400 to-emerald-400" />
            <span className="text-sm font-semibold tracking-wide">
              V. Frontend Dev
            </span>
          </div>

          <button
            type="button"
            aria-label={navOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={navOpen}
            aria-controls="mobile-nav"
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-card hover:bg-card/80"
            onClick={() => setNavOpen((o) => !o)}
          >
            {navOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          <nav className="hidden md:flex items-center gap-4 md:gap-5 text-sm">
            <a href="#projects" className="hover:opacity-80">
              Projects
            </a>
            <a href="#skills" className="hover:opacity-80">
              Skills
            </a>
            <a href="#education" className="hover:opacity-80">
              Education
            </a>
            <a href="#contact" className="hover:opacity-80">
              Contact
            </a>
          </nav>
        </div>
        {navOpen && (
          <div id="mobile-nav" className="md:hidden border-t border-border">
            <nav className="mx-auto max-w-6xl px-4 py-3 grid gap-2 text-sm">
              <a
                onClick={() => setNavOpen(false)}
                href="#projects"
                className="rounded-md px-2 py-2 hover:bg-card"
              >
                Projects
              </a>
              <a
                onClick={() => setNavOpen(false)}
                href="#skills"
                className="rounded-md px-2 py-2 hover:bg-card"
              >
                Skills
              </a>
              <a
                onClick={() => setNavOpen(false)}
                href="#education"
                className="rounded-md px-2 py-2 hover:bg-card"
              >
                Education
              </a>
              <a
                onClick={() => setNavOpen(false)}
                href="#contact"
                className="rounded-md px-2 py-2 hover:bg-card"
              >
                Contact
              </a>
            </nav>
          </div>
        )}
      </header>

      <section className="relative overflow-hidden">
        <BackgroundBoxes className="absolute inset-0 opacity-[0.08]" />
        <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full blur-3xl bg-gradient-to-br from-fuchsia-700/40 via-violet-700/35 to-sky-700/40" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full blur-3xl bg-gradient-to-tr from-emerald-700/40 via-cyan-700/35 to-indigo-700/40" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[36rem] w-[36rem] rounded-full opacity-20 blur-[100px] bg-[conic-gradient(at_50%_50%,_var(--chart-4),_var(--chart-2),_var(--chart-1),_var(--chart-5),_var(--chart-3),_var(--chart-4))]" />
        <div className="pointer-events-none absolute inset-0 opacity-15 bg-[linear-gradient(0deg,transparent_95%,var(--border)),linear-gradient(90deg,transparent_95%,var(--border))] bg-[size:22px_22px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:py-24">
          <div className="grid items-center gap-10 sm:grid-cols-2">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                Frontend Developer
              </p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}
                className="mt-3 text-4xl sm:text-5xl font-extrabold leading-tight bg-gradient-to-r from-[var(--chart-4)] via-[var(--chart-2)] to-[var(--chart-1)] bg-clip-text text-transparent"
              >
                Building elegant, performant UIs for web and mobile
              </motion.h1>
              <p className="mt-4 text-muted-foreground max-w-prose">
                I craft modern interfaces with React, Next.js, and React Native.
                Over 4 years of shipping production-grade dashboards, landing
                pages, and full-featured apps.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Button asChild>
                  <a href="#projects" className="flex items-center gap-2">
                    View Projects <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="#contact" className="flex items-center gap-2">
                    Contact Me
                  </a>
                </Button>
              </div>
              <div className="mt-6 flex items-center gap-2 flex-wrap">
                <Badge className="bg-gradient-to-r from-fuchsia-500 to-pink-500 text-primary-foreground">
                  React
                </Badge>
                <Badge className="bg-gradient-to-r from-sky-500 to-indigo-500 text-primary-foreground">
                  Next.js
                </Badge>
                <Badge className="bg-gradient-to-r from-emerald-500 to-teal-500 text-primary-foreground">
                  React Native
                </Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">Tailwind CSS</Badge>
              </div>
            </div>
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-border bg-card shadow-sm"
              >
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
                  alt="Workspace with code and design"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                <div className="absolute bottom-3 left-3 flex items-center gap-2">
                  <Badge variant="outline">Open to Work</Badge>
                  <Badge variant="outline">Remote/Hybrid</Badge>
                </div>
                <motion.span
                  initial={{ y: -6, opacity: 0 }}
                  animate={{ y: [-6, 6, -6], opacity: 1 }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-4 right-4 rounded-full px-3 py-1 text-xs font-medium text-primary-foreground bg-[linear-gradient(90deg,var(--chart-4),var(--chart-2))] shadow"
                >
                  Next.js
                </motion.span>
                <motion.span
                  initial={{ y: 6, opacity: 0 }}
                  animate={{ y: [6, -6, 6], opacity: 1 }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -left-3 bottom-10 hidden sm:inline-flex rounded-full px-3 py-1 text-xs font-medium text-primary-foreground bg-[linear-gradient(90deg,var(--chart-1),var(--chart-5))] shadow"
                >
                  React Native
                </motion.span>
                {/* Orbiting ring of skills */}
                <motion.div
                  aria-hidden
                  className="pointer-events-none absolute inset-0"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 28,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <div className="absolute left-1/2 top-1/2 h-[110%] w-[110%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-border/40" />
                  <span className="absolute left-1/2 top-0 -translate-x-1/2 rounded-full px-2 py-0.5 text-[10px] bg-[linear-gradient(90deg,var(--chart-3),var(--chart-1))] text-primary-foreground">
                    Redux
                  </span>
                  <span className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full px-2 py-0.5 text-[10px] bg-[linear-gradient(90deg,var(--chart-5),var(--chart-2))] text-primary-foreground">
                    Tailwind
                  </span>
                  <span className="absolute left-1/2 bottom-0 -translate-x-1/2 rounded-full px-2 py-0.5 text-[10px] bg-[linear-gradient(90deg,var(--chart-4),var(--chart-2))] text-primary-foreground">
                    TypeScript
                  </span>
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full px-2 py-0.5 text-[10px] bg-[linear-gradient(90deg,var(--chart-1),var(--chart-5))] text-primary-foreground">
                    Firebase
                  </span>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <div aria-hidden className="relative h-10 sm:h-14">
        <div className="absolute inset-0 -skew-y-3 bg-[linear-gradient(90deg,var(--chart-4),var(--chart-2),var(--chart-1))] opacity-15" />
      </div>

      <section id="projects" className="relative scroll-mt-20 sm:scroll-mt-24">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
          <div className="mb-8 sm:mb-12">
            <SectionLabel text="Work" />
            <div className="mt-3 h-px bg-gradient-to-r from-transparent via-[var(--chart-2)] to-transparent" />
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold">
              Featured Projects
            </h2>
            <p className="mt-2 text-muted-foreground">
              A selection of web and mobile applications showcasing my
              end‑to‑end UI engineering.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Project 1 */}
            <ProjectCard
              title="E‑commerce Website"
              description="Responsive storefront with product listings, cart, and checkout."
              image="https://images.unsplash.com/photo-1516245834210-c4c142787335?q=80&w=1200&auto=format&fit=crop"
              tech={["React", "useState", "Tailwind CSS"]}
              link="https://ecommerce-chi-green.vercel.app/"
            />
            {/* Project 2 */}
            <ProjectCard
              title="SaaS Dashboard"
              description="Analytics dashboard with charts, filters, and role-based UI."
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRPpSdhiCD_hqptSunKU5l4mNLToMev8N4sQ&s"
              tech={["Next.js", "Tailwind CSS"]}
              link="https://dashboard-zeta-eight-47.vercel.app/"
            />
            {/* Project 3 */}
            <ProjectCard
              title="School Landing Page"
              description="Clean, accessible marketing site with sections and CTAs."
              image="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1200&auto=format&fit=crop"
              tech={["Next.js", "Tailwind CSS"]}
              link="https://school-taupe-ten.vercel.app/"
            />
            {/* Project 4 */}
            <ProjectCard
              title="Shopping UI (Mobile)"
              description="React Native shopping experience with list rendering and navigation."
              image="https://images.unsplash.com/photo-1548839140-29a749e1cf4d?q=80&w=1200&auto=format&fit=crop"
              tech={[
                "React Native",
                "useState",
                "useEffect",
                "FlatList",
                "React Navigation",
                "NativeWind",
              ]}
              link="https://www.linkedin.com/posts/victorudechukwu_reactnative-reactjs-mobiledevelopment-activity-7368553374100779009-oaPY?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEHL8qQBh-RY0DEvf87O6nCMsakanj1HtsE"
            />
            {/* Project 5 */}
            <ProjectCard
              title="Book App (Mobile)"
              description="Browse and manage books with CRUD via mock API."
              image="https://images.unsplash.com/photo-1519682337058-a94d519337bc?q=80&w=1200&auto=format&fit=crop"
              tech={["React Native", "Redux", "Axios", "CRUD", "NativeWind"]}
              link="https://www.linkedin.com/posts/victorudechukwu_reactnative-redux-axios-activity-7368598593630400512-9zl-?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEHL8qQBh-RY0DEvf87O6nCMsakanj1HtsE"
            />
            {/* Project 6 */}
            <ProjectCard
              title="E‑commerce App (Mobile)"
              description="Auth, order management, and multilingual shopping experience."
              image="https://images.unsplash.com/photo-1542744173-05336fcc7ad4?q=80&w=1200&auto=format&fit=crop"
              tech={[
                "React Native",
                "Redux Toolkit",
                "Redux Persist",
                "Firebase Auth",
                "Firestore",
                "AsyncStorage",
                "i18next",
                "Yup",
              ]}
              link="https://www.linkedin.com/posts/victorudechukwu_reactnative-firebase-mobiledevelopment-activity-7370727715328405504-JCde?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEHL8qQBh-RY0DEvf87O6nCMsakanj1HtsE"
            />
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="relative scroll-mt-20 sm:scroll-mt-24">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="mb-8">
            <SectionLabel text="Skills" />
            <div className="mt-3 h-px bg-gradient-to-r from-transparent via-[var(--chart-3)] to-transparent" />
            <h2 className="mt-4 text-3xl font-bold">Skills & Toolbox</h2>
            <p className="mt-2 text-muted-foreground">
              Technologies I use to craft robust and delightful experiences.
            </p>
          </div>
          {/* Animated marquee */}
          <TechMarquee
            items={[
              "React",
              "React Native",
              "Next.js",
              "TypeScript",
              "Tailwind CSS",
              "Redux / RTK",
              "Firebase",
              "Axios",
              "i18next",
              "Yup",
              "Zustand",
              "Shadcn/UI",
            ]}
          />
          <div className="mt-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {[
              "React",
              "React Native",
              "Next.js",
              "TypeScript",
              "Tailwind CSS",
              "Redux / RTK",
              "Firebase",
              "Axios",
              "i18next",
              "Yup",
              "Zustand",
              "Shadcn/UI",
            ].map((s) => (
              <Badge
                key={s}
                variant="secondary"
                className="justify-center py-2"
              >
                {s}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="relative scroll-mt-20 sm:scroll-mt-24">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="mb-8">
            <SectionLabel text="Education" />
            <div className="mt-3 h-px bg-gradient-to-r from-transparent via-[var(--chart-5)] to-transparent" />
            <h2 className="mt-4 text-3xl font-bold">Education</h2>
            <p className="mt-2 text-muted-foreground">
              Formal education and certifications.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>BSc, Computer Science</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">2017 – 2022</p>
                <p className="mt-2">
                  Core CS fundamentals with a focus on software engineering and
                  UI development.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Udemy Web Development Bootcamp</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">2024</p>
                <p className="mt-2">
                  Full‑stack web development essentials with modern tooling and
                  best practices.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative scroll-mt-20 sm:scroll-mt-24">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="mb-8">
            <SectionLabel text="Contact" />
            <div className="mt-3 h-px bg-gradient-to-r from-transparent via-[var(--chart-1)] to-transparent" />
            <h2 className="mt-4 text-3xl font-bold">
              Let's build something great
            </h2>
            <p className="mt-2 text-muted-foreground">
              I'm available for freelance and full‑time roles. Reach out and
              let's talk.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Contact Form */}
            <motion.form
              ref={formRef}
              onSubmit={sendEmail}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
              className="rounded-xl border border-border bg-card p-6 shadow-sm"
            >
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    name="user_name"
                    type="text"
                    title="name"
                    required
                    placeholder="Your name"
                    className="h-11 w-full rounded-md border border-input bg-background px-3 text-sm outline-none ring-0 focus:border-ring/60"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    name="user_email"
                    title="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="h-11 w-full rounded-md border border-input bg-background px-3 text-sm outline-none ring-0 focus:border-ring/60"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    title="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full rounded-md border border-input bg-background p-3 text-sm outline-none ring-0 focus:border-ring/60"
                  />
                </div>
                <div>
                  <Button
                    type="submit"
                    className="inline-flex items-center gap-2"
                  >
                    Send Message <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.form>

            <div className="flex flex-col justify-between">
              <div className="grid gap-3">
                <Button
                  variant="outline"
                  onClick={() => (window.location.href = mailtoLink)}
                  asChild
                >
                  <a className="flex items-center gap-2">
                    <Mail className="h-4 w-4" /> Email
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a
                    href="https://github.com/Vickymane345"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Github className="h-4 w-4" /> GitHub
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a
                    href="https://linkedin.com/in/victorudechukwu"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Linkedin className="h-4 w-4" /> LinkedIn
                  </a>
                </Button>
              </div>
              <p className="mt-6 text-sm text-muted-foreground">
                I'll get back to you within 1–2 business days.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-muted-foreground flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} V. Frontend Dev</p>
          <a
            href="https://drive.google.com/drive/u/0/home"
            className="inline-flex items-center gap-1 hover:underline"
          >
            View Resume <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </footer>
      {/* Floating quick-contact dock */}
      <QuickDock />
    </div>
  );
}

function ProjectCard({
  title,
  description,
  image,
  tech,
  link,
}: {
  title: string;
  description: string;
  image: string;
  tech: string[];
  link: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="group rounded-xl p-[1px] bg-[conic-gradient(at_top_left,_var(--chart-4),_var(--chart-2),_var(--chart-1),_var(--chart-5),_var(--chart-3),_var(--chart-4))] [perspective:1200px]">
        <Card className="overflow-hidden rounded-[calc(var(--radius)+2px)] bg-card/80 backdrop-blur border-border/60 transition-transform duration-300 transform-gpu group-hover:-translate-y-1 group-hover:[transform:rotateX(2deg)_rotateY(-3deg)] group-hover:shadow-[0_0_0_1px_var(--chart-2)_inset,0_0_40px_-10px_var(--chart-2)]">
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src={image}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
          </div>
          <CardHeader>
            <CardTitle className="text-lg">{title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">{description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {tech.map((t) => (
                <Badge key={t} variant="secondary">
                  {t}
                </Badge>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="ghost" asChild>
              <a href={link} className="flex items-center gap-2">
                Explore <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </motion.div>
  );
}

// Animated marquee component
function TechMarquee({ items }: { items: string[] }) {
  return (
    <div className="relative overflow-hidden rounded-lg border border-border/60 bg-card/50 backdrop-blur">
      <motion.div
        className="flex gap-6 py-3 pr-6"
        initial={{ x: 0 }}
        animate={{ x: [0, -600] }}
        transition={{ repeat: Infinity, duration: 16, ease: "linear" }}
      >
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="text-sm whitespace-nowrap px-3 py-1 rounded-md bg-[linear-gradient(90deg,var(--chart-4),var(--chart-2))] text-primary-foreground"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

function SectionLabel({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-tr from-fuchsia-500 via-sky-400 to-emerald-400" />
      <span className="text-sm font-semibold tracking-wide">{text}</span>
    </div>
  );
}

// Scroll progress bar component
function ScrollProgress() {
  const { scrollYProgress } = require("framer-motion").useScroll();
  const spring = require("framer-motion").useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.2,
  });
  return (
    <motion.div
      style={{ scaleX: spring }}
      className="fixed left-0 top-0 z-[60] h-[3px] w-full origin-left bg-[linear-gradient(90deg,var(--chart-4),var(--chart-2),var(--chart-1))]"
    />
  );
}

// Floating quick-contact dock
function QuickDock() {
  return (
    <div className="fixed inset-x-0 bottom-4 z-[55] flex justify-center px-4">
      <div className="group rounded-full p-[1px] bg-[conic-gradient(at_top_left,var(--chart-4),var(--chart-2),var(--chart-1),var(--chart-5),var(--chart-3),var(--chart-4))] shadow-[0_0_30px_-12px_var(--chart-2)]">
        <div className="flex items-center gap-1 rounded-full border border-border/60 bg-card/70 backdrop-blur px-2 py-1">
          <Button
            variant="ghost"
            onClick={() => (window.location.href = mailtoLink)}
            asChild
            className="rounded-full"
          >
            <a href="#" className="flex items-center gap-2 px-3">
              <Mail className="h-4 w-4" />
              <span className="hidden sm:inline">Email</span>
            </a>
          </Button>
          <Button variant="ghost" asChild className="rounded-full">
            <a
              href="https://github.com/Vickymane345"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-3"
            >
              <Github className="h-4 w-4" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
          </Button>
          <Button variant="ghost" asChild className="rounded-full">
            <a
              href="https://linkedin.com/in/victorudechukwu"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-3"
            >
              <Linkedin className="h-4 w-4" />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}

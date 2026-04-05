"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BadgeCheck,
  Binary,
  BriefcaseBusiness,
  FolderKanban,
  GitBranch,
  GraduationCap,
  type LucideIcon,
  Mail,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const githubUrl = "https://github.com/shaypat112";
const emailUrl = "mailto:shivangpatel2050@gmail.com";
const linkedInUrl = "https://www.linkedin.com/in/shivang-patel-21753635a/";

const featuredWork = [
  {
    title: "YETI Robotics Scouting System",
    eyebrow: "Web Developer",
    href: "https://scout.yetirobotics.org",
    description:
      "Built a high-throughput scouting platform for FRC teams across North Carolina, helping teams collect, organize, and act on match data quickly during competition.",
    highlights: [
      "Used Next.js and React to create fast, reliable scouting flows under event pressure",
      "Worked with Drizzle and PostgreSQL to manage large volumes of match and team data",
      "Used Docker for repeatable builds and Discord for developer collaboration and coordination",
    ],
    icon: BriefcaseBusiness,
  },
  {
    title: "StudentHub",
    eyebrow: "Startup",
    href: "https://studenthubv2.vercel.app",
    description:
      "Built a student-focused platform around campus utility, analytics, and AI-powered features with a modern product feel and rapid iteration cycle.",
    highlights: [
      "Built with Next.js, TypeScript, shadcn/ui, and Recharts for a polished product experience",
      "Used Firebase and Vercel for fast iteration, deployment, and backend support",
      "Integrated Mistral-powered features to explore smarter student workflows and assistance",
    ],
    icon: GraduationCap,
  },
  {
    title: "Votrio",
    eyebrow: "Security Startup",
    href: "https://votriocloud.vercel.app",
    description:
      "Explored a security-forward startup architecture using more niche SaaS and BaaS tools to move quickly while keeping trust, flexibility, and product control in view.",
    highlights: [
      "Worked across specialized SaaS and BaaS services instead of only mainstream defaults",
      "Focused on secure product direction, credibility, and clear user trust signals",
      "Balanced experimentation with practical architecture choices for an early-stage startup",
    ],
    icon: ShieldCheck,
  },
] as const;

const masteryShelf = [
  { name: "Next.js", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "JavaScript", category: "Language" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "shadcn/ui", category: "UI System" },
  { name: "Framer Motion", category: "Animation" },
  { name: "Drizzle ORM", category: "Database" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Firebase", category: "BaaS" },
  { name: "Recharts", category: "Data Viz" },
  { name: "Mistral", category: "AI" },
  { name: "Vercel", category: "Deployment" },
  { name: "Docker", category: "DevOps" },
  { name: "Discord DevOps", category: "Collaboration" },
  { name: "Responsive Design", category: "UX" },
  { name: "System Design", category: "Architecture" },
  { name: "Analytics Dashboards", category: "Product" },
  { name: "Scouting Systems", category: "Domain" },
  { name: "Startup Prototyping", category: "Product" },
] as const;

const certificationsShelf = [
  {
    title: "Certifications",
    issuer: "Ready for Verified Additions",
    note: "This space is ready for cloud, security, and software credentials as you add them.",
  },
  {
    title: "Technical Achievements",
    issuer: "Awards and Programs",
    note: "A good place for hackathon wins, robotics recognition, or selective engineering programs.",
  },
  {
    title: "Learning Milestones",
    issuer: "Courses and Specializations",
    note: "Use this to showcase focused learning paths that support your product and engineering work.",
  },
] as const;

const fades = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
} as const;

function SectionLabel({
  icon: Icon,
  text,
}: {
  icon: LucideIcon;
  text: string;
}) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/80 px-3 py-1 text-xs font-medium tracking-[0.24em] text-muted-foreground uppercase backdrop-blur">
      <Icon className="size-3.5" />
      <span>{text}</span>
    </div>
  );
}

function SectionHeading({
  label,
  title,
  description,
  icon,
}: {
  label: string;
  title: string;
  description: string;
  icon: LucideIcon;
}) {
  return (
    <div className="space-y-4">
      <SectionLabel icon={icon} text={label} />
      <div className="max-w-2xl space-y-3">
        <h2 className="text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-4xl">
          {title}
        </h2>
        <p className="text-base leading-7 text-muted-foreground sm:text-lg">
          {description}
        </p>
      </div>
    </div>
  );
}

export function PortfolioHome() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="surface-grid pointer-events-none absolute inset-0 opacity-60" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[34rem] bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.14),transparent_58%)] dark:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.16),transparent_58%)]" />

      <header className="sticky top-0 z-30 border-b border-border/60 bg-background/72 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
          <div>
            <p className="text-sm font-semibold tracking-[0.28em] uppercase">
              Shivang Patel
            </p>
            <p className="text-sm text-muted-foreground">
              FullStack Software Engineer and AI Engineer
            </p>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 pb-24 pt-12 md:px-10 md:pt-20">
        <motion.section
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="grid gap-10 lg:grid-cols-[1.4fr_0.9fr]"
        >
          <div className="space-y-8">
            <SectionLabel icon={Sparkles} text="Portfolio" />
            <div className="space-y-6">
              <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.07em] text-balance sm:text-6xl lg:text-7xl">
                Building Anything and Everything
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
                I am a high school student who is a sophomore located in
                Charlotte, NC. As a younger dev I pritoize learning fundamentals
                and as much as I can.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a
                href="#work"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-12 rounded-full px-6 text-sm tracking-[0.2em] uppercase",
                )}
              >
                Explore work
              </a>
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-12 rounded-full px-6 text-sm tracking-[0.2em] uppercase",
                )}
              >
                <GitBranch className="size-4" />
                GitHub
              </a>
              <a
                href={emailUrl}
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-12 rounded-full px-6 text-sm tracking-[0.2em] uppercase",
                )}
              >
                <Mail className="size-4" />
                Email Me
              </a>
              <a
                href={linkedInUrl}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-12 rounded-full px-6 text-sm tracking-[0.2em] uppercase",
                )}
              >
                <ArrowUpRight className="size-4" />
                LinkedIn
              </a>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {[
              {
                title: "Focused Craft",
                body: "Web Development, AI Integration, Data Visualization, and Machine Learning are my core areas of expertise, but I have a wide range of experience across the stack and am always excited to learn new technologies and domains.",
              },
              {
                title: "Projects",
                body: "Built projects across different domains, including a high-throughput scouting system for FRC teams, a student-focused startup platform, and a security-oriented startup architecture.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[2rem] border border-border/70 bg-card/85 p-6 shadow-[0_18px_60px_-32px_rgba(0,0,0,0.45)] backdrop-blur"
              >
                <p className="text-sm font-medium tracking-[0.22em] text-muted-foreground uppercase">
                  {item.title}
                </p>
                <p className="mt-4 text-base leading-7 text-foreground/88">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section {...fades} id="work" className="space-y-10">
          <SectionHeading
            label="Selected Work"
            title="Top Projects"
            description="These are the top projects with the most commits I have poured into them, showcasing the work I'm most proud of and that best represents my skills and experience. Click through to see more details about the work, tech used, and highlights from each project."
            icon={FolderKanban}
          />

          <div className="grid gap-6 lg:grid-cols-3">
            {featuredWork.map(
              ({
                title,
                eyebrow,
                description,
                highlights,
                href,
                icon: Icon,
              }) => (
                <motion.article
                  key={title}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                  className="group rounded-[2rem] border border-border/70 bg-card/92 p-7 shadow-[0_22px_80px_-40px_rgba(0,0,0,0.5)]"
                >
                  <div className="flex items-center justify-between gap-4">
                    <SectionLabel icon={Icon} text={eyebrow} />
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${title}`}
                      className="rounded-full p-1 text-sm font-medium text-foreground/88 transition hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <ArrowUpRight className="size-4 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  </div>

                  <div className="mt-8 space-y-4">
                    <h3 className="text-2xl font-semibold tracking-[-0.04em]">
                      {title}
                    </h3>
                    <p className="text-base leading-7 text-muted-foreground">
                      {description}
                    </p>
                  </div>

                  <div className="mt-8 space-y-3 border-t border-border/70 pt-6">
                    {highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="flex items-start gap-3 text-sm leading-6 text-foreground/88"
                      >
                        <BadgeCheck className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </motion.article>
              ),
            )}
          </div>
        </motion.section>

        <motion.section
          {...fades}
          className="grid gap-12 lg:grid-cols-[1fr_1.2fr]"
        >
          <SectionHeading
            label="Core Skills"
            title="The tech stacks I am most familiar with"
            description=""
            icon={Binary}
          />

          <div className="relative">
            <div className="shelf-scroll overflow-x-auto pb-6">
              <div className="flex min-w-max gap-4 pr-4">
                {masteryShelf.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ delay: index * 0.04, duration: 0.42 }}
                    whileHover={{ y: -4 }}
                    className="flex w-44 shrink-0 flex-col gap-8 rounded-[1.6rem] border border-border/70 bg-card px-5 py-5 shadow-[0_20px_45px_-38px_rgba(0,0,0,0.8)]"
                  >
                    <span className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
                      {skill.category}
                    </span>
                    <p className="text-2xl font-semibold tracking-[-0.05em] text-balance">
                      {skill.name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="h-3 rounded-full bg-foreground/8 dark:bg-foreground/12" />
          </div>
        </motion.section>

        <motion.section
          {...fades}
          className="grid gap-12 lg:grid-cols-[1fr_1.2fr]"
        >
          <SectionHeading
            label="Certifications"
            title="A polished section for credentials, achievements, and formal proof of work."
            description="This area is ready to hold the certifications, recognitions, and learning milestones you want to spotlight."
            icon={ShieldCheck}
          />

          <div className="shelf-scroll overflow-x-auto pb-4">
            <div className="flex min-w-max gap-5 pr-4">
              {certificationsShelf.map((item) => (
                <motion.article
                  key={item.title}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.24 }}
                  className="flex w-72 shrink-0 flex-col rounded-[1.8rem] border border-border/70 bg-card/90 p-6"
                >
                  <p className="text-xs font-medium tracking-[0.24em] text-muted-foreground uppercase">
                    {item.issuer}
                  </p>
                  <h3 className="mt-5 text-2xl font-semibold tracking-[-0.04em] text-balance">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-muted-foreground">
                    {item.note}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          {...fades}
          className="rounded-[2.25rem] border border-border/70 bg-card/92 px-6 py-10 sm:px-10"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl space-y-4">
              <SectionLabel icon={GitBranch} text="Connect" />
              <h2 className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                Want a closer look at how I build?
              </h2>
              <p className="text-base leading-7 text-muted-foreground sm:text-lg">
                Browse my GitHub, connect on LinkedIn, or send me an email if
                you want to talk about product engineering, startup work, or
                robotics-focused software.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-12 rounded-full px-6 text-sm tracking-[0.2em] uppercase",
                )}
              >
                <GitBranch className="size-4" />
                Visit GitHub
              </a>
              <a
                href={linkedInUrl}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-12 rounded-full px-6 text-sm tracking-[0.2em] uppercase",
                )}
              >
                <ArrowUpRight className="size-4" />
                LinkedIn
              </a>
              <a
                href={emailUrl}
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-12 rounded-full px-6 text-sm tracking-[0.2em] uppercase",
                )}
              >
                <Mail className="size-4" />
                Email Me
              </a>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BadgeCheck,
  Binary,
  BriefcaseBusiness,
  ChartColumn,
  FolderKanban,
  GitBranch,
  GraduationCap,
  Layers3,
  type LucideIcon,
  Mail,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { buttonVariants } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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

const stackCards = [
  {
    title: "YETI Stack",
    subtitle: "Scouting at competition scale",
    summary:
      "Optimized for quick entry, fast reads, and stable data flow while FRC teams across North Carolina are collecting high-volume match information in real time.",
    tools: [
      "Next.js",
      "React",
      "Drizzle ORM",
      "PostgreSQL",
      "Docker",
      "Discord",
    ],
  },
  {
    title: "StudentHub Stack",
    subtitle: "Product, analytics, and AI",
    summary:
      "Balanced product polish with fast iteration, combining modern frontend patterns, hosted backend tools, and data-heavy student workflows.",
    tools: [
      "Next.js",
      "TypeScript",
      "Firebase",
      "shadcn/ui",
      "Recharts",
      "Mistral",
      "Vercel",
    ],
  },
  {
    title: "Votrio Stack",
    subtitle: "Security-minded startup architecture",
    summary:
      "Explored more specialized SaaS and BaaS services to move quickly while still protecting flexibility, trust, and future product control.",
    tools: [
      "Auth Providers",
      "Managed Datastores",
      "Security Tooling",
      "Serverless Platforms",
      "Observability",
      "Automation",
    ],
  },
] as const;

const expertiseData = [
  { area: "Web Dev", score: 96 },
  { area: "React", score: 92 },
  { area: "TypeScript", score: 90 },
  { area: "Product UI", score: 88 },
  { area: "Python", score: 68 },
  { area: "Data Viz", score: 84 },
  { area: "AI Apps", score: 78 },
  { area: "Java", score: 49 },
] as const;

const expertiseRows = [
  {
    area: "Web Development",
    level: "High",
    strength: "Production-ready frontend thinking, clean UX, fast iteration",
    proof: "Next.js, React, TypeScript, Tailwind, shadcn/ui, motion",
  },
  {
    area: "Data Systems",
    level: "High",
    strength: "Structured data modeling and interface design for fast interpretation",
    proof: "Drizzle, PostgreSQL, scouting analytics, dashboards",
  },
  {
    area: "AI Integration",
    level: "Mid-High",
    strength: "Comfortable weaving models into product flows without overcomplicating the UX",
    proof: "Mistral experiments, AI-assisted product features",
  },
  {
    area: "Python",
    level: "Mid",
    strength: "Good practical fluency for automation, scripts, and technical exploration",
    proof: "Workflow scripting, experimentation, backend support tasks",
  },
  {
    area: "Java",
    level: "Developing",
    strength: "Functional working knowledge with room to deepen system-level expertise",
    proof: "Lower emphasis compared with web and product engineering",
  },
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
            label="Tech Stacks"
            title="The tools behind each product are organized like products too."
            description="Instead of a generic skill list, this section breaks the stack down by project. Each card shows the technologies, architecture style, and product context behind the work."
            icon={Layers3}
          />

          <div className="shelf-scroll overflow-x-auto pb-4">
            <div className="flex min-w-max gap-5 pr-4">
              {stackCards.map((stackCard, index) => (
                <motion.article
                  key={stackCard.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ delay: index * 0.05, duration: 0.42 }}
                  whileHover={{ y: -4 }}
                  className="flex w-[22rem] shrink-0 flex-col rounded-[1.8rem] border border-border/70 bg-card/90 p-6 shadow-[0_20px_45px_-38px_rgba(0,0,0,0.8)]"
                >
                  <p className="text-xs font-medium tracking-[0.22em] text-muted-foreground uppercase">
                    {stackCard.subtitle}
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold tracking-[-0.05em]">
                    {stackCard.title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-muted-foreground">
                    {stackCard.summary}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {stackCard.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full border border-border/70 bg-background px-3 py-1 text-xs font-medium tracking-[0.18em] text-foreground/88 uppercase"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          {...fades}
          className="grid gap-10 xl:grid-cols-[1.05fr_0.95fr]"
        >
          <div className="space-y-8">
            <SectionHeading
              label="Expertise Map"
              title="A clearer picture of where my technical depth is strongest."
              description="Web development is my highest-confidence lane right now, with strong frontend systems, product UX, and data-heavy application work. Python sits in the middle for practical engineering tasks, while Java is an area I am still growing."
              icon={ChartColumn}
            />

            <div className="rounded-[2rem] border border-border/70 bg-card/92 p-6 shadow-[0_22px_80px_-40px_rgba(0,0,0,0.5)]">
              <div className="mb-6 flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-medium tracking-[0.22em] text-muted-foreground uppercase">
                    Capability Graph
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-[-0.05em]">
                    Relative Areas of Expertise
                  </h3>
                </div>
                <Binary className="size-5 text-muted-foreground" />
              </div>

              <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={expertiseData} margin={{ top: 12, right: 0, left: -18, bottom: 8 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
                    <XAxis
                      dataKey="area"
                      tickLine={false}
                      axisLine={false}
                      tick={{ fill: "var(--muted-foreground)", fontSize: 12 }}
                    />
                    <YAxis
                      tickLine={false}
                      axisLine={false}
                      domain={[0, 100]}
                      tick={{ fill: "var(--muted-foreground)", fontSize: 12 }}
                    />
                    <Tooltip
                      cursor={{ fill: "color-mix(in oklab, var(--foreground) 6%, transparent)" }}
                      contentStyle={{
                        background: "var(--card)",
                        border: "1px solid var(--border)",
                        borderRadius: "18px",
                        color: "var(--foreground)",
                      }}
                    />
                    <Bar dataKey="score" radius={[18, 18, 6, 6]}>
                      {expertiseData.map((entry, index) => (
                        <Cell
                          key={entry.area}
                          fill={index < 4 ? "var(--foreground)" : "color-mix(in oklab, var(--foreground) 64%, var(--background))"}
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-border/70 bg-card/92 p-6 shadow-[0_22px_80px_-40px_rgba(0,0,0,0.5)]">
            <div className="mb-6">
              <p className="text-sm font-medium tracking-[0.22em] text-muted-foreground uppercase">
                Stack Breakdown
              </p>
              <h3 className="mt-2 text-2xl font-semibold tracking-[-0.05em]">
                Technical Focus Table
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                A more structured look at what I am strongest in today, what I use often,
                and which areas I am still actively leveling up.
              </p>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="whitespace-normal">Area</TableHead>
                  <TableHead className="whitespace-normal">Level</TableHead>
                  <TableHead className="whitespace-normal">Strength</TableHead>
                  <TableHead className="whitespace-normal">Current Proof</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {expertiseRows.map((row) => (
                  <TableRow key={row.area}>
                    <TableCell className="whitespace-normal font-medium">
                      {row.area}
                    </TableCell>
                    <TableCell className="whitespace-normal text-muted-foreground">
                      {row.level}
                    </TableCell>
                    <TableCell className="whitespace-normal text-muted-foreground">
                      {row.strength}
                    </TableCell>
                    <TableCell className="whitespace-normal text-muted-foreground">
                      {row.proof}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </motion.section>

        <motion.section
          {...fades}
          className="grid gap-12 lg:grid-cols-[1fr_1.2fr]"
        >
          <SectionHeading
            label="Certifications"
            title="My Credentials and Recognitions"
            description="These are my top certifications, awards, and learning milestones that I have."
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

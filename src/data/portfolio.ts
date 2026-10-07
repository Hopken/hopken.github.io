export const profile = {
  name: "Hope Soko",
  initials: "HKS",
  greeting: "Hello, I'm",
  firstName: "Hope",
  lastName: "Soko",
  headline: ["COMPUTER SCIENCE GRADUATE", "WEB DEVELOPER - IT PROFESSIONAL"],
  tagline:
    "I build reliable, efficient and user-friendly digital solutions that solve real-world problems and drive impact.",
  about:
    "Motivated and results-driven Computer Science graduate with experience in data management, software development, and digital communication. Skilled in Python, Java, and modern web technologies. Passionate about leveraging technology to solve real-world problems and improve organizational efficiency.",
  cvHref: "hope_soko_cv.pdf",
  email: "hopekenneth.26@gmail.com",
  phone: "+265 88 881 0118",
  location: "Lilongwe, Malawi",
} as const;

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
] as const;

export const socials = [
  { label: "GitHub", glyph: "◉", href: "https://github.com/Hopken" },
  { label: "LinkedIn", glyph: "in", href: "https://www.linkedin.com/in/edwin-mittochi-1b20a42b6/" },
  { label: "Facebook", glyph: "♥", href: "https://www.facebook.com/share/1ETPLyCxBH/" },
  { label: "Email", glyph: "✉", href: `mailto:${profile.email}` },
] as const;

export const skills = [
  { icon: "🐍", name: "Python" },
  { icon: "☕", name: "Java" },
  { icon: "JS", name: "JavaScript" },
  { icon: "TS", name: "TypeScript" },
  { icon: "Ⓝ", name: "Next.js" },
  { icon: "⚛", name: "React" },
  { icon: "▣", name: "HTML" },
  { icon: "▣", name: "CSS" },
  { icon: "⌁", name: "MySQL" },
  { icon: "◆", name: "Git & GitHub" },
  { icon: "▣", name: "Microsoft Office" },
  { icon: "⌕", name: "Troubleshooting" },
] as const;

export const experience = [
  {
    period: "Oct 2025 – Present",
    role: "Web Developer, Graphic Designer - Paxx Creatives",
    description:
      "Design and develop websites, manage social media platforms, create engaging content, run campaigns, analyze performance and grow online presence.",
    type: "Current",
  },
  {
    period: "Jul 2022 – Sep 2022",
    role: "Computer Studies Teacher – New Version High School",
    description:
      "Taught computer studies, ICT skills and digital literacy. Assisted students in practicals and assessments.",
    type: "Contract",
  },
] as const;

export const projects = [
  {
    icon: "🔒",
    title: "Attendance Tracking with GeoLocation",
    description:
      "A web-based system for recording and verifying attendance using location-based checks to improve accountability.",
    tags: ["PHP", "MySQL", "JavaScript"],
    href: "https://github.com/Hopken",
  },
  {
    icon: "▧",
    title: "E-Commerce Site",
    description:
      "A clothing-brand storefront with a minimal shopping flow, cart experience and order management workflow.",
    tags: ["Next.js", "MongoDB", "TailwindCSS"],
    href: "https://github.com/Hopken",
  },
  {
    icon: "◎",
    title: "Personal Portfolio Website",
    description:
      "A responsive digital portfolio designed to showcase technical work, career journey and contact information clearly.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    href: "https://github.com/Hopken",
  },
] as const;

export const education = [
  {
    title: "BSc in Computer Science",
    school: "DMI St. John The Baptist University",
    period: "2019– 2024",
  },
  {
    title: "Malawi School Certificate of Education (MSCE)",
    school: "Chipasula Secondary School",
    period: "2014 – 2018",
  },
] as const;

export type Project = {
  title: string;
  description: string;
  stack: string[];
  link?: string;
  repo?: string;
  year: string;
};

export const projects: Project[] = [
  {
    title: "gb-emu",
    description: "Game Boy emulator written from scratch, focused on cycle-accurate CPU emulation.",
    stack: ["C++"],
    repo: "https://github.com/jaimetsx/gb-emu",
    year: "2026",
  },
  {
    title: "PySuite",
    description: "A modular, menu-driven Python CLI suite for practical cybersecurity, networking, file inspection, and sysadmin workflows.",
    stack: ["Python"],
    repo: "https://github.com/jaimetsx/PySuite",
    year: "2026",
  },
  {
    title: "GitPeekr",
    description: "GitPeekr is a web page for exploring public GitHub profiles. Type a username and it shows a quick summary of that account, their public contribution activity, and their most popular repositories.",
    stack: ["Next.js"],
    repo: "https://github.com/jaimetsx/GitPeekr",
    year: "2026",
  },
  {
    title: "golancer",
    description: "A production-oriented Layer 7 load balancer and reverse proxy written in Go.",
    stack: ["Go"],
    repo: "https://github.com/jaimetsx/golancer",
    year: "2026",
  },
];
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
];

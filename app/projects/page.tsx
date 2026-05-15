"use client";
import { useState } from "react";
const projects = [
  {
    title: "Personal Portfolio Site",
    description:
      "A portfolio website built with Next.js and Tailwind CSS for my Fullstack Software Development class.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    status: "In Progress",
  },
  {
    title: "Week 1 Web Page",
    description:
      "A basic webpage project using HTML and CSS to practice structure, styling, and layout.",
    tech: ["HTML", "CSS"],
    status: "Completed",
  },
  {
    title: "Supply Chain Dashboard",
    description:
      "A planned data project that will show supply chain metrics using charts and business analysis.",
    tech: ["Tableau", "Data Analysis"],
    status: "Planned",
  },
];

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.status === filter);
  return (
    <main className="min-h-[calc(100vh-73px)] bg-black px-6 py-16 text-white">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-4 text-5xl font-bold">Projects</h1>

        <div className="mb-8 flex gap-3">
  <button
    onClick={() => setFilter("All")}
    className="rounded-full bg-gray-800 px-4 py-2 text-sm"
  >
    All
  </button>

  <button
    onClick={() => setFilter("Completed")}
    className="rounded-full bg-gray-800 px-4 py-2 text-sm"
  >
    Completed
  </button>

  <button
    onClick={() => setFilter("In Progress")}
    className="rounded-full bg-gray-800 px-4 py-2 text-sm"
  >
    In Progress
  </button>

  <button
    onClick={() => setFilter("Planned")}
    className="rounded-full bg-gray-800 px-4 py-2 text-sm"
  >
    Planned
  </button>
</div>
        <p className="mb-10 text-lg text-gray-300">
          Here are some class projects and planned projects I am building as I learn fullstack development.
        </p >

        <div className="grid gap-6 md:grid-cols-3">
          {filteredProjects.map((project) => (
            <div
              key={project.title}
              className="rounded-2xl border border-gray-800 bg-gray-900 p-6"
            >
              <p className="mb-3 text-sm text-blue-300">{project.status}</p >

              <h2 className="mb-3 text-2xl font-semibold">
                {project.title}
              </h2>

              <p className="mb-5 text-gray-300">
                {project.description}
              </p >

              <div className="flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-gray-800 px-3 py-1 text-sm text-gray-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
'use client';
import { Project } from '@/types/Project';
import useFetch from '@/lib/hooks/useFetch';

import ProjectCard from './components/ProjectCard';
import styles from '@/app/components/styles/Main.module.css';
export default function Home() {
  const { data, error } = useFetch<{ projects: Project[] }>('./portfolio.json');

  if (error) {
    console.error('Error fetching projects:', error);
    return <p>Error loading projects.</p>;
  }

  return (
    <div
      className="container mx-auto max-w-screen-xl px-3 py-4"
      style={{ backgroundColor: '#cccccc' }}
    >
      <h1 className="text-4xl font-bold text-center mb-8 font-mono">
        PORTFOLIO
      </h1>
      <ul className="flex flex-wrap justify-evenly gap-4 border-gray-300 p-4">
        {data?.projects.map(
          (project) =>
            project.link && <ProjectCard key={project.id} project={project} />
        )}
      </ul>
      <h2 className="font-mono text-center my-16 ">
        Some projects may not be showcased due to the database adding complexity
        for deployments.
      </h2>
      <hr className="my-8 border-t-2 border-gray-500 mb-16" />
      <section>
        <h3 className="font-mono text-5xl my-16 ">Programming Aspects</h3>
        <ul>
          <li>
            <h4 className="font-mono text-3xl my-8 p-4 border-l-2 border-gray-400">
              Frontend
            </h4>
            <ul className={styles.tagsContainer}>
              <li>React</li>
              <li>Next.js</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>Laravel</li>
            </ul>
          </li>
          <li>
            <h4 className="font-mono text-3xl my-8 p-4 border-l-2 border-gray-400">
              Backend
            </h4>
            <ul className={styles.tagsContainer}>
              <li>Node.js</li>
              <li>TypeORM</li>
              <li>PostgreSQL</li>
              <li>MySQL</li>
              <li>GraphQL</li>
              <li>Strapi</li>
              <li>Java</li>
              <li>Python</li>
            </ul>
          </li>
          <li>
            <h4 className="font-mono text-3xl my-8 p-4 border-l-2 border-gray-400">
              Other
            </h4>
            <ul className={styles.tagsContainer}>
              <li>GitHub</li>
              <li>RESTFUL API</li>
              <li>Server & Client components optimization</li>
              <li>SEO</li>
              <li>UI / UX</li>
              <li>OAuth</li>
              <li>Panda python library</li>
              <li>Code optimization</li>
              <li>Reducing dataload</li>
              <li>Template Layouting</li>
            </ul>
          </li>
          <li>
            <h4 className="font-mono text-3xl my-8 p-4 border-l-2 border-gray-400">
              Tools
            </h4>
            <ul className={styles.tagsContainer}>
              <li>Figma</li>
              <li>Excel</li>
              <li>Docker</li>
              <li>Teams</li>
              <li>VS Code</li>
              <li>Github Copilot</li>
            </ul>
          </li>
        </ul>
      </section>
      <footer className="my-24">
        <p className="text-center font-mono text-3xl">
          Website made with NextJS by Mardoek Thienpondt and deployed on Github.
        </p>
      </footer>
    </div>
  );
}

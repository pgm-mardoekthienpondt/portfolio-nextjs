import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/types/Project';
import styles from './styles/ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <li
      key={project.id}
      className={styles.card}
      style={{
        width: 'calc(50% - 20px)',
        backgroundColor: '#222222',
      }}
    >
      <div
        className="top flex justify-between card__top"
        style={{ backgroundColor: 'rgb(184 171 193)' }}
      >
        <div className="p-4">
          <h2 className="text-3xl font-mono">{project.title}</h2>
          <p className="text-gray-700">{project.synopsis}</p>
        </div>
        <div className="flex items-center mr-4">
          <Link
            href={project.link || '#'}
            className="text-xl bg-slate-100 rounded-full text-black w-8  aspect-square flex items-center justify-center"
          >
            ↗
          </Link>
        </div>
      </div>
      <div className={styles.card__image}>
        <Image
          className="object-cover ml-auto"
          src={`/img/projects/${project.picture}`}
          alt="img not found"
          width={500}
          height={500}
          priority={true}
        />
        <div className={`${styles.overlayText} ${styles.overlayTextRight}`}>
          <p>{project.description}</p>
        </div>
        <div className={`${styles.overlayText} ${styles.overlayTextLeft}`}>
          <ul>
            {project.devstack.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>
        {project.link === '#' && (
          <div className={styles.inProgress}>
            <p>This page is still under construction.</p>
            <p>No link available.</p>
          </div>
        )}
      </div>
    </li>
  );
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ProjectCard2: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <li
      key={project.id}
      className="max-w-sm flex flex-col bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <Link href={project.link || '#'}>
        <div className="flex justify-center h-60 bg-gray-900">
          <Image
            className={styles.img}
            src={`/img/projects/${project.picture}`}
            alt="img not found"
            width={350}
            height={250}
          />
        </div>
      </Link>
      <div className="p-5 flex-grow flex flex-col justify-between h-60">
        <div>
          <Link href={project.link || '#'}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {project.title}
            </h5>
          </Link>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {project.description}
          </p>
        </div>
        <a
          href={project.link}
          className="w-fit mt-auto inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </li>
  );
};

export default ProjectCard;

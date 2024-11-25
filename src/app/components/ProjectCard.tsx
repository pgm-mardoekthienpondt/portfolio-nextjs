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
        style={{ backgroundColor: ' #4071ab' }}
      >
        <div className="p-4">
          <h2 className="text-3xl font-mono text-white">{project.title}</h2>
          <p className="text-gray-300">{project.synopsis}</p>
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
        <Link href={project.link || "#"}>
          <Image
            className="object-cover ml-auto"
            src={`./img/projects/${project.picture}`}
            alt="img not found"
            width={500}
            height={500}
            priority={true}
          />
        </Link>
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

export default ProjectCard;

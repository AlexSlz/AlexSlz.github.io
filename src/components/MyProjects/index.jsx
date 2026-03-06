import { useState } from 'react';
import style from './MyProjects.module.css';
import MyFilter from '../MyFilter';
import useProjects from '../../hooks/useProjects';

export default function MyProjects() {
  const { projects, loading, error } = useProjects();
  const [selectedTag, setSelectedTag] = useState('All');

  const icons = {
    github: 'fa fa-github',
    youtube: 'fa fa-youtube',
    online: 'fas fa-flask',
  };

  const filteredProjects =
    selectedTag === 'All' ? projects : projects.filter((p) => p.tags?.includes(selectedTag));

  return (
    <>
      <div className="text-center">
        <h2 className="gradient-underline">Projects</h2>
        <p>A collection of projects, I've worked on.</p>
        <MyFilter projects={projects} selectedTag={selectedTag} setSelectedTag={setSelectedTag} />
      </div>
      {error && <div className="text-center">{error}</div>}
      {loading ? (
        <div className="text-center">Loading projects...</div>
      ) : (
        <div className={style.list}>
          {filteredProjects.map((project, index) => (
            <div key={index} className={style.card}>
              <h3 className={style.title}>{project.name}</h3>

              <p className={style.description}>{project.description || 'No description.'}</p>

              {project.tags && (
                <div className={style.tags}>
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className={`${style.tag} ${selectedTag === tag ? style.activeTag : ''}`}
                      onClick={() => setSelectedTag(tag)}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {project.links && (
                <div className={style.links}>
                  {Object.entries(project.links).map(([name, url], i) => (
                    <a
                      key={i}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={style.link}
                    >
                      <i className={icons[name.toLowerCase()]} aria-hidden="true" />
                      {name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
}

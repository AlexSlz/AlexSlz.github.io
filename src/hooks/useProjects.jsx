import { useEffect, useState } from 'react';
import axios from 'axios';
import localProjects from '../data/projects';

export default function useProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const formatText = (text) => {
    return text
      .replace(/[-_]/g, ' ')
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      .replace(/\s+/g, ' ')
      .trim();
  };

  const formatTags = (tag) => (tag === 'ShaderLab' ? ['Unity', 'C#'] : [tag]);

  //https://api.github.com/users/AlexSlz/repos'
  useEffect(() => {
    axios
      .get('https://api.github.com/users/AlexSlz/repos')
      .then((res) => {
        const githubProjects = res.data.map((repo) => {
          const local = localProjects.find((p) => p.name === repo.name);

          return {
            name: formatText(repo.name),
            description: local?.description || repo.description || '',
            links: {
              Github: repo.html_url,
              ...(repo.has_pages && {
                Online: `https://alexslz.github.io/${repo.name}`,
              }),
              ...local?.links,
            },
            tags: local?.tags || formatTags(repo.language),
          };
        });

        setProjects(githubProjects);
      })
      .catch((e) => {
        const projects = localProjects.map((project) => ({
          ...project,
          links: {
            Github: `https://github.com/AlexSlz/${project.name}`,
            ...project.links,
          },
          name: formatText(project.name),
        }));
        setProjects(projects);
        console.log(e);
        setError(e.response.status);
      })
      .finally(() => setLoading(false));
  }, []);

  return { projects, loading, error };
}

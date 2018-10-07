const projectsData = [
  { title: 'Neighbourhood Map', githubLink: '', website: '' },
  { title: 'MyReads: A Book Tracking App', githubLink: '', website: '' },
  { title: 'Restaurant Reviews App', githubLink: '', website: '' },
  { title: 'Feed Reader Testing', githubLink: '', website: '' },
  { title: 'Classic Arcade Game Clone', githubLink: '', website: '' },
  { title: 'Memory Game', githubLink: '', website: '' },
  { title: 'UHost', githubLink: '', website: '' },
  { title: 'Interactive Resume', githubLink: '', website: '' },
  { title: 'Portfolio Site', githubLink: '', website: '' }
];

// Create Project Element
const projectsList = document.querySelector('.projects-list');

for (let project of projectsData) {
  const li = document.createElement('li');
  const link = document.createElement('a');
  const h2 = document.createElement('h2');
  h2.className = 'project-title';
  h2.textContent = project.title;
  link.href = '#';
  link.appendChild(h2);
  li.appendChild(link);
  projectsList.appendChild(li);
}

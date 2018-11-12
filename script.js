const projectsData = [
  { title: 'Neighbourhood Map', githubLink: '', website: '' },
  { title: 'MyReads: A Book Tracking App', githubLink: '', website: '' },
  {
    title: 'Restaurant Reviews App',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    githubLink: 'https://github.com/nraovic/neighborhood-map-app',
    website: 'https://nraovic.github.io/neighborhood-map-app/'
  },
  {
    title: 'Feed Reader Testing',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    githubLink: '',
    website: ''
  },
  {
    title: 'Classic Arcade Game Clone',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    githubLink: '',
    website: ''
  },
  {
    title: 'Memory Game',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    githubLink: '',
    website: ''
  },
  {
    title: 'UHost',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    githubLink: '',
    website: ''
  },
  {
    title: 'Interactive Resume',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    githubLink: '',
    website: ''
  },
  {
    title: 'Portfolio Site',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    githubLink: '',
    website: ''
  }
];

const container = document.querySelector('.container');

const modal = document.querySelector('.modal');

const createModal = (project, id) => {
  const modal = document.createElement('div');
  modal.id = id;
  modal.className = 'project-modal';
  const closeModal = document.createElement('a');
  closeModal.className = 'close-modal';
  const closeSign = document.createElement('i');
  closeSign.classList.add('fas', 'fa-times');
  closeModal.appendChild(closeSign);
  const title = document.createElement('h3');
  title.textContent = project.title;
  title.className = 'project-title-modal';
  const description = document.createElement('p');
  description.textContent = project.description;
  description.className = 'project-description-modal';
  const website = document.createElement('p');
  website.className = 'project-website-modal';
  const projectLink = document.createElement('a');
  projectLink.href = project.website;
  projectLink.textContent = 'See the project';
  projectLink.target = '_blank';
  website.appendChild(projectLink);
  const github = document.createElement('p');
  github.className = 'project-github-modal';
  const githubLink = document.createElement('a');
  githubLink.href = project.githubLink;
  githubLink.textContent = 'See the project on Github';
  githubLink.target = '_blank';
  github.appendChild(githubLink);
  modal.appendChild(closeModal);
  modal.appendChild(title);
  modal.appendChild(description);
  modal.appendChild(website);
  modal.appendChild(github);

  document.body.insertBefore(modal, container);
  return modal;
};
//
// Open Modal
const openModal = modal => {
  modal.classList.add('open');
};

//Close Modal
const closeModal = modal => {
  modal.classList.remove('open');
};
// Create Project Element
const projectsList = document.querySelector('.projects-list');

for (let project of projectsData) {
  const id = `project-modal-${project.title
    .replace(/[^a-zA-Z0-9 ]/g, '')
    .replace(/ /g, '-')
    .toLowerCase()}`;
  const li = document.createElement('li');
  const link = document.createElement('a');
  const h2 = document.createElement('h2');
  h2.className = 'project-title';
  h2.textContent = project.title;
  /*randomPercent = Math.floor(Math.random() * 100);
  console.log(randomPercent);
  link.style.background = `background: linear-gradient(to top, #e8e3c7 80%, #adc4a0 80%) content-box;`;
  console.log(randomPercent);
  */
  link.href = '#';
  link.appendChild(h2);
  li.appendChild(link);
  projectsList.appendChild(li);

  const modal = createModal(project, id);
  const close = document.querySelector(`#${id} .close-modal`);
  const header = document.querySelector('.header');
  const main = document.querySelector('.main');
  const footer = document.querySelector('.footer');
  link.onclick = () => {
    openModal(modal);
    for (let i of [header, main, footer]) {
      i.classList.add('hide');
    }
  };
  close.onclick = () => {
    closeModal(modal);
    for (let i of [header, main, footer]) {
      i.classList.remove('hide');
    }
  };
}

const projectsData = [
  {
    title: 'Neighbourhood Map',
    photoUrl: 'photos/NeighborhoodMapPrint.png',
    description:
      'A React single page application with a listing of the cafes in central Copenhagen. Foursquare API and Google Maps API powered.',
    photoAlt: 'Neighbourhood Map Project Print Screens',
    githubLink: 'https://github.com/nraovic/neighborhood-map-app',
    website: 'https://nraovic.github.io/neighborhood-map-app/'
  },
  {
    title: 'MyReads: A Book Tracking App',
    photoUrl: 'photos/MyReadsPrint.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    githubLink: '',
    website: ''
  },
  {
    title: 'Restaurant Reviews App',
    photoUrl: 'photos/RestaurantsPrint.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    githubLink: 'https://github.com/nraovic/neighborhood-map-app',
    website: 'https://nraovic.github.io/neighborhood-map-app/'
  },
  {
    title: 'Feed Reader Testing',
    photoUrl: 'photos/MyReadsPrint.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    githubLink: '',
    website: ''
  },
  {
    title: 'Classic Arcade Game Clone',
    photoUrl: 'photos/ClassicArcadeGamePrint.png',

    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    githubLink: '',
    website: ''
  },
  {
    title: 'Memory Game',
    photoUrl: 'photos/MemoryGamePrint.png',

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

const projectDiv = document.querySelector('.project');

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
  const container = document.createElement('div');
  container.className = 'container-modal';
  const title = document.createElement('h3');
  title.textContent = project.title.toUpperCase();
  title.className = 'project-title-modal';
  const photo = document.createElement('img');
  photo.src = project.photoUrl;
  photo.alt = project.photoAlt;
  photo.className = 'project-photo-modal';
  const description = document.createElement('p');
  description.textContent = project.description;
  description.className = 'project-description-modal';
  const website = document.createElement('p');
  website.className = 'project-website-modal';
  const projectLink = document.createElement('a');
  projectLink.href = project.website;
  projectLink.textContent = 'View Website'.toUpperCase();
  projectLink.target = '_blank';
  website.appendChild(projectLink);
  const github = document.createElement('p');
  github.className = 'project-github-modal';
  const githubLink = document.createElement('a');
  githubLink.href = project.githubLink;
  githubLink.textContent = 'View on Github'.toUpperCase();
  githubLink.target = '_blank';
  github.appendChild(githubLink);
  modal.appendChild(closeModal);
  modal.appendChild(container);

  container.appendChild(title);
  container.appendChild(photo);
  container.appendChild(description);
  container.appendChild(website);
  container.appendChild(github);

  projectDiv.appendChild(modal);
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
  li.style.background = `background: linear-gradient(to top, #e8e3c7 80%, #adc4a0 80%) content-box;`;
  console.log(randomPercent);
  */
  link.appendChild(h2);
  link.href = '#';
  li.appendChild(link);
  projectsList.appendChild(li);

  const modal = createModal(project, id);
  const close = document.querySelector(`#${id} .close-modal`);
  link.onclick = event => {
    event.preventDefault();
    openModal(modal);
    // So the scroll from the main page doesn't show up
    document.body.style.overflow = 'hidden';
    close.onclick = () => {
      closeModal(modal);
      document.body.style.overflow = 'visible';
    };
  };
}

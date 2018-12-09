const projectsData = [
  {
    title: 'Neighbourhood Map',
    keywords: 'React; JavaScript; HTML5; CSS3; Responsive;',
    photoUrl: 'photos/NeighborhoodMapPrint.png',
    description:
      'A React single page application with a listing of the cafes in central Copenhagen. Foursquare API and Google Maps API powered.',
    photoAlt: 'Neighbourhood Map Project Print Screens',
    githubLink: 'https://github.com/nraovic/neighborhood-map-app',
    website: 'https://nraovic.github.io/neighborhood-map-app/'
  },
  {
    title: 'MyReads: A Book Tracking App',
    keywords: 'React; JavaScript; HTML5; CSS3; Responsive;',
    photoUrl: 'photos/MyReadsPrint.png',
    description:
      'A SPA that manages an online library. Built with React and React Router and bootstraped with Create React App.',
    githubLink: 'https://github.com/nraovic/reactnd-project-myreads-starter',
    website: ''
  },
  {
    title: 'Restaurant Reviews App',
    keywords: 'JavaScript; HTML5; CSS3; Responsive; Service Worker; Accessibility;',
    photoUrl: 'photos/RestaurantsPrint.png',
    description:
      'The aim of the project was to convert the design of a static page to be responsive and accessible for screen reader use. Additionaly, Service worker is enabled to creae a seamless offline experience for the users.',
    githubLink: 'https://github.com/nraovic/mws-restaurant-stage-1',
    website: ''
  },
  {
    title: 'Feed Reader Testing',
    keywords: 'JavaScript; Jasmin;',
    photoUrl: 'photos/MyReadsPrint.png',
    description:
      'The aim was to write a number of test suites in Jasmine for a web-based application that reads RSS feeds.',
    githubLink: 'https://github.com/nraovic/frontend-nanodegree-feedreader',
    website: 'https://nraovic.github.io/frontend-nanodegree-feedreader/'
  },
  {
    title: 'Classic Arcade Game Clone',
    keywords: 'JavaScript; HTML5; CSS3;',
    photoUrl: 'photos/ClassicArcadeGamePrint.png',
    description:
      'The aim of this project was to add a number of entities to the game with a game loop engine including the player characters and enemies to recreate the classic arcade game Frogger.',
    githubLink: 'https://github.com/nraovic/Classic-arcade-game-clone-project',
    website: 'https://nraovic.github.io/Classic-arcade-game-clone-project/'
  },
  {
    title: 'Memory Game',
    keywords: 'React; JavaScript; HTML5; CSS3; Responsive;',
    photoUrl: 'photos/MemoryGamePrint.png',
    description: 'A browser-based card matching game (also known as Concentration).',
    githubLink: 'https://github.com/nraovic/fend-project-memory-game',
    website: 'https://nraovic.github.io/fend-project-memory-game/'
  },
  {
    title: 'UHost',
    keywords: 'JavaScript; HTML5; CSS3;',
    description:
      'A dummy website developed for the CSS Fundamentals course covering all the major topics in CSS including Flexbox, Grid, Animation and Transitions. The course is still in progress.',
    githubLink: 'https://github.com/nraovic/uHost',
    website: ''
  },
  {
    title: 'Interactive Resume',
    keywords: 'JavaScript; Jquery; D3.js; HTML5; CSS3; Responsive;',
    githubLink: 'https://github.com/nraovic/frontend-nanodegree-resume',
    website: 'https://nraovic.github.io/Interactive-Resume/'
  },
  {
    title: 'Portfolio Site',
    keywords: 'JavaScript; HTML5; CSS3; Bootstrap; Responsive',
    description: 'The first portfolio site hosting the projects from the Nanodegree',
    githubLink: 'https://github.com/nraovic/Build-a-Portfolio-Site',
    website: 'https://nraovic.github.io/Build-a-Portfolio-Site/'
  }
];

function addModal(project, id) {
  const projectDiv = document.querySelector('.project');
  const modal = document.createElement('div');
  modal.id = id;
  modal.className = 'project-modal';
  projectDiv.appendChild(modal);
  modal.appendChild(createModalClose());
  modal.appendChild(createModalContainer(project));
  return modal;
}
function createModalClose() {
  const closeModal = document.createElement('a');
  closeModal.className = 'close-modal';
  const closeSign = document.createElement('i');
  closeSign.classList.add('fas', 'fa-times');
  closeModal.appendChild(closeSign);
  return closeModal;
}
function createModalContainer(project) {
  const container = document.createElement('div');
  container.className = 'container-modal';
  if (project.title && project.title.length > 0) {
    container.appendChild(createModalTitle(project.title));
  }
  if (project.photoUrl && project.photoUrl.length > 0) {
    container.appendChild(createModalPhoto(project.photoUrl, project.photoAlt));
  }
  if (project.description && project.description.length > 0) {
    container.appendChild(createModalDescription(project.description));
  }
  if (project.website && project.website.length > 0) {
    container.appendChild(createModalWebpage(project.website));
  }
  if (project.githubLink && project.githubLink.length > 0) {
    container.appendChild(createModalGithubPage(project.githubLink));
  }
  return container;
}

function createModalTitle(content) {
  const title = document.createElement('h3');
  title.textContent = content.toUpperCase();
  title.className = 'project-title-modal';
  return title;
}
function createModalPhoto(url, alt) {
  const photo = document.createElement('img');
  photo.src = url;
  photo.alt = alt;
  photo.className = 'project-photo-modal';
  return photo;
}
function createModalDescription(content) {
  const description = document.createElement('p');
  description.textContent = content;
  description.className = 'project-description-modal';
  return description;
}

function createModalWebpage(content) {
  const website = document.createElement('p');
  website.className = 'project-website-modal';
  const projectLink = document.createElement('a');
  projectLink.href = content;
  projectLink.textContent = 'View Website'.toUpperCase();
  projectLink.target = '_blank';
  website.appendChild(projectLink);
  return website;
}
function createModalGithubPage(content) {
  const github = document.createElement('p');
  github.className = 'project-github-modal';
  const githubLink = document.createElement('a');
  githubLink.href = content;
  githubLink.textContent = 'View on Github'.toUpperCase();
  githubLink.target = '_blank';
  github.appendChild(githubLink);
  return github;
}

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

function createProjectTile() {
  const projectsList = document.querySelector('.projects-list');
  const li = document.createElement('li');
  projectsList.appendChild(li);
  const link = document.createElement('a');
  link.href = '#';
  li.appendChild(link);
  li.appendChild(createProjectTileWrap());
  return link;
}
function createProjectTileWrap() {
  const divWrap = document.createElement('div');
  divWrap.className = 'div-wrap';
  divWrap.appendChild(createProjectTileTitle());
  divWrap.appendChild(createProjectTileKeywords());
  return divWrap;
}
function createProjectTileTitle() {
  const projectTitleWrap = document.createElement('div');
  projectTitleWrap.className = 'project-title-wrap';
  const projectTitle = document.createElement('h2');
  projectTitle.className = 'project-title';
  projectTitle.textContent = project.title;
  projectTitleWrap.appendChild(projectTitle);
  return projectTitleWrap;
}
function createProjectTileKeywords() {
  const projectKeywordsWrap = document.createElement('div');
  projectKeywordsWrap.className = 'project-keywords-wrap';
  const keywords = document.createElement('p');
  keywords.className = 'project-keywords';
  keywords.textContent = project.keywords;
  projectKeywordsWrap.appendChild(keywords);
  return projectKeywordsWrap;
}
for (let project of projectsData) {
  const id = `project-modal-${project.title
    .replace(/[^a-zA-Z0-9 ]/g, '')
    .replace(/ /g, '-')
    .toLowerCase()}`;
  const li = document.createElement('li');
  const link = document.createElement('a');
  const divWrap = document.createElement('div');
  const projectTitleWrap = document.createElement('div');
  const projectKeywordsWrap = document.createElement('div');

  const h2 = document.createElement('h2');
  const keywords = document.createElement('p');
  link.href = '#';
  divWrap.className = 'div-wrap';
  projectTitleWrap.className = 'project-title-wrap';
  projectKeywordsWrap.className = 'project-keywords-wrap';
  h2.className = 'project-title';
  keywords.className = 'project-keywords';
  keywords.textContent = project.keywords;
  h2.textContent = project.title;
  /*randomPercent = Math.floor(Math.random() * 100);
  console.log(randomPercent);
  li.style.background = `background: linear-gradient(to top, #e8e3c7 80%, #adc4a0 80%) content-box;`;
  console.log(randomPercent);
  */
  link.appendChild(divWrap);
  divWrap.appendChild(projectTitleWrap);
  divWrap.appendChild(projectKeywordsWrap);
  projectTitleWrap.appendChild(h2);
  projectKeywordsWrap.appendChild(keywords);
  li.appendChild(link);
  projectsList.appendChild(li);

  const modal = addModal(project, id);
  const close = document.querySelector(`#${id} .close-modal`);
  link.onclick = event => {
    // So that the page doesn't jump to the top when a modal closes
    event.preventDefault();
    openModal(modal);
    // So the scroll from the main page doesn't show up
    document.body.style.overflow = 'hidden';
    close.onclick = () => {
      closeModal(modal);
      document.body.style.overflow = 'auto';
    };
  };
}

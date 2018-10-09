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

const container = document.querySelector('.container');

const modal = document.querySelector('.modal');

const createModal = project => {
  const modal = document.createElement('div');
  modal.className = 'project-modal';
  const closeModal = document.createElement('a');
  closeModal.className = 'close-modal';
  const closeSign = document.createElement('i');
  closeSign.classList.add('fas', 'fa-times');
  closeModal.appendChild(closeSign);
  const title = document.createElement('h3');
  title.textContent = project.title;
  const description = document.createElement('p');
  description.textContent = project.description;
  const website = document.createElement('p');
  const projectLink = document.createElement('a');
  projectLink.href = project.website;
  website.appendChild(projectLink);
  const github = document.createElement('p');
  const githubLink = document.createElement('a');
  github.appendChild(githubLink);

  modal.appendChild(closeModal);
  modal.appendChild(title);
  modal.appendChild(description);
  modal.appendChild(website);
  modal.appendChild(github);

  document.body.insertBefore(modal, container);
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
  const li = document.createElement('li');
  const link = document.createElement('a');
  const h2 = document.createElement('h2');
  h2.className = 'project-title';
  h2.textContent = project.title;
  link.href = '#';
  link.appendChild(h2);
  li.appendChild(link);
  projectsList.appendChild(li);

  createModal(project);

  const modal = document.querySelector('.project-modal');
  const close = document.querySelector('.close-modal');
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

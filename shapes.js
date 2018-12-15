const listOfShapes = ['◦', '◦', '◎', '◯'];
const colors = ['#ADC4A0', '#f1e5d8', '#7C7875', '#55897D', '#ADC4A0', '#d2b48c', '#faf0ee'];

const numberofShapes = 8;
const project = document.querySelector('.project');

function getRandomPosition(element) {
  let x = Math.abs(project.offsetHeight - element.offsetHeight);
  let y = Math.abs(project.offsetWidth - element.offsetWidth);
  let randomX = Math.floor(Math.random() * x);
  let randomY = Math.floor(Math.random() * y);
  return [randomX, randomY];
}

//Create and style the shapes
for (let shape of listOfShapes) {
  let i = 0;
  while (i < numberofShapes) {
    const shapeElement = document.createElement('div');
    shapeElement.setAttribute('style', 'position:absolute;');
    project.appendChild(shapeElement);
    shapeElement.className = 'shape';
    shapeElement.textContent = shape;
    const xy = getRandomPosition(shapeElement);
    shapeElement.style.top = xy[0] + 'px';
    shapeElement.style.left = xy[1] + 'px';
    shapeElement.style.zIndex = -1;
    shapeElement.style.opacity = 0.2;
    shapeElement.style.color = colors[Math.floor(Math.random() * colors.length)];
    i++;
  }
}

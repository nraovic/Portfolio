const listOfShapes = ['◦', '◦', '◎', '◯'];
const colors = ['#ADC4A0', '#f1e5d8', '#7C7875', '#55897D', '#ADC4A0', '#d2b48c', '#faf0ee'];

const numberofShapes = 8;
const project = document.querySelector('.project');
console.log(document.body.clientHeight, document.body.clientWidth);
console.log(project.clientHeight, project.clientWidth);

function getRandomPosition(element) {
  var x = Math.abs(project.offsetHeight - element.offsetHeight);
  var y = Math.abs(project.offsetWidth - element.offsetWidth);
  var randomX = Math.floor(Math.random() * x);
  var randomY = Math.floor(Math.random() * y);
  return [randomX, randomY];
}

//Create and style the shapes
window.onload = function() {
  for (let shape of listOfShapes) {
    let i = 0;
    while (i < numberofShapes) {
      const shapeElement = document.createElement('div');
      shapeElement.setAttribute('style', 'position:absolute;');
      project.appendChild(shapeElement);
      shapeElement.className = 'shape';
      shapeElement.textContent = shape;
      var xy = getRandomPosition(shapeElement);
      shapeElement.style.top = xy[0] + 'px';
      shapeElement.style.left = xy[1] + 'px';
      shapeElement.style.zIndex = -1;
      shapeElement.style.opacity = 0.2;
      shapeElement.style.color = colors[Math.floor(Math.random() * colors.length)];
      i++;
    }
  }
};

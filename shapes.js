const listOfShapes = ['◦', '▶', '◯', '◗', '☓', '△'];
const colors = ['#55897D', '#ADC4A0', '#F4EEB4', '#7C7875', '#EB98B2', '#55897D', '#ADC4A0', '#F4EEB4'];

const numberofShapes = 4;

function getRandomPosition(element) {
  var x = document.body.offsetHeight - element.clientHeight;
  var y = document.body.offsetWidth - element.clientWidth;
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
      document.body.appendChild(shapeElement);
      var xy = getRandomPosition(shapeElement);
      shapeElement.className = 'shape';
      shapeElement.textContent = shape;
      shapeElement.style.top = xy[0] + 'px';
      shapeElement.style.left = xy[1] + 'px';
      shapeElement.style.zIndex = -1;
      shapeElement.style.opacity = 0.4;
      shapeElement.style.color = colors[Math.floor(Math.random() * colors.length)];
      i++;
    }
  }
};

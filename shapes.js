const listOfShapes = [, '◦', '▶', '◯', '◗', '☓', '△'];
const listOfBigShapes = [];

const numberofShapes = 7;
const numberofBigShapes = 1;

const scale = 6;
const bigShapesScale = 18;
for (let shape of listOfShapes) {
}

function getRandomPosition(element, scale) {
  var x = document.body.offsetHeight - element.clientHeight * scale;
  var y = document.body.offsetWidth - element.clientWidth * scale;
  var randomX = Math.floor(Math.random() * x);
  var randomY = Math.floor(Math.random() * y);
  return [randomX, randomY];
}

const shape1 = document.createElement('div');

window.onload = function() {
  for (let shape of listOfShapes) {
    let i = 0;
    while (i < numberofShapes) {
      const shape1 = document.createElement('div');
      shape1.className = 'shape';
      shape1.setAttribute('style', 'position:absolute;');
      shape1.textContent = shape;
      document.body.appendChild(shape1);
      var xy = getRandomPosition(shape1, 6);
      shape1.style.top = xy[0] + 'px';
      shape1.style.left = xy[1] + 'px';
      shape1.style.zIndex = -1;
      shape1.style.opacity = 0.4;
      shape1.style.color = '#D3D3D3';
      i++;
    }
  }
  for (let shape of listOfBigShapes) {
    let i = 0;
    while (i < numberofBigShapes) {
      const bigShape = document.createElement('div');
      bigShape.className = 'big-shape';
      bigShape.setAttribute('style', 'position:absolute;');
      bigShape.textContent = shape;
      document.body.appendChild(bigShape);
      var xy = getRandomPosition(bigShape, 18);
      bigShape.style.top = xy[0] + 'px';
      bigShape.style.left = xy[1] + 'px';
      bigShape.style.zIndex = -1;
      bigShape.style.opacity = 0.4;
      bigShape.style.color = '#8f9779';
      i++;
    }
  }
};

const listOfShapes = ['◯', '◦', '▶', '△', '◗'];

const numberofShapes = 10;

for (let shape of listOfShapes) {
}

function getRandomPosition(element) {
  var x = document.body.offsetHeight - element.clientHeight * 6;
  var y = document.body.offsetWidth - element.clientWidth * 6;
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
      var xy = getRandomPosition(shape1);
      shape1.style.top = xy[0] + 'px';
      shape1.style.left = xy[1] + 'px';
      shape1.style.zIndex = -1;
      shape1.style.opacity = 0.4;
      shape1.style.color = '#D3D3D3';
      i++;
    }
  }
};

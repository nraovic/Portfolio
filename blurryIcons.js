const iconsList = document.querySelectorAll('.contact-icon');
const icons = Array.from(iconsList);

for (let icon of icons) {
  icon.addEventListener('mouseenter', () => {
    for (let element of icons) {
      if (element !== icon) {
        element.style.textShadow = '0 0 5px #000';
      }
    }
  });
  icon.addEventListener('mouseleave', () => {
    for (let element of icons) {
      element.style.textShadow = 'none';
    }
  });
}

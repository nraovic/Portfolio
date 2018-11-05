const iconsList = document.querySelectorAll('.contact-icon');
const icons = Array.from(iconsList);

if (document.documentElement.clientWidth >= 1024) {
  for (let icon of icons) {
    icon.addEventListener('mouseover', () => {
      for (let element of icons) {
        if (element !== icon) {
          element.style.textShadow = '0 0 5px #000';
        }
      }
    });
    icon.addEventListener('mouseout', () => {
      for (let element of icons) {
        element.style.textShadow = 'none';
      }
    });
  }
}

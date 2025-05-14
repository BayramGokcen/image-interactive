const zones = document.querySelectorAll('.zone');
const hoverInfo = document.getElementById('hoverInfo');
const mainImage = document.getElementById('mainImage');
const subImage = document.getElementById('subImage');
const menuItems = document.getElementById('menuItemsOverlay');
const clickResult = document.getElementById('clickResult');

zones.forEach(zone => {
  zone.addEventListener('mouseenter', () => {
    hoverInfo.textContent = zone.dataset.label;
  });

  zone.addEventListener('mouseleave', () => {
    hoverInfo.textContent = "Survolez une zone pour voir l'information";
  });

  zone.addEventListener('click', function handleClick() {
    if (zone.dataset.action === 'openSubImage') {
      mainImage.style.display = 'none';
      subImage.style.display = 'block';
      zone.removeEventListener('click', handleClick);
      zone.style.pointerEvents = 'none';
      zone.style.cursor = 'default';
      menuItems.style.display = 'flex';
    }
  });
});

document.querySelectorAll('.menu-button').forEach(button => {
  button.addEventListener('click', () => {
    clickResult.textContent = `Vous avez cliqué sur : ${button.textContent}`;
  });
});
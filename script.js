const zones = document.querySelectorAll('.zone');
const hoverInfo = document.getElementById('hoverInfo');
const mainImage = document.getElementById('mainImage');
const subImage = document.getElementById('subImage');
const strategyImage = document.getElementById('strategyImage');
const menuItems = document.getElementById('menuItemsOverlay');
const strategyMenu = document.getElementById('strategyMenuOverlay');
const clickResult = document.getElementById('clickResult');
const performanceImage = document.getElementById('performanceImage');
const performanceMenu = document.getElementById('performanceMenuOverlay');

function resetAll() {
  // Affiche l’image principale
  mainImage.style.display = 'block';

  // Cache les sous-images et les menus
  subImage.style.display = 'none';
  strategyImage.style.display = 'none';
  menuItems.style.display = 'none';
  strategyMenu.style.display = 'none';
  performanceImage.style.display = 'none';
  performanceImage.style.display = 'none';
  performanceMenu.style.display = 'none';
  // Réactive les zones cliquables
  zones.forEach(z => {
    z.style.pointerEvents = 'auto';
    z.style.cursor = 'pointer';
  });

}

// Gestion du survol et du clic sur les zones
zones.forEach(zone => {
  zone.addEventListener('mouseenter', () => {
    hoverInfo.textContent = zone.dataset.label;
  });

  zone.addEventListener('mouseleave', () => {
    hoverInfo.textContent = "Survolez une zone pour voir l'information";
  });

  zone.addEventListener('click', () => {
    resetAll(); // Réinitialise tout d’abord

    const action = zone.dataset.action;

    // Désactive la zone cliquée
    zone.style.pointerEvents = 'none';
    zone.style.cursor = 'default';

    // Affiche les éléments correspondants selon l’action
    if (action === 'openSubImage') {
      mainImage.style.display = 'none';
      subImage.style.display = 'block';
      menuItems.style.display = 'flex';
    }

    if (action === 'openStrategyImage') {
      mainImage.style.display = 'none';
      strategyImage.style.display = 'block';
      strategyMenu.style.display = 'flex';
    }

    if (action === 'openPerformanceImage') {
      mainImage.style.display = 'none';
      performanceImage.style.display = 'block';
    }

    if (action === 'openPerformanceImage') {
      mainImage.style.display = 'none';
      performanceImage.style.display = 'block';
      performanceMenu.style.display = 'flex';
    }
  });
});

// Gère les clics sur les boutons de menu
document.querySelectorAll('.menu-button').forEach(button => {
  button.addEventListener('click', () => {
    clickResult.textContent = `Vous avez cliqué sur : ${button.textContent}`;
  });
});

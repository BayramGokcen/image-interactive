const zones = document.querySelectorAll('.zone');
const hoverInfo = document.getElementById('hoverInfo');
const mainImage = document.getElementById('mainImage');
const subImage = document.getElementById('subImage');
const strategyImage = document.getElementById('strategyImage');
const performanceImage = document.getElementById('performanceImage');
const supplierImage = document.getElementById('supplierImage');

const menuItems = document.getElementById('menuItemsOverlay');
const strategyMenu = document.getElementById('strategyMenuOverlay');
const performanceMenu = document.getElementById('performanceMenuOverlay');
const clickResult = document.getElementById('clickResult');

const supplierZone = document.getElementById('supplierExpandedZone');
const supplierMenu = document.getElementById('supplierMenuOverlay');

function resetAll() {
  mainImage.style.display = 'block';
  subImage.style.display = 'none';

  menuItems.style.display = 'none';

  strategyImage.style.display = 'none';
  strategyMenu.style.display = 'none';

  performanceImage.style.display = 'none';
  performanceMenu.style.display = 'none';

  supplierImage.style.display = 'none';
  supplierZone.style.display = 'none';
  supplierMenu.style.display = 'none';

  zones.forEach(z => {
    z.style.pointerEvents = 'auto';
    z.style.cursor = 'pointer';
  });
}

zones.forEach(zone => {
  zone.addEventListener('mouseenter', () => {
    hoverInfo.textContent = zone.dataset.label;
  });

  zone.addEventListener('mouseleave', () => {
    hoverInfo.textContent = "Survolez une zone pour voir l'information";
  });

  zone.addEventListener('click', () => {
    resetAll();

    const action = zone.dataset.action;

    zone.style.pointerEvents = 'none';
    zone.style.cursor = 'default';

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
      performanceMenu.style.display = 'flex';
    }

    if (action === 'openSupplierImage') {
      mainImage.style.display = 'none';
      supplierImage.style.display = 'block';
      supplierZone.style.display = 'block';
      supplierMenu.style.display = 'flex';

      zones.forEach(z => {
        z.style.pointerEvents = 'none';
        z.style.cursor = 'default';
      });
    }
  });
});

// 🔁 Nouveau comportement : clic sur la grande zone circulaire = reset
supplierZone.addEventListener('click', resetAll);

// clics sur tous les boutons
document.querySelectorAll('.menu-button').forEach(button => {
  button.addEventListener('click', () => {
    clickResult.textContent = `Vous avez cliqué sur : ${button.textContent}`;
  });
});

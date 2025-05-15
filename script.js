const ZOOM_SCALE = 1.15;
const ZOOM_ORIGIN = 'top left';
const OFFSET_MAIN_TO_SUB = 'translate(45px, -8px)';
const OFFSET_STRATEGY = 'translate(-308px, -5px)';
const OFFSET_PERFORMANCE = 'translate(30px, -5px)';
const OFFSET_SUPPLIER = 'translate(-214px, -20px)';

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
const supplierMenu = document.getElementById('supplierMenuOverlay');
const supplierZone = document.getElementById('supplierExpandedZone');
const clickResult = document.getElementById('clickResult');

function resetAll() {
  mainImage.style.display = 'block';
  subImage.style.display = 'none';
  strategyImage.style.display = 'none';
  performanceImage.style.display = 'none';
  supplierImage.style.display = 'none';

  menuItems.style.display = 'none';
  strategyMenu.style.display = 'none';
  performanceMenu.style.display = 'none';
  supplierMenu.style.display = 'none';

  supplierZone.style.display = 'none';

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

    switch (action) {
      case 'openSubImage':
        mainImage.style.display = 'none';
        subImage.style.display = 'block';
        menuItems.style.display = 'flex';
        break;

      case 'openStrategyImage':
        mainImage.style.display = 'none';
        strategyImage.style.display = 'block';
        strategyMenu.style.display = 'flex';
        break;

      case 'openPerformanceImage':
        mainImage.style.display = 'none';
        performanceImage.style.display = 'block';
        performanceMenu.style.display = 'flex';
        break;

      case 'openSupplierImage':
        mainImage.style.display = 'none';
        supplierImage.style.display = 'block';
        supplierZone.style.display = 'block';
        supplierMenu.style.display = 'flex';
        zones.forEach(z => {
          z.style.pointerEvents = 'none';
          z.style.cursor = 'default';
        });
        break;
    }
  });
});

supplierZone.addEventListener('click', resetAll);

document.querySelectorAll('.menu-button').forEach(button => {
  button.addEventListener('click', () => {
    clickResult.textContent = `Vous avez cliqué sur : ${button.textContent}`;
  });
});
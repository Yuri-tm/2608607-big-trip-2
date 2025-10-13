const RenderPosition = {
  BEFOREBEGIN: 'beforebegin',
  AFTERBEGIN: 'afterbegin',
  BEFOREEND: 'beforeend',
  AFTEREND: 'afterend',
};

function createElement(template) {
  const newElement = document.createElement('div');
  newElement.innerHTML = template;

  return newElement.firstElementChild;
}

/**
 * Renders a component into a container at the specified position.
 * @param {Object} component - The component instance with a getElement() method.
 * @param {Element} container - The DOM element to render into.
 * @param {string} place - The position relative to the container (use RenderPosition).
 */
function render(component, container, place = RenderPosition.BEFOREEND) {
  if (!container || typeof container.insertAdjacentElement !== 'function') {
    console.error('Invalid container provided for rendering:', container);
    return;
}

  let element = null;

  if (component && typeof component.getElement === 'function') {
    element = component.getElement();
  } else if (component instanceof Element) {
    element = component;
  } else if (typeof component === 'string') {
    element = createElement(component);
  } else {
    console.error('Invalid component provided for rendering:', component);
    return;
  }

  container.insertAdjacentElement(place, element);
}

export { RenderPosition, createElement, render };

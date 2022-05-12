function createElementWithAttributes(
  element,
  className,
  textContent,
  type,
  placeholder,
  value
) {
  var element = element ? document.createElement(element) : null;
  className ? element.classList.add(className) : null;
  textContent ? (element.textContent = textContent) : null;
  type ? (element.type = type) : null;
  placeholder ? (element.placeholder = placeholder) : null;
  value ? (element.value = value) : null;
  return element;
}

function changeClasses(element, removeClass, addedClass) {
  element.classList.remove(removeClass);
  element.classList.add(addedClass);
}
export { createElementWithAttributes, changeClasses };

// export default function TraverseElements(el, fn) {
//   if (el && el.classList) {
//     let c = el.classList.contains("css-debugger-ignore");
//     if (el.nodeType == 1 && !c) {
//       fn(el);
//     }
//     if (el.hasChildNodes()) {
//       el.childNodes.forEach((child) => TraverseElements(child, fn));
//     }
//   }
// }
export default function TraverseElements(node, func) {
  func(node);
  node.childNodes.forEach((childNode) => {
    TraverseElements(childNode, func);
  });
}

// if (element.hasChildNodes()) {
//   element.childNodes.forEach(replaceText)
// } else if (element.nodeType === Text.TEXT_NODE) {
//   if (element.textContent.match(/coronavirus/gi)) {
//     const newElement = document.createElement('span')
//     newElement.innerHTML = element.textContent.replace(/(coronavirus)/gi, '<span class="rainbow">$1</span>')
//     element.replaceWith(newElement)
//   }
// }

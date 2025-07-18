const createHeading = (size, text) => {
  if (size > 0 && size < 7) {
    const heading = document.createElement(`h${size}`);
    heading.textContent = text;
    document.body.appendChild(heading);
  } else {
    console.log("Size should be between 1 to 6");
  }
};

createHeading(3, "This is created by js.");

const appendElement = (tagName, content, parentClass) => {
  const parents = document.getElementsByClassName(parentClass);

  if (parents.length === 0) {
    console.error("No element found with the given class.");
    return;
  }

  const parent = parents[0];
  const newNode = document.createElement(tagName);
  newNode.innerText = content;

  if (parent.lastChild) {
    parent.insertBefore(newNode, parent.lastChild);
  } else {
    parent.appendChild(newNode);
  }
};

appendElement("li", "Ice cream", "todo-list");
appendElement("p", "Take a break", "card");

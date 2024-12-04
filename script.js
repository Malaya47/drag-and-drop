// get references to the draggable element and the drop area

const draggableElement = document.getElementById('draggableElement');
const droppableArea = document.getElementById('droppableArea');

// Event handler when dragging starts
draggableElement.addEventListener('dragstart', (event) => {
  // Set the data to be transferred during the drag opration
  event.dataTransfer.setData('text/plain', event.target.id);
});

// Event handler when dropping occurs
droppableArea.addEventListener('drop', (event) => {
  // prevent the default behaviour to allow dropping
  event.preventDefault();

  // Retrieve the data that was set during the drag operation
  const data = event.dataTransfer.getData('text/plain');

  // Find the draggable element based on the data
  const draggableElement = document.getElementById(data);

  // Append the draggable element to the droppable area
  event.target.appendChild(draggableElement);
});

// Event handler when a draggable element is being dragged over the droppable area
droppableArea.addEventListener('dragover', (event) => {
  // Prevent the default behaviour to allow dropping
  event.preventDefault();
});

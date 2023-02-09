// DOM Setter
export { header };

// Header Menu
const header = document.createElement('ul');
const op1 = document.createElement('li');
const op2 = document.createElement('li');
const op3 = document.createElement('li');

op1.textContent = "New Todo";
op2.textContent = "New Project";
op3.textContent = "View Project";

header.appendChild(op1);
header.appendChild(op2);
header.appendChild(op3);

// 
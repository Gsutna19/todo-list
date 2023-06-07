// DOM Setter
import Check from './item-check.js';
import Prio from './item-priority.js';
import Describe from './item-description.js';
import Note from './item-notes.js';
import Due from './item-due-date.js';
export { content, sideBox, header, todo, op1, op2, proList };

// Display Todo
const todo = document.createElement('div');
// const itemName = document.createElement('h3');
// itemName.innerHTML = "Head 3"
const date = document.createElement('p');
date.textContent = "Day 1";
const priority = document.createElement('p');
const description = document.createElement('p');
const note = document.createElement('p');

// itemName.classList.add('name');
date.classList.add('date');
priority.classList.add('prio');
description.classList.add('description');
note.classList.add('note');


// Header Menu
const header = document.createElement('ul');
header.classList.add('head-bar');
const op1 = document.createElement('li');
const op2 = document.createElement('li');

op1.textContent = "New Todo";
op2.textContent = "New Project";

header.appendChild(op1);
header.appendChild(op2);
console.log(header)

// Content
const content = document.createElement('div');
content.classList.add('content');
// Move code below to create todo item into create-item.js, check display TODO for rest of code
// content.appendChild('itemName');
// content.appendChild('date');
// content.appendChild('priority');
// content.appendChild('description');
// content.appendChild('note');
console.log(content)

// Side Display
const sideBox = document.createElement('div');
const projects = document.createElement('div');
const pro = document.createElement('h3');

sideBox.classList.add('side');
pro.textContent = "Projects";

const proList = document.createElement('ul');

projects.appendChild(pro);
sideBox.appendChild(projects);

//Main Display
// content.appendChild(sideBox);
const items = document.createElement('div');
items.classList.add('list');

content.appendChild(items);
import Item from './list-item.js';
import './style.css';
import Project from './project.js';
import Check from './item-check.js';
import Prio from './item-priority.js';
import Describe from './item-description.js';
import Note from './item-notes.js';
import Due from './item-due-date.js';
import { content, sideBox, header, op1, op2, proList } from './display.js';
export { component };

function component() {
    const element = document.createElement('input');
    const btn = document.createElement('button');

    element.setAttribute("type", "text");
    element.setAttribute("id", "taskName");
    btn.innerHTML = "Click";
    // element.innerHTML = "Hello from index js with webpack!";

    
    // document.body.appendChild(element);
    document.body.appendChild(btn);

    // Add new todo task Logic
    op1.onclick = () => {
        // Create a popup text field for task name;
        console.log("Add Task");
    }

    // Add New Project Logic
    op2.onclick = () => {
        // Create a popup text field for project name;
        console.log("Add project");
        console.log(new Project("Cook Pasta"));
        // const list = new Project();
    }
    

    btn.onclick = () => {
        let newTitle = document.getElementById("taskName").value;
        const newItem = new Item(newTitle);
        const newProject = new Project("Romance");
        console.log(newProject);
        console.log(newItem);
        console.log(Check(newItem));
        console.log(Prio(newItem, 1));
        // console.log(newProject.add("First"));
        console.log(Describe(newItem));
        console.log(Note(newItem));
        console.log(Due(newItem));
        console.log((newItem));
        // console.log(newProject.add("Second"));
    }
    return element;
}
document.body.appendChild(header);
document.body.appendChild(sideBox);
// content.appendChild(component());
document.body.appendChild(content);
document.body.appendChild(component());
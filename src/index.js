import Item from './list-item.js';
import Project from './project.js';
import Check from './item-check.js';
import Prio from './item-priority.js';
import Describe from './item-description.js';
import Note from './item-notes.js';
import Due from './item-due-date.js';
import { header } from './display.js';
export { component };

function component() {
    const element = document.createElement('input');
    const btn = document.createElement('button');

    element.setAttribute("type", "text");
    element.setAttribute("id", "taskName");
    btn.innerHTML = "Click";
    // element.innerHTML = "Hello from index js with webpack!";

    
    document.body.appendChild(btn);
    
    btn.onclick = () => {
        let newTitle = document.getElementById("taskName").value;
        const newItem = new Item(newTitle);
        const newProject = new Project("Romance");
        console.log(newProject);
        console.log(newItem);
        console.log(Check(newItem));
        console.log(Prio(newItem, 1));
        console.log(newProject.add("First"));
        console.log(Describe(newItem));
        console.log(Note(newItem));
        console.log(Due(newItem));
        console.log((newItem));
        // console.log(newProject.add("Second"));
    }
    return element;
}
document.body.appendChild(header);
document.body.appendChild(component());
import Item from './list-item.js';
import Check from './item-check';
import Prio from './item-priority';
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
        const newItem = new Item(newTitle, "2", "3", "5");
        console.log(newItem);
        console.log(Check(newItem));
        console.log(Prio(newItem, 1));
    }
    return element;
}

document.body.appendChild(component());
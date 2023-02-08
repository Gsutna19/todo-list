import Item from './list-item.js';
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
        const newItem = new Item(newTitle, "2", "3", "4", "5", "6");
        console.log(newItem);
    }
    return element;
}

document.body.appendChild(component());
// import Component from './index.js';

// Create a single todo task
export default class Item {
    constructor(title, description, dueDate, notes, priority = 0, checked = false) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.checked = checked;
    }
    get title() {
        return this._title;
    }
    get description() {
        return this._description;
    }
    get dueDate() {
        return this._dueDate;
    }
    get priority() {
        return this._priority;
    }
    get notes() {
        return this._notes;
    }
    get checked() {
        return this._checked;
    }

    set title(tValue) {
        this._title = tValue;
    }
    set description(dValue) {
        this._description = dValue;
    }
    set dueDate(dateValue) {
        this._dueDate = dateValue;
    }
    set priority(pValue) {
        this._priority = pValue;
    }
    set notes(nValue) {
        this._notes = nValue;
    }
    set checked(checkValue) {
        this._checked = checkValue;
    }
}

// let createItem = () => {
//     console.log(newTodo);
// }

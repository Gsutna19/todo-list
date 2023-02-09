// Create a list to add todo's to
// import Item from './list-item.js';

export default class Project {
    constructor(name = "", id = 0) {
        this.name = name;
        this.id = id;
        this.list = [];
        this.add = function(item) {
            this.list.push(item);
            return this.list;
        }
    }
    get name() {
        return this._name;
    }
    get id() {
        return this._id;
    }
    set name(nameValue) {
        this._name = nameValue;
    }
    set id(idValue) {
        this._id = idValue;
    }
}
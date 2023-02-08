// Check list item logic
import Item from './list-item.js';

export default function check(item) {

    if(item.checked) {
        item.checked = !item.checked;
    } else {
        item.checked = true;
    }
    return item.checked;
    // console.log(item.checked);
}
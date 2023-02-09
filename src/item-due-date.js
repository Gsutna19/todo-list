// Change due date of todos
import { format } from 'date-fns';

export default function due(item) {

    item.dueDate = format(new Date(2014, 1, 11), 'MMM dd yy');

    // console.log(item.dueDate);
    return item.dueDate;
}
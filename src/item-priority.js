// Change item priority [0 low, 1 medium, 2 high, 3 highest]
export default function changePrio(item, prio) {
    item.priority = prio;

    return item.priority;
}
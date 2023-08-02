const valueChange = (value: number, unit: 'px' | 'rem' | 'em') => `${value}${unit}`;

export function nextSlide({ position, width, caruselItem, list, countBlock, count, listElems }: any): { newPosition: number, newCountBlock: number } {
    //new, т.к. я не смог просто запихнуть position, там реакт, состояния, все дела
    let newPosition: number;
    let newCountBlock: number;
    if (position === -(width * caruselItem)) {
        newPosition = 0;
        list.style.marginLeft = valueChange(newPosition, 'px');
        newCountBlock = 0;
    } else {
        newPosition = position - width * count;
        newPosition = Math.max(newPosition, -width * (listElems.length - count));
        list.style.marginLeft = valueChange(newPosition, 'px');
        newCountBlock = countBlock + 1;
    }
    console.log(position);
    console.log(width * caruselItem);

    return { newPosition, newCountBlock };
}

export function prevSlide({ position, width, caruselItem, list, countBlock, count }: any): { newPosition: number, newCountBlock: number } {
    let newPosition: number;
    let newCountBlock: number;
    if (position === 0) {
        newPosition = -width * caruselItem;
        list.style.marginLeft = valueChange(newPosition, 'px');
        newCountBlock = caruselItem;
    } else {
        newPosition = position + width * count;
        newPosition = Math.min(newPosition, 0);
        list.style.marginLeft = valueChange(newPosition, 'px');
        newCountBlock = countBlock - 1;
    }
    return { newPosition, newCountBlock };
}
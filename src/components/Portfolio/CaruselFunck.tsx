const valueChange = (value: number, unit: 'px' | 'rem' | 'em') => `${value}${unit}`;


interface SlideBlockProps {
    position: number;
    width: number;
    caruselItem: number;
    list: HTMLElement;
    countBlock: number;
    count: number;
    listElems?: NodeListOf<HTMLElement>;
}


export const nextSlide =
    ({
        position,
        width,
        caruselItem,
        list,
        countBlock,
        count,
        listElems
    }: SlideBlockProps) => {
        if (listElems) {
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

            return { newPosition, newCountBlock };
        }

    }

export const prevSlide =
    ({
        position,
        width,
        caruselItem,
        list,
        countBlock,
        count,
    }: SlideBlockProps) => {

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

//карусель для тарифов, пришлось дублировать половинный функционал
//можно было костяк в отдельную функцию запихнуть
export const nextSlideTarif =
    ({
        position,
        width,
        caruselItem,
        list,
        countBlock,
        count,
        listElems
    }: SlideBlockProps) => {
        if (listElems) {
            //new, т.к. я не смог просто запихнуть position, там реакт, состояния, все дела
            let newPosition: number;
            let newCountBlock: number;
            const listElemsArr = Array.from(listElems);

            if (countBlock === 0 || countBlock === listElemsArr.length - 2) {
                newCountBlock = countBlock + 1;
                newPosition = position - width * count;
            }
            else {
                if (position <= -(width * caruselItem) + width) {
                    newPosition = 0;
                    list.style.marginLeft = valueChange(newPosition, 'px');
                    newCountBlock = 0;
                } else {
                    newPosition = position - width * count;
                    newPosition = Math.max(newPosition, -width * (listElems.length - count));
                    list.style.marginLeft = valueChange(newPosition, 'px');
                    newCountBlock = countBlock + 1;
                }
            }
            return { newPosition, newCountBlock };
        }
    }

export const prevSlideTarif =
    ({
        position,
        width,
        caruselItem,
        list,
        countBlock,
        count,
        listElems
    }: SlideBlockProps) => {
        if (listElems) {
            let newPosition: number;
            let newCountBlock: number;
            const listElemsArr = Array.from(listElems);

            if (countBlock === 1 || countBlock === listElemsArr.length - 1) {
                if (position === -width && countBlock === 1) {
                    newPosition = 0;
                    list.style.marginLeft = valueChange(newPosition, 'px');
                }

                else {
                    newPosition = position + width * count;
                }
                newCountBlock = countBlock - 1;
            }

            else {

                if (position >= 0) {
                    // чтобы был виден предпоследний тариф, прокручиваем как на 2
                    newPosition = (-width * caruselItem) + width;
                    list.style.marginLeft = valueChange(newPosition, 'px');
                    newCountBlock = caruselItem;
                } else {
                    newPosition = position + width * count;
                    newPosition = Math.min(newPosition, 0);
                    list.style.marginLeft = valueChange(newPosition, 'px');
                    newCountBlock = countBlock - 1;
                }
            }
            return { newPosition, newCountBlock };
        }
    }

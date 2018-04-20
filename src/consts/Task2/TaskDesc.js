import React from 'react';

export const taskDesc = <div className={"taskDescDialog"}>
    <p>Йо, второе задание будет чуть сложннее. Как вы заметили, в столбцах и строках появились нули. Это те самые минимумы.</p>
    <p>Нужно выбрать все нули так, чтобы в каждой строке и каждом столбце было по одному 0. Причём выборка идёт из верхнего левого угла вниз по столбцам вправо. Если нулей в столбце несколько, то берётся первый попавшийся.</p>
    <p>По итогу должны остаться одна строка и один столбец, в которых отсутствуют нули.</p>
    <p>Для наглядности на визуализации красным цветом выделяются рёбра графа, показывающие, кто на данный момент доставляет куда свой продукт.</p>
</div>;

export default taskDesc;
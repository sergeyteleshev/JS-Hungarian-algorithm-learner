import React from 'react';

export const taskDesc = <div className={"taskDescDialog"}>
    <p>А ты хорош! Дальше интересней. У нас остался один столбец и одна строка без нулей. Без паники, это легально. Теперь нам надо построить специальную змейку.</p>
    <p>Берём столбец без нулей, и выбираем в нём сверху вниз первый попавшийся 0(<span className={"green"}>0'</span>). Для удобства назовём его <span className={"green"}>0'</span>. Затем ищем другой уже выделенный <span className={"yellow"}>0</span> и выбираем его. Затем в этом столбце или строке ищем не выделинный ничем 0. Получается такая змейка вида <span className={"green"}>0'</span> -> <span className={"yellow"}>0</span> -> <span className={"green"}>0'</span> -> <span className={"yellow"}>0</span> -> ... -> <span className={"green"}>0'</span>.</p>
    <p>Причём важно, чтобы первым и последним элементом был <span className={"green"}>0'</span>!</p>
</div>;

export default taskDesc;
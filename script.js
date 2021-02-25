const changeItemsButton = document.querySelector(`#changeItems`);
const changeItemsVerticalButton = document.querySelector(`#changeItemsVertical`);
const changeSizeButton = document.querySelector(`#changeSize`);

const horizontalBlock = document.querySelector(`.horizontal`);
const verticalBlock = document.querySelector(`.vertical`);
const firstArticle = document.querySelector(`.firstElem`);

const rowReverseClass = `horizontal--reverse`;
const columnReverseClass = `vertical--reverse`;
const elementGrowClass = `firstElem--grow`;

const toggleRow = () => {
    horizontalBlock.classList.toggle(rowReverseClass);
};

const toggleColumn = () => {
    verticalBlock.classList.toggle(columnReverseClass);
};

const growElement = () => {
    firstArticle.classList.toggle(elementGrowClass);
};

changeItemsButton.addEventListener(`click`, toggleRow);
changeItemsVerticalButton.addEventListener(`click`, toggleColumn);
changeSizeButton.addEventListener(`click`, growElement)

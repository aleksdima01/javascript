const boxes = document.querySelector(".boxes");
const addBtn = document.querySelector(".add");
const delBtn = document.querySelector(".delete");
const cloneBtn = document.querySelector(".clone");

addBtn.addEventListener('click', () => {
    let number = 0;
    if (boxes.children.length != 0) {
        number = Number(boxes.lastElementChild.textContent);
    }
    else {
        number === 0;
    }
    boxes.insertAdjacentHTML('beforeend', `<div class="box">${number + 1}</div>`);
})
delBtn.addEventListener('click', () => {
    if (boxes.children.length > 0) {
        boxes.lastElementChild.remove();
    }
})
cloneBtn.addEventListener('click', () => {
    const number = Number(boxes.lastElementChild.textContent);
    boxes.insertAdjacentHTML('beforeend', `<div class="box">${number}</div>`);
})
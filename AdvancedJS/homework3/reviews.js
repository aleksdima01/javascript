const productName = document.querySelector(".product_name");
const noReviews = document.createElement("p");
noReviews.innerHTML = `<p style='color: red;'>Отзывов пока нет!</p`;

function checkEmpty() {
    if (localStorage.length != 0) {
        for (let index = 0; index < localStorage.length; index++) {
            const element = localStorage.key(index);
            productName.insertAdjacentHTML("beforeend", `<li class="top_li top_li2">${localStorage.key(index)}<ul class="product_review hidden">${localStorage.getItem(localStorage.key(index))}
            </ul></li>`)
        }
    } else {
        productName.prepend(noReviews);
    }
}
checkEmpty();

const toWriteReview = document.querySelector('.to_write_review');
toWriteReview.addEventListener('click', () => {
    window.location.href = './index.html';
})

const topLi = document.querySelectorAll(".top_li");
topLi.forEach(element => {
    element.addEventListener('click', (e) => {
        if (e.target.classList.contains("top_li")) {
            e.target.closest(".top_li").firstElementChild.classList.toggle("hidden");
            element.closest("li").classList.toggle("top_li2");
        }
        if (e.target.classList.contains("delete_button")) {
            const key = e.target.parentNode.parentNode.childNodes[0].textContent;
            e.target.previousElementSibling.remove();
            const productReview = e.target.parentNode.parentNode.querySelector('.product_review');
            const targetParent = e.target.parentNode;
            e.target.remove();
            localStorage.setItem(key, productReview.innerHTML);
            let storage = localStorage.getItem(key);
            storage = storage.replaceAll('\n', '').trim();
            if (storage == '') {
                localStorage.removeItem(key);
                targetParent.parentNode.remove();
                if (localStorage.length == 0)
                    checkEmpty();
            }
        }
    });
})
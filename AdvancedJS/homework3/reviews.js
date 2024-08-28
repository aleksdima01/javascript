const productName = document.querySelector(".product_name");
const noReviews = document.createElement("p");
noReviews.innerHTML = `<p style='color: red;'>Отзывов пока нет!</p`;
if (localStorage.length != 0) {
    for (let index = 0; index < localStorage.length; index++) {
        const element = localStorage.key(index);
        console.log(element);
        productName.insertAdjacentHTML("beforeend", `<li>${localStorage.key(index)}<ul class="product_review">
                ${localStorage.getItem(localStorage.key(index))}
            </ul></li>`)
    }
} else {
    productName.prepend(noReviews);
}

const toWriteReview = document.querySelector('.to_write_review');
toWriteReview.addEventListener('click', () => {
    window.location.href = './index.html';
})
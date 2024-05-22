
async function getData(url) {
    try {
        const response = await fetch(url);
        const dataFromJson = await response.json();
        return dataFromJson;
    }
    catch (error) {
        console.error(`ошибка - ${error}`);
    }
}
const data = await getData("./data.json");
console.log(data);

const itemBox = document.querySelector(".item-box");
data.forEach(element => {
    itemBox.insertAdjacentHTML("beforeend", `
    <div class="item">
    <a href="../homework2/single-page.html" class="item-link">
        <div class="item-link__img">
            <img class="item-img" src="${element.image}" alt="img">
        </div>
        <div class="txt-box">
            <p class="description">${element.name}</p>
            <p class="item-price">$${element.price}</p>
        </div>
    </a>
    <div class="add-box">
        <a href="222222" class="add">
            <img src="img/cart-add.svg" alt="cart" class="cart">
            <p class="add-txt">Add to Cart</p>
        </a>
        <div class="add__icons">
            <a href="33333" class="add add_size">
                <img src="img/arrows.png" alt="arrows" class="add-icons">
            </a>
            <a href="444444" class="add add_size">
                <img src="img/heart.png" alt="heart" class="add-icons">
            </a>
        </div>
    </div>
</div>`)
});

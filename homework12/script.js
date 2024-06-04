
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
        <a class="add add_index">
            <img src="img/cart-add.svg" alt="cart" class="cart">
            <p class="add-txt">Add to Cart</p>
        </a>
        <div class="add__icons">
            <a href="33333" class="add add_size ">
                <img src="img/arrows.png" alt="arrows" class="add-icons">
            </a>
            <a href="444444" class="add add_size">
                <img src="img/heart.png" alt="heart" class="add-icons">
            </a>
        </div>
    </div>
</div>`)
});

const items = document.querySelectorAll(".item");
const cartMenuMegaBox = document.querySelector(".cart-menu__mega-box");
const addToCart = document.querySelectorAll(".add_index");
const tmpText = cartMenuMegaBox.querySelector(".temporary_text");
const arr = [];
addToCart.forEach((e, index) => {
    e.addEventListener('click', () => {
        const item = e.parentElement.parentElement;
        tmpText.remove();
        if (arr.length === 0) {
            cartMenuMegaBox.innerHTML = ``
        }
        item.classList.add("add_to_cart");
        if (item.classList.contains('add_to_cart')) {
            cartMenuMegaBox.insertAdjacentHTML("afterbegin", `
                    <div class="cart-menu__menu-item">
                    <a href="../homework2/single-page.html" class="cart-menu__menu-item__img">
                    <img src="${data[index].image}" class="cart_img" alt="cart-menu-man">
                    </a>
                    <a href="../homework2/single-page.html" class="cart-menu__menu-item__text-a">
                        <div class="cart-menu__menu-item__text">
                            <h3 class="cart-menu__menu-item__h3">${data[index].name}</h3>
                            <p>
                                <i class="fa fa-star" style="color: #e4af48;font-size: 12px;line-height: 1.2;
                        font-weight: 400;text-transform: uppercase;"></i>
                                <i class="fa fa-star" style="color: #e4af48;font-size: 12px;line-height: 1.2;
                        font-weight: 400;text-transform: uppercase;"></i>
                                <i class="fa fa-star" style="color: #e4af48;font-size: 12px;line-height: 1.2;
                        font-weight: 400;text-transform: uppercase;"></i>
                                <i class="fa fa-star" style="color: #e4af48;font-size: 12px;line-height: 1.2;
                        font-weight: 400;text-transform: uppercase;"></i>
                                <i class="fa fa-star" style="color: #e4af48;font-size: 12px;line-height: 1.2;
                        font-weight: 400;text-transform: uppercase;"></i>
                            </p>
                            <p class="cart-menu__menu-item__p">1<span>x</span> $${data[index].price}</p>
                        </div>
                    </a>
                    <a href="#" class="fa-times-circle-cart"><i class="fa fa-times-circle"
                            style="color:#c0c0c0;font-size: 16px;font-weight: 400;line-height: 1.2;padding-left: 50px;"></i></a>
                    </div>
                     `)
            item.classList.replace('add_to_cart', 'added_to_cart');
            arr.push('+');
        }
        const cartDelButtons = document.querySelector(".fa-times-circle-cart");
        cartDelButtons.addEventListener('click', (e) => {
            const cartMenuItem = document.querySelectorAll(".cart-menu__menu-item");
            e.target.parentElement.classList.add('delete_progress');
            if (e.target.parentElement.classList.contains('delete_progress')) {
                cartMenuItem.forEach(cartItem => {
                    const nededItem = cartItem.lastElementChild;
                    if (nededItem.classList.contains('delete_progress')) {
                        cartItem.remove();
                        arr.pop();
                        item.classList.remove('added_to_cart');
                        if (arr.length === 0) {
                            cartMenuMegaBox.innerHTML = `
                            <p class="temporary_text" style="color: #6f6e6e;font-family: Lato;font-size: 17px;line-height: 15px; font-weight:400;">Put something here</p>`
                        }
                    }
                })
            }
        })
    })
})
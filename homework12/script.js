
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
const addToCart = document.querySelectorAll(".add_index")
addToCart.forEach((e, index) => {
    e.addEventListener('click', () => {
        const item = e.parentElement.parentElement;
        item.classList.add("add_to_cart");
        if (item.classList.contains('add_to_cart')) {
            cartMenuMegaBox.insertAdjacentHTML("beforeend", `
                    <div class="cart-menu__menu-item">
                    <a href="../homework2/single-page.html" class="cart-menu__menu-item__img">
                    <img src="${data[index].image}" class="cart_img" alt="cart-menu-man">
                    </a>
                    <a href="../homework2/single-page.html" class="cart-menu__menu-item__text-a">
                        <div class="cart-menu__menu-item__text">
                            <h3 class="cart-menu__menu-item__h3">Rebox Zane</h3>
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
                            <p class="cart-menu__menu-item__p">1 <span>x</span> $250</p>
                        </div>
                    </a>
                    <a href="#" class="fa-times-circle-cart"> <i class="fa fa-times-circle"
                            style="color:#c0c0c0;font-size: 16px;font-weight: 400;line-height: 1.2;margin-left: 55px;"></i></a>
                    </div>
                    <div class="cart-menu__menu-item__border"></div>
                    `)
            item.classList.replace('add_to_cart', 'added_to_cart');
            console.log(addToCart);
        }
        const cartDelButtons = document.querySelectorAll(".fa-times-circle-cart");
        const cartMenuItem = document.querySelector(".cart-menu__menu-item");
        const cartMenuItemBorder = document.querySelector(".cart-menu__menu-item__border");
        // console.log(cartDelButtons);
        cartDelButtons.forEach(delEl => {
            delEl.addEventListener('click', (target) => {
                //console.log(cartDelButtons);
                console.log(target);
                item.classList.add('delete_progress');
                if (item.classList.contains('delete_progress')) {
                    // console.log(cartMenuMegaBox.children);
                    //  cartMenuItem.remove();
                    // cartMenuItemBorder.remove();
                    //  console.log(cartDelButtons);
                    item.classList.remove('delete_progress');
                    item.classList.remove('added_to_cart');
                }


            })
        })
    })
})



// <img src="${el.querySelector(".item-img").src}" class="cart_img" alt="cart-menu-man">



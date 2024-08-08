/*
Задача 2.
 
Бесконечная лента фотографий
Для создания бесконечной ленты с фотографиями с использованием 
Unsplash API, выполните следующие шаги:
1. Зарегистрируйтесь на Unsplash:
○ Перейдите на веб-сайт Unsplash (https://unsplash.com/).
○ Нажмите кнопку "Join" или "Регистрация", чтобы создать аккаунт, если у вас его еще нет.
○ Войдите в свой аккаунт Unsplash.
 
2. Создайте приложение:
○ После входа в аккаунт Unsplash, перейдите на страницу разработчика Unsplash
(https://unsplash.com/developers).
○ Нажмите на кнопку "Your apps".
○ Нажмите "New Application" (Новое приложение).
○ Заполните информацию о вашем приложении, такую как имя, описание и сайт (вы можете
использовать http://localhost для тестового сайта).
○ После заполнения информации, нажмите "Create Application" (Создать приложение).
 
3. Получите API-ключ:
○ После создания приложения, вы получите API-ключ. Этот ключ будет
отображаться в вашей панели управления приложением.
○ API-ключ представляет собой строку вида YOUR_ACCESS_KEY.
Скопируйте его.
4. Измените код HTML и JavaScript:
○ Откройте вашу HTML-страницу в текстовом редакторе или
интегрированной среде разработки.
○ Замените 'YOUR_ACCESS_KEY' в коде JavaScript на ваш собственный
API-ключ.
 
5. Реализуйте загрузку фотографий при открытии страницы.
 
6. Реализуйте бесконечную подгрузку фотографий при прокручивании страницы.
*/

const accessKey = "Введите свой ключик Access key https://unsplash.com/";


let photoId = null;
let imgIdArray = [];
if (localStorage.getItem('array') !== null) {
    for (let index = 0; index < localStorage.getItem("array").split(',').length; index++) {
        imgIdArray.push(localStorage.getItem("array").split(',')[index]);
    }
}
const photoContainer = document.querySelector('#photo-container');
const likeButton = document.querySelector('.button');
const fetchPhotos = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Ошибка при загрузке данных!");
        }
        const data = await response.json();
        photoId = data.id;
        if (!imgIdArray.includes(photoId)) {
            imgIdArray.push(photoId);
        }
        localStorage.setItem('array', imgIdArray);
        addPhotoInHTML(data);
    } catch (error) {
        photoContainer.textContent = error.message;
        photoContainer.setAttribute('style', 'font-size: 30px;');
    }
}

fetchPhotos(`https://api.unsplash.com/photos/random/?client_id=${accessKey}`);


function addPhotoInHTML(data) {
    const photoContainer = document.querySelector("#photo-container");
    const divButton = document.querySelector(".div-button");
    const lbtn = document.querySelector(".lbtn");
    divButton.insertAdjacentHTML('beforebegin', `<div class="photo"><img src="${data.urls.regular}" alt="${data.alt_description}"></div>`);
    lbtn.insertAdjacentHTML('afterend', `
    <div class="text">
    <p>Автор: <span>${data.user.name}</span></p>
    <p>Об авторе: <span> ${data.user.bio == null ? "Нет информации" : data.user.bio}</span></p>
    <p>Портфолио: <span><a href="${data.user.portfolio_url == null ? "#" : data.user.portfolio_url}">${data.user.portfolio_url == null ? "Нет информации" : data.user.portfolio_url}</a></span></p>
    <p>Likes: <span class="likes">${localStorage.getItem(photoId) == null ? data.likes : localStorage.getItem(photoId)}</span></p>
        </div>`);
}

likeButton.addEventListener('click', () => {
    let countLikes = Number(document.querySelector(".likes").textContent);
    countLikes += 1;
    document.querySelector(".likes").textContent = countLikes;
    localStorage.setItem(photoId, countLikes);
})

const previousButton = photoContainer.querySelector(".lbtn");

if (imgIdArray.length == 0) {
    previousButton.setAttribute('style', 'pointer-events:none');
    previousButton.firstChild.firstChild.textContent = 'Нет фото'
}
else {
    previousButton.removeAttribute('style', 'pointer-events:none');
    previousButton.firstChild.firstChild.textContent = 'Предыдущее фото'
}
previousButton.addEventListener('click', () => {
    const text = document.querySelector(".text");
    const photo = document.querySelector(".photo");
    text.remove();
    photo.remove();
    if (imgIdArray.length == 2) {
        previousButton.setAttribute('style', 'pointer-events:none');
        previousButton.firstChild.firstChild.textContent = 'Нет фото'
    }
    imgIdArray.pop();
    fetchPhotos(`https://api.unsplash.com/photos/${imgIdArray.pop()}/?client_id=${accessKey}`);
})




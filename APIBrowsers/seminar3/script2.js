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

const accessKey = "TyMRWcupI3f3jbHbY_iRHyMOq5NeMcJWPGqaGJ5e_aY";

let isFetcing = false;

const photoContainer = document.querySelector('#photo-container');
const fetchPhotos = async (page) => {
    try {
        const response = await fetch(`https://api.unsplash.com/photos/?client_id=${accessKey}&page=${page}`);
        if (!response.ok) {
            throw new Error("Ошибка при загрузке данных");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
    finally {
        isFetcing = false;
    }

}

let currentPage = 1;
async function run() {
    try {
        const data = await fetchPhotos(currentPage);
        addPhotosInHTML(data);
    } catch (error) {
        const errorMessage = document.createElement("div");
        errorMessage.textContent = error.message;
        photoContainer.append(errorMessage);
    }

}

run();


function addPhotosInHTML(data) {
    for (const obj of data) {
        //      console.log(obj);
        photoContainer.insertAdjacentHTML('beforeend', `
              <div class="photo"><img src="${obj.urls.regular}" alt="${obj.alt_description}"></div>`)
    }
}



window.addEventListener('scroll', async () => {
    const percentScroll = (window.scrollY / (document.body.clientHeight - window.innerHeight)) * 100
    console.log(percentScroll);
    if (percentScroll >= 90 && !isFetcing) {
        isFetched = true;

        try {
            const data = await fetchPhotos(++currentPage);
            addPhotosInHTML(data);
        } catch (error) {
            alert(error.message)
        }
    }
})
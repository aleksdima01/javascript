const articlesData = [
    {
        title: 'Заголовок статьи 1',
        content: 'Содержимое статьи 1'
    },
    {
        title: 'Заголовок статьи 2',
        content: 'Содержимое статьи 2'
    }
];

const article = document.querySelector('.article');
if (localStorage.getItem('article') !== null) {
    article.innerHTML = localStorage.getItem('article');
}
else {
    articlesData.forEach(element => {
        article.insertAdjacentHTML('beforeend', ` <div class="each_article"><h2 class="title">${element.title}</h2>
            <p class="text">${element.content}</p>
            <div class="buttons">
            <button type="button" class="modifBtn">Редактировать</button>
            <button type="button" class="removeBtn">Удалить</button></div></div>`)
    });
}
//const modifyBtn = document.querySelectorAll('.modifBtn');
//const removeBtn = document.querySelectorAll('.removeBtn');
//const eachArticle = document
article.addEventListener("click", (e) => {
    if (e.target.textContent == "Редактировать") {
        const articleTitle = e.target.parentNode.parentNode.querySelector('h2');
        const newTitle = prompt("Введите новый заголовк", articleTitle.textContent);
        const articleContent = e.target.parentNode.parentNode.querySelector('p');
        const newContent = prompt("Введите новое содержимое", articleContent.textContent);
        if (newTitle !== null && newContent != null) {
            articleTitle.textContent = newTitle;
            articleContent.textContent = newContent;
        }
        localStorage.setItem('article', article.innerHTML);
    }
    if (e.target.textContent == "Удалить") {
        const thatArticle = e.target.parentNode.parentNode;
        thatArticle.remove();
        localStorage.setItem('article', article.innerHTML);
        console.log(localStorage.getItem('article').length);
        if (localStorage.getItem('article').length < 50) {
            localStorage.clear();
        }
    }

})


newArticleBtn.addEventListener('click', (e) => {
    const newArticle = {
        title: "Новая статья",
        content: "Введите новый текст статьи"
    }
    article.insertAdjacentHTML('beforeend', ` <div class="each_article"><h2 class="title">${newArticle.title}</h2>
        <p class="text">${newArticle.content}</p>
        <div class="buttons">
        <button type="button" class="modifBtn">Редактировать</button>
        <button type="button" class="removeBtn">Удалить</button></div></div>`);
    localStorage.setItem('article', article.innerHTML);
});
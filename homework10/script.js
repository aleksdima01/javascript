const jsData = JSON.parse(data)
console.log(jsData);

const block = document.querySelector('.block');
jsData.forEach(element => {
    block.insertAdjacentHTML("beforeend", `
    <div class="personage">
    <h2 class="name">${element.name}</h2>
    <img src="${element.image}" alt="img">
    <p class="species">${element.species}</p>
    <p class="status">${element.status}</p>
    </div>`);
});

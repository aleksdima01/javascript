save_btn.addEventListener('click', () => {
    localStorage.setItem('text', input_text.value);
    alert('Текст сохранен!');
})
load_btn.addEventListener('click', () => {
    const storageText = localStorage.getItem('text');
    saved_text.textContent = storageText ? storageText : "В хранилище пусто";
})
clear_btn.addEventListener('click', () => {
    const storageText = localStorage.removeItem('text');
    alert("Хранилище очищено!");
})
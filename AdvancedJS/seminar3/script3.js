document.addEventListener('DOMContentLoaded', () => {
    // Загрузка сохраненных настроек
    const loadSettings = () => {
        const savedSettings = localStorage.getItem('furnitureSet');
        if (savedSettings) {
            const settings = JSON.parse(savedSettings);
            document.querySelector('#table-color').value = settings.tableColor;
            document.querySelector('#table-material').value = settings.tableMaterial;
            document.querySelector('#chair-color').value = settings.chairColor;
            document.querySelector('#chair-material').value = settings.chairMaterial;
        }
    };

    loadSettings(); // Загрузка настроек при открытии страницы

    // Сохранение настроек
    document.querySelector('#save-btn').addEventListener('click', () => {
        console.log("aedas");
        const furnitureSet = {
            tableColor: document.querySelector('#table-color').value,
            tableMaterial: document.querySelector('#table-material').value,
            chairColor: document.querySelector('#chair-color').value,
            chairMaterial: document.querySelector('#chair-material').value
        };
        localStorage.setItem('furnitureSet', JSON.stringify(furnitureSet));
        alert('Комплект сохранен!');
    });

    // Загрузка сохраненных настроек
    document.querySelector('#load-btn').addEventListener('click', () => {
        loadSettings();
    });

    // Очистка настроек
    document.querySelector('#clear-btn').addEventListener('click', () => {
        localStorage.removeItem('furnitureSet');
        alert('Настройки очищены!');
        // Очищаем форму
        document.querySelector('#table-color').selectedIndex = 0;
        document.querySelector('#table-material').selectedIndex = 0;
        document.querySelector('#chair-color').selectedIndex = 0;
        document.querySelector('#chair-material').selectedIndex = 0;
    });
});

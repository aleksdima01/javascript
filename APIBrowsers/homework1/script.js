const tableData = [
    {
        className: 'Воркаут',
        time: '10:30',
        maxPeople: 20,
        currentPeople: 4
    },
    {
        className: 'Бокс',
        time: '19:30',
        maxPeople: 8,
        currentPeople: 5
    },
    {
        className: 'Cycle',
        time: '18:30',
        maxPeople: 24,
        currentPeople: 12
    },
    {
        className: 'Плавание',
        time: '13:40',
        maxPeople: 12,
        currentPeople: 7
    }
];

const tableBody = document.querySelector('tbody');
tableData.forEach((element, index) => {
    tableBody.insertAdjacentHTML('beforeend', ` <tr>
        <th scope="row">${index + 1}</th>
        <td>${element.className}</td>
        <td>${element.time}</td>
        <td>${element.maxPeople}</td>
        <td class="addPeople">${element.currentPeople} </td>
        <td><button type="button" class="btn btn-success btn-sm">Записаться</button></td>
    </tr>`);
});

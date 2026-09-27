document.getElementById('dormForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const studentId = document.getElementById('studentId').value;
    const building = document.getElementById('buildingNumber').value;
    const room = document.getElementById('roomNumber').value;

    // Условия валидации (базовые заглушки для проверки)
    let isNonResident = (studentId === '123'); // 1. Иногородний
    let isStudentBuilding = (building === '1'); // 2. Корпус для студентов
    let isRoomFree = (room === '101');          // 3. Комната свободна

    let resultElement = document.getElementById('result');

    // Проверка всех условий из задания[cite: 1]
    if (isNonResident && isStudentBuilding && isRoomFree) {
        resultElement.style.color = 'green';
        resultElement.textContent = 'Все окей! Заявка одобрена.';
    } else {
        resultElement.style.color = 'red';
        resultElement.textContent = 'Отказ! Условия заселения не выполнены.';
    }
});
document.getElementById('dormForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const studentId = document.getElementById('studentId').value;
    const building = document.getElementById('buildingNumber').value;
    const room = document.getElementById('roomNumber').value;

    let isNonResident = (studentId === '123');
    let isStudentBuilding = (building === '1');
    let isRoomFree = (room === '101'); 

    let resultElement = document.getElementById('result');

    
    if (isNonResident && isStudentBuilding && isRoomFree) {
        resultElement.style.color = 'green';
        resultElement.textContent = 'Все окей! Заявка одобрена.';
    } else {
        resultElement.style.color = 'red';
        resultElement.textContent = 'Отказ! Условия заселения не выполнены.';
    }
});
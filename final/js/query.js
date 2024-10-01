document.querySelector('.booking-button').addEventListener('click', function() {
    const dropdown = document.querySelector('.booking-dropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});

document.addEventListener('click', function(event) {
    const bookingDropdown = document.querySelector('.booking-dropdown');
    if (!event.target.closest('.booking-container') && !event.target.closest('.booking-dropdown')) {
        bookingDropdown.style.display = 'none';
    }
});

    document.querySelector('.query-button').addEventListener('click', function() {
    document.getElementById('queryPopup').style.display = 'flex';
});

document.getElementById('closePopup').addEventListener('click', function() {
    document.getElementById('queryPopup').style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === document.getElementById('queryPopup')) {
        document.getElementById('queryPopup').style.display = 'none';
    }
});
function closePopup() {
    document.getElementById('query-popup').style.display = 'none';
}

function saveData(event) {
    event.preventDefault(); // 防止表單默認提交

    const startingPoint = document.getElementById('starting-point').value;
    const destination = document.getElementById('destination').value;

    // 儲存數據到 localStorage
    localStorage.setItem('Departure', startingPoint);
    localStorage.setItem('destination', destination);

    // 跳轉到 map.html
    window.location.href = 'map.html';
}
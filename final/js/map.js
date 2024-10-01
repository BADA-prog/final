
 // 從 localStorage 讀取數據
 const startingPoint = localStorage.getItem('startingPoint');
 const destination = localStorage.getItem('destination');
 
 // 顯示數據
 document.getElementById('starting-point-display').textContent = 'Departure: ' + (startingPoint ? startingPoint : 'Not specified');
 document.getElementById('destination-display').textContent = 'Destination: ' + (destination ? destination : 'Not specified');

 document.getElementById('history-btn').addEventListener('click', function() {
    window.location.href = 'history.html'; // 導航到 'history.html'
  });
 
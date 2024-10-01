document.getElementById('photo-fix').addEventListener('click', function() {
    const menu = document.getElementById('dropdown-menu');
    menu.style.display = menu.style.display === 'none' || menu.style.display === '' ? 'block' : 'none';
});

// 메뉴 항목 클릭 시 처리
const menuItems = document.querySelectorAll('.dropdown-menu li');
menuItems.forEach(item => {
    item.addEventListener('click', function() {
        alert(this.innerText); // 선택된 항목의 텍스트를 알림으로 표시
        document.getElementById('dropdown-menu').style.display = 'none'; // 메뉴 닫기
    });
});

// 클릭 시 메뉴 닫기
window.addEventListener('click', function(event) {
    const menu = document.getElementById('dropdown-menu');
    if (!event.target.closest('#photo-fix') && !event.target.closest('.dropdown-menu')) {
        menu.style.display = 'none';
    }
});





function editNickname() {
    document.getElementById('edit-container').style.display = 'block';
    document.getElementById('nickname-input').value = document.getElementById('nickname-display').innerText.trim();
}

function cancelEdit() {
    document.getElementById('edit-container').style.display = 'none';
}

function confirmEdit() {
    const newNickname = document.getElementById('nickname-input').value.trim();
    document.getElementById('nickname-display').innerText = newNickname || 'CHOCHO'; // 기본값
    cancelEdit();
}

function updateCharCount(input) {
    document.querySelector('.char-count').innerText = `${input.value.length} / 20`;
}

function editPhone() {
    document.getElementById('edit-phone-container').style.display = 'block';
    document.getElementById('phone-input').value = document.getElementById('phone-display').innerText.trim();
}

function cancelEditPhone() {
    document.getElementById('edit-phone-container').style.display = 'none';
}

function confirmEditPhone() {
    const newPhone = document.getElementById('phone-input').value.trim();
    document.getElementById('phone-display').innerText = newPhone || '09791234567'; // 기본값
    cancelEditPhone();
}

function updatePhoneCharCount(input) {
    document.querySelector('.phone-char-count').innerText = `${input.value.length} / 15`;
}

function editEmail() {
    document.getElementById('edit-email-container').style.display = 'block';
    document.getElementById('email-input').value = document.getElementById('email-display').innerText.trim();
}

function cancelEditEmail() {
    document.getElementById('edit-email-container').style.display = 'none';
}

function confirmEditEmail() {
    const newEmail = document.getElementById('email-input').value.trim();
    document.getElementById('email-display').innerText = newEmail || 'email123@gmail.com'; // 기본값
    cancelEditEmail();
}

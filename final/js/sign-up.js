const pageOrder = ['page1', 'page2', 'page3', 'page4'];

function getNextPageId(currentPage) {
  const currentIndex = pageOrder.indexOf(currentPage);
  return (currentIndex >= 0 && currentIndex < pageOrder.length - 1) ? pageOrder[currentIndex + 1] : null;
}

function getPreviousPageId(currentPage) {
  const currentIndex = pageOrder.indexOf(currentPage);
  return (currentIndex > 0) ? pageOrder[currentIndex - 1] : null; // 첫 페이지인 경우 null 반환
}

function togglePageVisibility(currentPage, isVisible) {
  const formPage = document.getElementById(currentPage);
  if (formPage) {
    formPage.style.display = isVisible ? 'block' : 'none';
  } else {
    console.error(`Page with ID "${currentPage}" not found.`);
  }
}

function nextPage(currentPage) {
  if (!validateForm(currentPage)) {
    return;
  }
  
  togglePageVisibility(currentPage, false);
  const nextPageId = getNextPageId(currentPage);
  if (nextPageId) {
    togglePageVisibility(nextPageId, true);
  }
}

function prevPage(currentPage) {
  togglePageVisibility(currentPage, false);
  const previousPageId = getPreviousPageId(currentPage);
  if (previousPageId) {
    togglePageVisibility(previousPageId, true);
  }
}

function validateForm(pageId) {
  switch (pageId) {
    case 'page1':
      return validatePage1();
    case 'page2':
      return validatePage2();
    default:
      return true; // 기본적으로 true 반환
  }
}

function setErrorMessage(elementId, message) {
  document.getElementById(elementId).textContent = message || '';
}

function validatePage1() {
  const id = document.getElementById('id').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const nickname = document.getElementById('nickname').value;

  let isValid = true;

  if (!/^\d{10}$/.test(id)) {
    setErrorMessage('id-error', 'ID must be exactly 10 digits (ఠ్ఠ ˓̭ ఠ్ఠ)');
    isValid = false;
  } else {
    setErrorMessage('id-error');
  }

  if (password.length < 6) {
    setErrorMessage('password-error', 'P/W at least 6 words ( ఠ్ఠ ˓̭ ఠ్ఠ )');
    isValid = false;
  } else {
    setErrorMessage('password-error');
  }

  if (password !== confirmPassword) {
    setErrorMessage('confirmPassword-error', 'Not correct P/W is necessary (ఠ్ఠ ˓̭ ఠ్ఠ)');
    isValid = false;
  } else {
    setErrorMessage('confirmPassword-error');
  }

  if (!nickname) {
    setErrorMessage('nickname-error', 'Nick name is necessary (ఠ్ఠ ˓̭ ఠ్ఠ)');
    isValid = false;
  } else {
    setErrorMessage('nickname-error');
  }

  return isValid;
}

function validatePage2() {
  const city = document.getElementById('city').value;
  const district = document.getElementById('district').value;

  let isValid = true;

  if (!city) {
    setErrorMessage('city-error', '* is necessary (ఠ్ఠ ˓̭ ఠ్ఠ)');
    isValid = false;
  } else {
    setErrorMessage('city-error');
  }

  if (!district) {
    setErrorMessage('district-error', '* is necessary (ఠ్ఠ ˓̭ ఠ్ఠ)');
    isValid = false;
  } else {
    setErrorMessage('district-error');
  }

  return isValid;
}

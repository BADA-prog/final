// Function to show/hide the dropdown menu
function toggleDropdown() {
  const dropdownMenu = document.getElementById('dropdown-menu');
  dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
}

// Function to select a photo from the user's device
// Function to select a photo from the user's device
function selectFromAlbum() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/*'; // Accept image files only
  input.onchange = (event) => {
      const file = event.target.files[0];
      if (file) {
          const reader = new FileReader();
          reader.onload = (e) => {
              const userCharacterImg = document.getElementById('user-character'); // ID를 통해 이미지 참조
              userCharacterImg.src = e.target.result; // 이미지 소스를 업데이트
              hideDropdown(); // 드롭다운 숨기기
          };
          reader.readAsDataURL(file);
      }
  };
  input.click(); // Trigger file selection
}


// Function to select a partner avatar
function selectAvatar() {
  const userCharacterSrc = localStorage.getItem('userCharacterImageSrc');

  if (userCharacterSrc) {
      console.log("User character image source:", userCharacterSrc); // Check the source in console
      document.querySelector('.character img').src = userCharacterSrc; // Update image source
  } else {
      console.error("User character image not found in localStorage.");
  }

  hideDropdown(); // Hide dropdown after selection
}

// Function to delete the photo and revert to the default image
function deletePhoto() {
  document.querySelector('.character img').src = '../../img/user.jpg'; 
  hideDropdown(); // Hide dropdown after deletion
}

// Function to hide the dropdown menu
function hideDropdown() {
  const dropdownMenu = document.getElementById('dropdown-menu');
  dropdownMenu.style.display = 'none'; // Hide the dropdown menu
}

// Event listeners for dropdown menu options
document.addEventListener('DOMContentLoaded', () => {
  const photoFix = document.getElementById('photo-fix');
  if (photoFix) {
      photoFix.addEventListener('click', toggleDropdown);
  } else {
      console.error("Element with ID 'photo-fix' not found.");
  }

  const selectAlbum = document.getElementById('select-album');
  if (selectAlbum) {
      selectAlbum.addEventListener('click', selectFromAlbum);
  } else {
      console.error("Element with ID 'select-album' not found.");
  }

  const selectAvatarButton = document.getElementById('select-avatar');
  if (selectAvatarButton) {
      selectAvatarButton.addEventListener('click', selectAvatar);
  } else {
      console.error("Element with ID 'select-avatar' not found.");
  }

  const deletePhotoButton = document.getElementById('delete-photo');
  if (deletePhotoButton) {
      deletePhotoButton.addEventListener('click', deletePhoto);
  } else {
      console.error("Element with ID 'delete-photo' not found.");
  }

  const cancel = document.getElementById('cancel');
  if (cancel) {
      cancel.addEventListener('click', hideDropdown); // Closes dropdown when clicked
  } else {
      console.error("Element with ID 'cancel' not found.");
  }
}); 

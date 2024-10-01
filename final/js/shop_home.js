// Function to update location
function selectLocation(location) {
    document.getElementById('location').textContent = location;
}

// Function to increase likes
//function increaseLike(element) {
   // let count = parseInt(element.textContent) || 0;
   // element.textContent = count + 1;
//}

// Function to preview the uploaded profile image
function previewImage(event) {
    const reader = new FileReader();
    reader.onload = function() {
        const profileImage = document.getElementById('profile-img');
        profileImage.src = reader.result;
    }
    reader.readAsDataURL(event.target.files[0]);
}
//heart
function toggleLike(event) {
event.stopPropagation(); // Prevents the click event from bubbling up

const icon = event.target;
const likeCountSpan = icon.nextElementSibling;
let likeCount = parseInt(likeCountSpan.textContent, 10);

if (icon.classList.contains('liked')) {
// Remove like
icon.classList.remove('liked');
likeCount--;
} else {
// Add like
icon.classList.add('liked');
likeCount++;
}

likeCountSpan.textContent = likeCount;
}

// Toggle the display of the menu options for each product
document.querySelectorAll('.three-dots-icon').forEach(icon => {
icon.addEventListener('click', function(event) {
event.stopPropagation(); // Prevents the click event from bubbling up

// Close any already open menu
document.querySelectorAll('.three-dots-options.show').forEach(options => {
    if (options.previousElementSibling !== this) {
        options.classList.remove('show');
    }
});

// Toggle the clicked menu
const threeDotsOptions = this.nextElementSibling;
threeDotsOptions.classList.toggle('show');
});
});

// Close the menu when clicking outside of it
window.addEventListener('click', function(event) {
if (!event.target.classList.contains('three-dots-icon')) {
document.querySelectorAll('.three-dots-options.show').forEach(options => {
    options.classList.remove('show');
});
}
});


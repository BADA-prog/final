const addresses = {
  "Taipei City": ["Zhongzheng District", "Da'an District", "Xinyi District", "Taipei District"],
  "New Taipei City": ["Zhonghe District", "Sanxia District", "Luzhou District", "Taoyuan District"],
  "Taoyuan City": ["Zhongli District", "Taoyuan District", "Pingzhen District", "Lao District"],
  "Kaohsiung City": ["Zuoying District", "Lingya District", "Yancheng District", "Mihua District"],
  "Taichung City": ["Xitun District", "Nantou District", "Wuri District", "Tungzhong District"]
};

let fullAddress = ""; 

function updateDistricts() {
  const citySelect = document.getElementById("city");
  const districtSelect = document.getElementById("district");
  const selectedCity = citySelect.value;

  districtSelect.innerHTML = "";

  addresses[selectedCity].forEach(district => {
    const option = document.createElement("option");
    option.value = district;
    option.textContent = district;
    districtSelect.appendChild(option);
  });

  
  updateFullAddress();
}

function updateFullAddress() {
  const city = document.getElementById("city").value;
  const district = document.getElementById("district").value;
  const additionalAddress = document.getElementById("additional-address").value;

  
  fullAddress = `${city || ''} ${district || ''} ${additionalAddress || ''}`.trim();
  console.log("Full Address: ", fullAddress); // 콘솔에 전체 주소 출력

  // hidden input에 전체 주소 저장
  document.getElementById("full-address").value = fullAddress;
}


function getCurrentLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      document.getElementById('location-display').textContent = `Latitude: ${lat}, Longitude: ${lng}`;
    }, () => {
      alert("Failed to retrieve location.");
    });
  } else {
    alert("This browser does not support location services.");
  }
}

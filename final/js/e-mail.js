let countdown;
let timerValue = 300;

function verifyCode() {
  const code1 = document.getElementById("verification-code-1").value;
  const code2 = document.getElementById("verification-code-2").value;
  const code3 = document.getElementById("verification-code-3").value;
  const code4 = document.getElementById("verification-code-4").value;

  const code = code1 + code2 + code3 + code4;

  
  if (code === "1234") {  
    alert("Verification successful!");
    document.getElementById("multiStepForm").submit();  // 폼 제출
  } else {
    alert("Invalid code. Please try again.");
  }
}


function getEmailFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  const email = urlParams.get('user-email'); 
  
  const emailDisplay = document.getElementById('email-display');
  if (!email) {
    emailDisplay.textContent = "No email provided";
    emailDisplay.style.cursor = 'pointer'; 
    emailDisplay.onclick = () => {
      alert("(　-̥̥̥̥̥̥̥̥̥̥̥̥̥̥̥̥̥̥̥̥̥̥̥̥̥᷄ _ -̥̥̥̥̥̥̥̥̥̥̥̥̥̥̥̥̥̥̥̥̥̥̥̥̥᷅ )");
    };
  } else {
    emailDisplay.textContent = email;
  }
  
  startTimer(); 
}

function resendCode() {
  alert("A new verification code has been sent to your email.");
  resetTimer(); 
}

function resetTimer() {
  clearInterval(countdown); 
  timerValue = 300; 
  startTimer(); 
}

function startTimer() {
  const timerDisplay = document.getElementById('timer-display');
  timerDisplay.textContent = `${timerValue}s`;

  clearInterval(countdown); 
  countdown = setInterval(() => {
    timerValue--;
    timerDisplay.textContent = `${timerValue}s`;
    if (timerValue <= 0) {
      clearInterval(countdown);
      timerDisplay.textContent = "You can now resend the code.";
    }
  }, 1000);
}

function nextPageWithEmail() {
  const email = document.getElementById("email").value;

  
  if (!email) {
    alert("It is not valid email.");
    return;
  }


  const emailDisplay = document.getElementById('email-display');
  emailDisplay.textContent = email;

  
  document.getElementById('page3').style.display = 'none';
  document.getElementById('page4').style.display = 'block';

  
  startTimer(); 
}

// Toggle Password Visibility
document.getElementById("togglePassword").addEventListener("click", function () {
    let passwordField = document.getElementById("password");
    let eyeIcon = document.getElementById("eyeIcon");

    if (passwordField.type === "password") {
        passwordField.type = "text";
        eyeIcon.src = "eyeo.png";
    } else {
        passwordField.type = "password";
        eyeIcon.src = "eyec.png";
    }
});

// Generate Password
document.getElementById("generateBtn").addEventListener("click", function () {
    let lower = "abcdefghijklmnnopqrstuvwxyz";
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numbers = "0123456789";
    let allChars = lower + upper + numbers;
    let length = 12;
    let password = "";

    for (let i = 0; i < length; i++) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    document.getElementById("password").value = password;
});

// Show "Login Successful" popup
document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent actual form submission
    alert("Login Successfully!");
});

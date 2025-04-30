function formValidate() {

    let fullname = document.getElementById("fullname").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let position = document.getElementById("position").value;
    let branch = document.getElementById("branch").value;
    let terms = document.getElementById("terms").checked;

    let fullnameErr = document.getElementById("fullname-error");
    let phoneErr = document.getElementById("phone-error");
    let emailErr = document.getElementById("email-error");
    let passwordErr = document.getElementById("password-error");
    let positionErr = document.getElementById("position-error");
    let branchErr = document.getElementById("branch-error");

    fullnameErr.textContent = "";
    phoneErr.textContent = "";
    emailErr.textContent = "";
    passwordErr.textContent = "";
    positionErr.textContent = "";
    branchErr.textContent = "";

    let isValid = true;

    if (fullname === "" || /\d/.test(fullname)) {
        fullnameErr.textContent = "Please enter your full name without numbers.";
        isValid = false;
    }

    if (phone === "" || !/^\d{10}$/.test(phone)) {
        phoneErr.textContent = "Phone number must be exactly 10 digits.";
        isValid = false;
    }

    if (email === "" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        emailErr.textContent = "Please enter a valid email address.";
        isValid = false;
    }

    if (password === "" || password.length < 6) {
        passwordErr.textContent = "Password must be at least 6 characters.";
        isValid = false;
    }

    if (position === "Select your role") {
        positionErr.textContent = "Please select your position.";
        isValid = false;
    }

    if (branch === "Select your branch" || branch === "") {
        branchErr.textContent = "Please select your branch.";
        isValid = false;
    }

    if (!terms) {
        alert("Please accept the Terms & Conditions.");
        isValid = false;
    }

    if (isValid) {
        alert("Successfully submitted");
    }

    return isValid;
}

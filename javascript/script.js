// declaring variables for the form inputs fields
const first_name = document.getElementById("first_name");
const last_name = document.getElementById("last_name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("message");
const successAlert = document.getElementById('alert-success');

// *********************************************************
// Error functions

// function to show error message
function showError(input, message) {
    const sibling = input.nextElementSibling; // <label>
    const errorTxt = sibling?.nextElementSibling; // <span class="text-danger">

    if (!errorTxt) {
        console.error('No element for error message found for input:', input);
        return;
    }

    errorTxt.textContent = message;
    errorTxt.style.visibility = message ? 'visible' : 'hidden';
}


// input error 
function inputError(input) {
    input.style.border = '1px solid red';
}

//input success
function inputSuccess(input) {
    input.style.border = '1px solid green';
}

// show success alert
function showSuccessAlert() {

    if (successAlert) {
        successAlert.style.display = 'block';
        setTimeout(() => {
            successAlert.style.display = 'none';
        }, 5000);
    }
}

// show error alert
function showErrorAlert(message) {
    const errorAlert = document.getElementById('alert-danger');
    const errorMessageAlert = document.getElementById('error-message');
    if (errorAlert) {

        if (errorMessageAlert) {
            errorMessageAlert.textContent = message;
            errorAlert.style.display = 'block';
            setTimeout(() => {
                errorAlert.style.display = 'none';
            }, 3000);
        }
    }
}

// *********************************************************
// functions to validate inputs

// function to validate user names field
function validateNames(name, userName) {
    if (name == '') return `${userName} can not be empty`
    if (/[^A-Za-z]/.test(name)) return `${userName} must contain only letters`
    if (name.length < 3) return `${userName} must be at least 3 characters long`
    if (name.length > 50)
        return `${userName} must can not exceed 50 characters long.`
    return ''
}

// function to validate email field
function validateEmail(email) {
    if (email == '') return 'Email can not be empty';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'Email is not valid';
    return '';
}

// function to validate phone number field
function validatePhoneNumber(phone) {
    if (phone == '') return 'Phone number can not be empty';
    if (!/^\d{10}$/.test(phone)) return 'Phone number must be 10 digits long';
    return '';
}

//Function to validate message field
function validateMessage(message) {
    if (message == '') return 'Message can not be empty';
    if (message.length < 10) return 'Message must be at least 10 characters long';
    if (message.length > 500) return 'Message must not exceed 500 characters';
    return '';
}

//***********************************************************
// input event focus listeners for input fields


// event on focus listener for user first name field
first_name.addEventListener('focusout', function () {
    const nameValue = first_name.value.trim();
    const errorMessage = validateNames(nameValue, 'First Name');
    showError(first_name, errorMessage);

    if (errorMessage === '') {
        inputSuccess(first_name);
    } else {
        inputError(first_name);
    }
});

// event on focus listener for user last name field
last_name.addEventListener('focusout', function () {
    const nameValue = last_name.value.trim();
    const errorMessage = validateNames(nameValue, 'Last Name');
    showError(last_name, errorMessage);

    if (errorMessage === '') {
        inputSuccess(last_name);
    } else {
        inputError(last_name);
    }
});

// event on focus listener for user email field
email.addEventListener('focusout', function () {
    const emailValue = email.value.trim();
    const errorMessage = validateEmail(emailValue);
    showError(email, errorMessage);

    if (errorMessage === '') {
        inputSuccess(email);
    } else {
        inputError(email);
    }
});

// event on focus listener for user phone number field
phone.addEventListener('focusout', function () {
    const phoneValue = phone.value.trim();
    const errorMessage = validatePhoneNumber(phoneValue);
    showError(phone, errorMessage);

    if (errorMessage === '') {
        inputSuccess(phone);
    } else {
        inputError(phone);
    }
});

// event on focus listener for user message field
message.addEventListener('focusout', function () {
    const messageValue = message.value.trim();
    const errorMessage = validateMessage(messageValue);
    showError(message, errorMessage);

    if (errorMessage === '') {
        inputSuccess(message);
    } else {
        inputError(message);
    }
});

// validation function for the form inputs
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    //
    if (validateNames(first_name.value) || validateNames(last_name.value) || validateEmail(email.value) || validatePhoneNumber(phone.value) || validateMessage(message.value)) {
        alert("First Name is invalid. Please check your input.");
    } else {

        showSuccessAlert();
        alert("Form submitted successfully!");
    }
});


// declaring variables for the form inputs fields
const first_name = document.getElementById("first_name");
const last_name = document.getElementById("last_name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const successAlert = document.getElementById('alert-success');

function showError(input, message) {
    const sibling = input.nextElementSibling; // This is the <label> element
    const errorTxt = sibling ? sibling.nextElementSibling.querySelector('.error-msg') : null;

    if (!errorTxt) {
        console.error('No element with the class ".error-msg" found for the input:', input);
        return;
    }

    errorTxt.textContent = message;
    errorTxt.parentElement.style.visibility = message ? 'visible' : 'hidden';
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

// function to validate user names field
function validateNames(name, userName) {
    if (name == '') return `${userName} can not be empty`
    if (/[^A-Za-z]/.test(name)) return `${userName} must contain only letters`
    if (name.length < 3) return `${userName} must be at least 3 characters long`
    if (name.length > 50)
        return `${userName} must can not exceed 50 characters long.`
    return ''
}

// event on focus listener for user first name field
first_name.addEventListener('focusout', function () {
    const errorMessage = validateNames(first_name, 'First Name')
    showError(first_name, errorMessage)
    console.log("error... " + showError(first_name, errorMessage));

    // to check the border if inputs are valid
    if (errorMessage == '') {
        inputSuccess(first_name);
    } else {
        inputError(first_name);
    }
});

// validation function for the form inputs
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    //
    if (validateNames(first_name.value)) {
        alert("First Name is invalid. Please check your input.");
    } else {

        showSuccessAlert();
        alert("Form submitted successfully!");
    }
});


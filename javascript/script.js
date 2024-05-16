var regex_Password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,450}$/;
var regex_Numbers = "[0-9]+";
var regex_SpecialCharacter = /[-’/`~!#*$@_%+=.,^&(){}[\]|;:”<>?\\]/g;
var regex_Email = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

var form = document.getElementById('form')

form.addEventListener('submit', function (e) {

    e.preventDefault()

    var firstName = document.getElementById('firstName');
    var lastName = document.getElementById('lastName');
    var email = document.getElementById('reg_Email');
    var password = document.getElementById('reg_Password');
    var con_password = document.getElementById('confirm_Password');


    if (firstName.value == "" && lastName.value == "" && email.value == "" && password.value == "" && con_password.value == "") {

        alert("Please fill in the registration form")

    } else if (firstName.value == "" || firstName.value.match(regex_Numbers) || firstName.value.length < 3 || firstName.value.match(regex_SpecialCharacter)) {

        document.getElementById('firstName').focus()

    } else if (lastName.value == "" || lastName.value.match(regex_Numbers) || lastName.value.length < 3 || lastName.value.match(regex_SpecialCharacter)) {

        document.getElementById('lastName').focus()

    } else if (email.value == "" || !email.value.match(regex_Email)) {

        document.getElementById('reg_Email').focus()

    } else if (password.value == "" || !password.value.match(regex_Password)) {

        document.getElementById('reg_Password').focus()
    }
    else if (con_password.value == "") {

        document.getElementById('confirm_Password').focus()

    } else if (password.value != con_password.value) {

        alert("Password does not match")


    } else {

        form.reset();
        alert("Successful Student Registration, Welcome to Wellness Connect ")

    }


})


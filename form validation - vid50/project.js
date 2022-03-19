const name = document.getElementById("name")
let email = document.getElementById("email")
let phone = document.getElementById("phone")
let submit = document.getElementById("submit")
let validemail = false
let validphone = false
let validname = false

name.addEventListener("blur", () => {
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){0,10}$/
    let str = name.value
    console.log(regex, str)

    if (regex.test(str)) {
        console.log("name matched")
        name.classList.remove("is-invalid");
        validname = true;
    }

    else {
        console.log("name does not match")
        name.classList.add("is-invalid")
        validname = false;
    }
})

email.addEventListener("blur", () => {
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value
    console.log(regex, str)

    if (regex.test(str)) {
        console.log("email matched")
        email.classList.remove("is-invalid");
        validemail = true;
    }

    else {
        console.log("email does not match")
        email.classList.add("is-invalid")
        validemail = false;
    }
})

phone.addEventListener("blur", () => {
    let regex = /([0-9]){10}$/
    let str = phone.value
    console.log(regex, str)

    if (regex.test(str)) {
        console.log("phone number matched")
        phone.classList.remove("is-invalid");
        validphone = true;
    }

    else {
        console.log("phone number does not match")
        phone.classList.add("is-invalid")
        validphone = false;
    }
})

submit.addEventListener("click", (e) => {
    e.preventDefault()

    if (validemail && validname && validphone == true) {
        let failure = document.getElementById('failure');
        console.log('Phone, email and user are valid. Submitting the form');
        let success = document.getElementById('success');
        success.classList.add("show")
        failure.classList.remove("show")
    }

    else {
        console.log('One of Phone, email or user are not valid. Hence not submitting the form. Please correct the errors and try again');
        let success = document.getElementById('success');
        let failure = document.getElementById('failure');
        failure.classList.add('show');
        success.classList.remove("show")
    }

})


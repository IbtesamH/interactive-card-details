// store all needed html elements in variables
let cardNumber = document.getElementById("card-number");
let cardName = document.getElementById("card-name");
let cardDate = document.getElementById("expirary-date");
let cardMonth = document.getElementById("card-month");
let cardYear =  document.getElementById("card-year");
let cardcvc = document.getElementById("card-back-number")

let form = document.getElementById("form-fields");
let formName = document.getElementById("name");
let formNumber = document.getElementById("number");
let formMonth = document.getElementById("month");
let formYear = document.getElementById("year");
let formcvc = document.getElementById("cvc");
let confirmButton = document.getElementById("confirm");
let continueButton = document.getElementById("continue");

let nameError = document.querySelector(".name-error");
let numberError = document.querySelector(".number-error");
let dateError = document.querySelector(".date-error");
let cvcError = document.querySelector(".cvc-error");

let formContainer = document.getElementById("form");
let completeContainer = document.getElementById("complete");

let success = 0;

//when form name element is clicked, 
//card name element = form name element
formName.addEventListener("keyup", function () {
    if (formName.value.length < 1) {
        cardName.innerHTML = "Felicia Laire";
    }
    else {
        cardName.innerHTML = formName.value;
    }
})

//when form card number is clicked, 
//card number element = form number element
formNumber.addEventListener("keyup", function () {

    if (formNumber.value.length < 1) {
        cardNumber.innerHTML = "9591 6489 6389 1D1E";
    }
    else {
        cardNumber.innerHTML = format(formNumber.value);
    }
})

//when form date element is clicked, 
//card date element = form date element
formMonth.addEventListener("keyup", function () {
    if (formMonth.value.length < 1) {
        cardMonth.innerHTML = "09";
    }
    else {
        cardMonth.innerHTML = formMonth.value;
    }
})
formYear.addEventListener("keyup", function () {
    if (formYear.value.length < 1) {
        cardYear.innerHTML = "00";
    }
    else {
        cardYear.innerHTML = formYear.value;
    }
})

//when form cvc element is clicked, 
//card cvc element = form cvc element
formcvc.addEventListener("keyup", function () {
    if (formcvc.value.length < 1) {
        cardcvc.innerHTML = "000";
    }
    else {
        cardcvc.innerHTML = formcvc.value;
    }
})

//validate form fields
function handleSubmit(e) {
    e.preventDefault();
    success = 0;
    validateName();
    validateNumber();
    validateDate();
    validateCvc();

    if(success == 4) {
        form.style.display = "none";
        completeContainer.style.display = "block";
    }
}

function format(s) {
    return s.toString().replace(/\d{4}(?=.)/g, "$& ");
}

function validateName() {
    let problem = false;
    let letters = /^[a-zA-Z\s]+$/;
    if(formName.value.length < 1 ) {
        nameError.style.visibility = "visible";
        formName.style.borderColor = "hsl(0, 100%, 66%)";
        problem = true;
    }
    else if(formName.value.match(letters)) {
        nameError.style.visibility = "hidden";
        formName.style.borderColor = "hsl(279, 47%, 24%)";
        problem = false;
    }
    else {
        nameError.style.visibility = "visible";
        formName.style.borderColor = "hsl(0, 100%, 66%)";
        problem = true;
    }
    if(!problem) {
        success++;
    }
}

function validateNumber() {
    let numbers = /^[0-9]+$/;
    let problem = false;

    if(formNumber.value.length < 16 && formNumber.value.length > 1) {
        numberError.innerHTML = "Enter full number";
        numberError.style.visibility = "visible";
        formNumber.style.borderColor = "hsl(0, 100%, 66%)";
        problem = true;
    }
    else if(formNumber.value.length < 1) {
        numberError.innerHTML = "Cannot be blank";
        numberError.style.visibility = "visible";
        formNumber.style.borderColor = "hsl(0, 100%, 66%)";
        problem = true;
    }
    else if(!formNumber.value.match(numbers)) {
        numberError.innerHTML = "Wrong format, numbers only";
        numberError.style.visibility = "visible";
        formNumber.style.borderColor = "hsl(0, 100%, 66%)";
        problem = true;
    }
    else {
        numberError.style.visibility = "hidden";
        formNumber.style.borderColor = "hsl(279, 47%, 24%)";
        problem = false;
    }
    if(!problem) {
        success++;
    }
}

// add cases to ensure date and cvc fields only allow number inputs

function validateDate() {
    let problem = false;
    let numbers = /^[0-9]+$/;
    if((formMonth.value.length < 1) || (formYear.value.length < 1))  {
        dateError.innerHTML = "Cannot be blank";
        dateError.style.visibility = "visible";
        formMonth.style.borderColor = "hsl(0, 100%, 66%)";
        formYear.style.borderColor = "hsl(0, 100%, 66%)";
        problem = true;
    }
    else if(formMonth.value > 12) {
        dateError.innerHTML = "Invalid date";
        dateError.style.visibility = "visible";
        formMonth.style.borderColor = "hsl(0, 100%, 66%)";
        formYear.style.borderColor = "hsl(0, 100%, 66%)";
        problem = true;
    }
    else if(!formMonth.value.match(numbers) || !formYear.value.match(numbers)) {
        dateError.innerHTML = "Wrong format, numbers only";
        dateError.style.visibility = "visible";
        formMonth.style.borderColor = "hsl(0, 100%, 66%)";
        formYear.style.borderColor = "hsl(0, 100%, 66%)";
        problem = true;
    }
    else {
        dateError.style.visibility = "hidden";
        formMonth.style.borderColor = "hsl(279, 47%, 24%)";
        formYear.style.borderColor = "hsl(279, 47%, 24%)";
        problem = false;
    }
    if(!problem) {
        success++;
    }
}

function validateCvc() {
    let problem = 0;
    let numbers = /^[0-9]+$/;
    if(formcvc.value.length < 1) {
        cvcError.innerHTML = "Cannot be blank";
        cvcError.style.visibility = "visible";
        formcvc.style.borderColor = "hsl(0, 100%, 66%)";
        problem = true;
    }
    else if(formcvc.value.length < 3) {
        cvcError.innerHTML = "Invalid input";
        cvcError.style.visibility = "visible";
        formcvc.style.borderColor = "hsl(0, 100%, 66%)";
        problem = true;
    }
    else if(!formcvc.value.match(numbers)) {
        cvcError.innerHTML = "Wrong format, numbers only";
        cvcError.style.visibility = "visible";
        formcvc.style.borderColor = "hsl(0, 100%, 66%)";
        problem = true;
    }
    else {
        cvcError.style.visibility = "hidden";
        formcvc.style.borderColor = "hsl(279, 47%, 24%)";
        problem = false;
    }
    if(!problem) {
        success++;
    }
}

confirmButton.addEventListener("click", handleSubmit);
continueButton.addEventListener("click",()=> {
    completeContainer.style.display = "none";
    form.style.display = "block";
});
   
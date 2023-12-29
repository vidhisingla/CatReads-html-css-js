const form = document.getElementById("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const phn = document.getElementById("phone_number");
const pswd = document.getElementById("password");
const cpswd = document.getElementById("cpassword");

var name_er = document.getElementById("name_er");
var email_er = document.getElementById("email_er");
var phn_er = document.getElementById("phn_er");
var pswd_er = document.getElementById("pswd_er");
var cpswd_er = document.getElementById("cpswd_er");

form.addEventListener('submit', submitForm);

function submitForm(event){
    event.preventDefault();
    validateform();
}

function validateform(){

    const nameval = name.value.trim();
    const emailval = email.value.trim();
    const phnval = phn.value.trim();
    const pswdval = pswd.value.trim();
    const cpswdval = cpswd.value.trim();

    if(nameval == ""){
        name_er.innerHTML="Field can't be left empty";
    }
    if(emailval == ""){
        email_er.innerHTML="Field can't be left empty";
    }
    if(phnval == ""){
        phn_er.innerHTML="Field can't be left empty";
    }
    if(pswdval == ""){
        pswd_er.innerHTML="Field can't be left empty";
    }
    if(cpswdval == ""){
        cpswd_er.innerHTML="Field can't be left empty";
    }

    name.pattern="[a-zA-Z][a-zA-Z0-9\s]*";
    phn.pattern="[0-9.]+";
    email.pattern="[^@]+@gmail\.com";
    pswd.pattern="(?=.*[A-z0-9#$@&])(?=.*[a-z]).{8,}";

    if(nameval.length>20){
        name_er.innerHTML="Name is too long";
    }
    if(phnval.length!=10){
        phn_er.innerHTML="Enter a valid phone number";
    }
    if(pswdval.lenght<8){
        pswd_er.innerHTML="password must conatin minimum 8 characters";
    }
    if(pswdval!=cpswdval){
        pswd_er.innerHTML="confirmed password not matching";
        cpswd_er.innerHTML="confirmed password not matching";
    }
    
    
}
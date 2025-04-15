function validateForm(){

let fname= document.getElementById("name").value
let password= document.getElementById("pass").value
let address= document.getElementById("email").value 


let nameErr= document.getElementById("name-error")
let passErr= document.getElementById("pass-error")
let emailErr= document.getElementById("email-error")


     nameErr.textContent = "";
    passErr.textContent = "";
    emailErr.textContent = "";


let isValid=true
if(fname===""|| /\d/.test(fname)){
    nameErr.textContent="Please provide your full name"
    isValid=false
}
if(password===""|| password.length <6 ){
    passErr.textContent="Password must be at least 6 characters"
    isValid=false
}
if (address===""){
    emailErr.textContent="Enter your email address (e.g., example@email.com)."
    isValid=false
}
if (isValid===true){
    alert("successfully submitted")
    return true
}else{
    return false
}
}

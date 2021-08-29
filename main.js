
//function to take email address fro newsletter signup
let newsLetterArr=[];
function newsLetter(){
    let newsLetterArr=[];
    for(i=0; i<1; i++){
        newsLetterArr[i] = prompt("Email Address Please");
        alert('Thank you!');
    }
}


//attempt to take at form validation
document.getElementById("form").onsubmit = function(e){
    var fieldValue=document.getElementById("firstName").value;
    if(fieldValue==null || fieldValue==""){
        //the field was empty. Stop form submission
        e.preventDefault();
        alert("You must enter a first name ");
    }
    
}

//attepmt to get images to enlarge when clicked
var elem = document.documentElement;
function openFullScreen(){
    if (elem.requestFullscreen){
        elem.requestFullscreen();
            elem.requestFullscreen();
    }else if (elem.webkitRequestFullScreen){
        elem.webkitRequestFullScreen();
    }else if(elem.msRequestFullScreen){
        elem.msRequestFullScreen();
    }
    
}

//Attempt at Form Validation. Not Working
const form = document.getElementById("myForm")
const firstName = document.getElementById("firstName")
const secondName = document.getElementById("lastName")
const phoneNum = document.getElementById("phoneNum")
const email = document.getElementById("inputEmail")

form.addEventListener('submit', (e) =>{
    e.preventDefault();

    checkInputs();
});

function checkInputs(){
    //get the values from the inputs
    const firstNameValue = firstName.value.trim()
    const secondNameValue = secondName.value.trim()
    const phoneNumValue = phoneNum.value.trim()
    const emailValue = email.value.trim()

    if(firstNameValue === ''){
        //show error
        //add error class
        setErrorFor(firstName, "First Name cannot be empty")
    }else{
        //add success class
        setSuccessFor(firstName)
    }
}

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()








//Js file designed specifically for the index page to create some interactivity and events.. created by 'Oghenegare- Uti'.
//Creating a function to display an image description/text during an onmouseover/onmouseout event.

function changeText(text)
{
    var display = document.getElementById('description');
    display.innerHTML = "";
    display.innerHTML = text;
}
      
function defaultText()
{
    var display = document.getElementById('description');
    display.innerHTML = "";
    display.innerHTML = "How do you like to make your travel experience a memorable one?";
}

























// alert('Testing');
// Exercise 4- Extra features to the travel expert website. Confirmation of submit or reset action after users click on the respective buttons on the form.
/*function confSubmit(){
var agree= confirm("Are you sure you want to submit this form?");
if(agree)
return true;
else
return false;
}

function confReset(){
    var agree= confirm("Are you sure you wish to continue?");
    if(agree)
    return true;
    else
    return false;

}

// alert('Testing');
// Exercise 5- Extra features to the travel expert website. On focus listener events and form validation features.

*/

/* testing script for assignment 4-5*/
const formname= document.getElementById('fname')
const faddress= document.getElementById('address')
const fcity= document.getElementById('city')
const femail= document.getElementById('email')
const fprovince= document.getElementById('province')
const fpostal= document.getElementById('postal')
const fflying= document.getElementById('flying')
const fdestination= document.getElementById('destination')
const ferror= document.getElementById('error')
const form= document.getElementById('form')


/* form validation testing*/
/*form.addEventListener('submit', (e) => {
let messages =[]
if (fname.value=== '' || fname.value== null){messages.push("Name is required!")}
if (address.value=== '' || address.value== null){messages.push("Address is required!")}
if (city.value=== '' || city.value){messages.push("City is required!")}
if (email.value=== '' || email.value== null){messages.push("please enter a valid email!")}
if (province.value.pattern !=="/^[A-Z]\d[A-Z]?\d[A-Z]\d$i/"){messages.push("Enter correct format of postal code!")}
if (flying.value=== '' || flying.value== null){messages.push("Please enter departure!")}
if (destination.value=== '' || destination.value== null){messages.push("Please enter destination!")}
if (messages.length > 0){e.preventDefault()
errorElement.innerText = messages.join(', ')}
})*/

/*const hilite = document.getElementById('form');
form.addEventListener('focus', (event) => {event.target.style.background = 'pink';}, true);
form.addEventListener('blur', (event) => {event.target.style.background = '';}, true);

/*const hilite = document.getElementById('address');
address.addEventListener('onfocus', (event) => {event.target.style.alert= "Please enter name here";}, true);
address.addEventListener('blur', (event) => {event.target.style.alert = '';}, true);*/

/*const hilite = document.getElementById('namefield');
namefield.addEventListener('focus', (event) => {event.target.style.background = 'pink';}, true);*/

function validate(form){ for (i=0; i<form.elements.length; i++)
    {
       if (form.elements[i].value == "")
       {
          alert("There is an empty field");
          form.elements[i].focus();
          return false;
       }
    }
    return true;
}





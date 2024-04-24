let container = document.querySelector('.container'),
formElement = document.getElementById('form'),
usernameElement = document.querySelector('#username'),
emailElement = document.querySelector('#email'),
passwordElement = document.querySelector('#password'),
cpasswordElement = document.querySelector('#cpassword');

let overallValidation = false;
formElement.addEventListener('submit', function(event) {  
   
  event.preventDefault();
  validationStart();
  if (overallValidation) {
    container.removeChild(container.firstElementChild);    
    // console.log(`${usernameElement.value}....You  have registerred successfully`);
    const newChildElem = document.createElement('div');
    newChildElem.innerHTML = `<h1 style="color: white;margin-top: 40px;">hey ${usernameElement.value}....You  have registered successfully</h1>`;
    container.appendChild(newChildElem);     
  } 
  });
  

  function validationStart() {
    const userName = usernameElement.value;
    const email = emailElement.value;
    const password = passwordElement.value;
    const cpassword = cpasswordElement.value;

    let isValidUsername,isValidEmail,isValidPassword,isValidCpassword;
    
    if (userName.trim() === '' ) {
     const errMsg = 'Please enter a valid Username.';
     errStyleValidation(usernameElement,errMsg);
    } else {
      const errMsg = '';
      errStyleValidation(usernameElement,errMsg);
      isValidUsername = true;
    }

    if(email.trim() ==='') {
      const errMsg = 'Please enter a Email address.';
     errStyleValidation(emailElement,errMsg);
    } else if (!emailVd(email)) {
      const errMsg = 'Please enter a valid Email.';
     errStyleValidation(emailElement,errMsg);
    } else {
      const errMsg = '';
      isValidEmail = true;
     errStyleValidation(emailElement,errMsg);
    }

    if (password.trim() === '') {
      const errMsg = 'Please enter a Password.';
     errStyleValidation(passwordElement,errMsg);
    } else if (password.length < 8) {
      const errMsg = 'Password must be atleast 8 characters.';
     errStyleValidation(passwordElement,errMsg);
    } else {
      const errMsg = '';
      isValidPassword = true;
      errStyleValidation(passwordElement,errMsg);
    }

    if(cpassword.trim() === '') {
      const errMsg = 'Please enter a password again.';
      errStyleValidation(cpasswordElement,errMsg);
    } else if (cpassword !== password) {
      const errMsg = "Password doesn't match.";
      errStyleValidation(cpasswordElement,errMsg);
    } else {
      const errMsg = '';
      isValidCpassword = true;
      errStyleValidation(cpasswordElement,errMsg)
    }

    overallValidation = (isValidUsername && isValidEmail && isValidPassword && isValidCpassword);
    }


  function errStyleValidation (inputElement,errMsg) {
    const parent = inputElement.parentElement;
    const errShower = parent.querySelector('.error');
    if (errMsg.length > 0) {
      //now error is occuring
      parent.classList.add('notokay');
      parent.classList.remove('okay');
      errShower.innerHTML = errMsg;
    } else {
      //now error is not occuring
      parent.classList.add('okay');
      parent.classList.remove('notokay');
      errShower.innerHTML = errMsg;
    }

  }

  function emailVd(email) {    
    return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );    
  }

  
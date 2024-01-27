const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function showSuccess(input) {
  const formControl = input.parentElement;
    formControl.className = 'form-control success';
   
}


// Event listeners
form.addEventListener('submit', function(e) {
  
    
  e.preventDefault();
    if(username.value === ''){

      showError(username, 'Username is required');
    }else{
      showSuccess(username);
    }

    if(email.value === ''){
      showError(email, 'Email is required');

    }else if(!re.test(email.value)){
      showError(email, 'Email is not valid');
    }else{
      showSuccess(email);
    }


    if(password.value === ''){
      showError(password, 'Password is required');
      
    }else{
      showSuccess(password);
    }

    if(password2.value === ''){
      showError(password2, 'Password is required'); 
      
    }else if(password.value !== password2.value){
      showError(password2, 'Password does not match'); 
    }else{
      showSuccess(password2);
    } 

  


    
});
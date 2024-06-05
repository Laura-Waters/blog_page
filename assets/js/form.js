// DEPENDENCIES 
const usernameInput = document.querySelector('#username');
const titleInput = document.querySelector('#title'); 
const contentInput = document.querySelector('#content'); 
const submitButton = document.querySelector('.submit'); 

// DATA

// FUNCTIONS
function handleFormSubmit (event) {
    event.preventDefault();

    const username = usernameInput.value;
    const title = titleInput.value;
    const content = contentInput.value; 

    usernameInput.textContent = " ";
    titleInput.textContent = " ";
    contentInput.textContent = " "; 

    if (username === '') {
        displayMessage('error', 'Please enter username');
      } else if (title === '') {
        displayMessage('error', 'Please enter a title');
      } else if (content === '') {
          displayMessage('error', 'Please enter your post content');
      } else {
          window.location.href = "http://www.w3schools.com";
  
          localStorage.setItem('username', username);
          localStorage.setItem('title', title);
          localStorage.setItem('content', content);
         
      }
    
}

// USER INTERACTIONS  
submitButton.addEventListener('click', handleFormSubmit);
  

// INITIALIZATION 
// DEPENDENCIES 
const usernameInput = document.querySelector('#username');
const titleInput = document.querySelector('#title'); 
const contentInput = document.querySelector('#content'); 
const msgDiv = document.querySelector('#msg');
const submitButton = document.querySelector('.submit'); 

// DATA 

// FUNCTIONS
function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute('class', type);
}

function handleFormSubmit (event) {
    event.preventDefault();

    usernameInput.textContent = " ";
    titleInput.textContent = " ";
    contentInput.textContent = " "; 

    const username =  usernameInput.value;
    const title = titleInput.value;
    const content = contentInput.value; 


    if (username === '') {
        displayMessage('error', 'Please enter username');
      } else if (title === '') {
        displayMessage('error', 'Please enter a title');
      } else if (content === '') {
          displayMessage('error', 'Please enter your post content');
      } else {
          window.location.href = "blog.html";

          const posts = {
            username: usernameInput.value.trim(),
            title: titleInput.value.trim(),
            content: contentInput.value.trim(),
          };

          localStorage.setItem('posts', JSON.stringify(posts));
         
      }
    
}

// USER INTERACTIONS  
submitButton.addEventListener('click', handleFormSubmit);
  

// INITIALIZATION 
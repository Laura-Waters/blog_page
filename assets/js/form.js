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

        // get the existing list of posts
        let posts = [];

        // build the new post object
        const post = {
          username: usernameInput.value.trim(),
          title: titleInput.value.trim(),
          content: contentInput.value.trim(),
        }; 

        // add the new post to the list of posts
        posts.push(post); 

        // save the whole thing to local storage
        localStorage.setItem('posts', JSON.stringify(posts));

        //reset the form 
        usernameInput.value = " ";
        titleInput.value = " ";
        contentInput.value = " "; 

       
    };
  
};

// USER INTERACTIONS  
submitButton.addEventListener('click', handleFormSubmit);
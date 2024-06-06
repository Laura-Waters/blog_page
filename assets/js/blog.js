// DEPENDENCIES
const themeButtonEl = document.getElementById('theme-btn');
const bodyEl = document.getElementById('body'); 
const backButtonEl = document.getElementById('back'); 
const blogPostDisplayEl = document.getElementById('blog-post-display'); 

let post = localStorage.getItem('post');
console.log(post); 

const blogPost = JSON.parse(localStorage.getItem('post'));
console.log(blogPost); 

// FUNCTIONS 
const createCards = function (title, content, username) {

    const cardColumnEl = document.createElement('div');
    cardColumnEl.setAttribute('style', 'margin:auto; width:50%; text-align:center;'); 
  
    const cardEl = document.createElement('div');
    cardEl.setAttribute('style', 'margin:auto; width:50%; text-align:center;');
    // cardEl.setAttribute('id', 'custom-card');
    cardColumnEl.appendChild(cardEl);
  
    const cardTitle = document.createElement('h3');
    // cardTitle.setAttribute('id', 'title');
    cardTitle.textContent = title;
    cardEl.appendChild(cardTitle);
  
    const cardContentEl = document.createElement('p');
    // cardContentEl.setAttribute('id', 'content');
    cardContentEl.textContent = content; 
    cardEl.appendChild(cardContentEl);

    const cardAuthorEl = document.createElement('p');
    // cardAuthorEl.setAttribute('id', 'author');
    cardAuthorEl.textContent = `Posted by ${username}.`; 
    cardEl.appendChild(cardAuthorEl); 
    
    blogPostDisplayEl.appendChild(cardColumnEl);
};

// const getData = function() {

//     if (blogPost !== null) {
//         document.children('h3').innerHTML = blogPost.title;
//         document.children('p').innerHTML = blogPost.content;
//         document.getElementById('author').innerHTML = blogPost.username;
//     }
// };
  

// USER INTERACTIONS 
themeButtonEl.addEventListener('click', function() {
    let isDark =  true; 

    if (isDark) {
        bodyEl.setAttribute('style', 'background-color:#d9e9e8; color:#1a1a1a');
        isDark = !isDark;
      } else {
        bodyEl.setAttribute('style', 'background-color:#1a1a1a; color:#d9e9e8');
        isDark = !isDark;
      }
}); 

backButtonEl.addEventListener('click', function() {
    window.location.href = "index.html";
});
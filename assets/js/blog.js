// DEPENDENCIES
const themeButtonEl = $('#theme-btn');
const bodyEl = $('#body');
const backButtonEl = $('#back');
const blogPostDisplayEl = $('#blog-post-display');


// FUNCTIONS 
function savePostsToStorage(posts) {
    localStorage.setItem('posts', JSON.stringify(posts));
}; 

function readPostsFromStorage() {

    let posts = JSON.parse(localStorage.getItem('posts'));

    if (!posts) {
        posts = [];
    }

    return posts;
};

function createBlogCard(posts) {

    const blogCard = $('<div>')
        .addClass('card post-card my-3')
    const cardHeader = $('<h3>').addClass('card-header h3').text(posts.title);
    const cardBody = $('<div>').addClass('card-body');
    const cardContent = $('<p>').addClass('card-content').text(posts.content);
    const cardAuthor = $('<p>').addClass('card-author').text(posts.username); 

    cardBody.append(cardHeader, cardContent, cardAuthor);
    blogCard.append(cardBody); 

    return blogCard; 

}; 

function renderPostData() {
    const posts = readPostsFromStorage(); 

    for (let post of posts) {
        blogPostDisplayEl.append(createBlogCard(post));
    }

}; 

// function handleSubmit(event) {
//     event.preventDefault();

//     const newPost = {
//         title: postTitle,
//         content: postContent,
//         username: postAuthor,
//     };

//     const posts = readPostsFromStorage();
//     posts.push(newPost);

//     renderPostData();
// }; 

// function changeTheme() {

// }

// USER INTERACTIONS 
// themeButtonEl.addEventListener('click', function() {
//     let isDark =  true; 

//     if (isDark) {
//         bodyEl.setAttribute('style', 'background-color:#d9e9e8; color:#1a1a1a');
//         isDark = !isDark;
//       } else {
//         bodyEl.setAttribute('style', 'background-color:#1a1a1a; color:#d9e9e8');
//         isDark = !isDark;
//       }
// }); 

$(document).ready( function () {
    renderPostData();
}); 


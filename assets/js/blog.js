// DEPENDENCIES
const themeButtonEl = $('#theme-btn');
const bodyEl = $('#body');
const backButtonEl = $('#back');
const blogPostDisplayEl = $('#blog-post-display');


// FUNCTIONS 
function readPostsFromStorage() {

    let posts = JSON.parse(localStorage.getItem('posts'));

    if (!posts) {
        posts = [];
    }
    console.log(posts); 
    return posts;
};

function createBlogCard(posts) {

    const blogCard = $('<div>')
        .addClass('card post-card my-3')
    const cardHeader = $('<h3>').addClass('card-header h3').text(posts.title);
    const cardBody = $('<div>').addClass('card-body');
    const cardContent = $('<p>').addClass('card-content').text(posts.content);
    const cardAuthor = $('<p>').addClass('card-author').text(`Posted by: ${posts.username}`); 

    cardBody.append(cardHeader, cardContent, cardAuthor);
    blogCard.append(cardBody); 

    return blogCard; 

}; 

function renderPostData() {
    const posts = readPostsFromStorage(); 
    console.log(posts);
    for (let post of posts) {
        blogPostDisplayEl.append(createBlogCard(post));
    }

}; 

let isDark = true; 
themeButtonEl.on('click', function () {

    if (isDark) { 
        $('body').css({ 'background-color' : 'darkblue', 'color' : 'white' });
        $('header').css({ 'background-color' : 'blue', 'color' : 'white' });
        $('footer').css({ 'background-color' : 'blue', 'color' : 'white' });
        $('.card-header').css({ 'background-color' : 'blue', 'color' : 'white' });
        $('.btn').css({ 'background-color' : 'darkblue', 'color' : 'white' });
        isDark = !isDark;
    } else {
        $('body').css({ 'background-color' : 'white', 'color' : 'black' });
        $('header').css({ 'background-color' : 'bisque', 'color' : 'black' });
        $('footer').css({ 'background-color' : 'bisque', 'color' : 'black' });
        $('.card-header').css({ 'background-color' : 'antiquewhite', 'color' : 'black' });
        $('.btn').css({ 'background-color' : '#d67c5e', 'color' : 'white' });
        isDark = !isDark;
    }; 

}); 

// USER INTERACTIONS 
$(document).ready( function () {
    renderPostData();
}); 


// DEPENDENCIES
const themeButtonEl = $('#theme-btn');
const bodyEl = $('#body');
const backButtonEl = $('#back');
const blogPostDisplayEl = $('#blog-post-display');


// FUNCTIONS 
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

backButtonEl.on("click", () => {
    history.back();
  });
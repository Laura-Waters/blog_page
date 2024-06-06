// DEPENDENCIES
const themeButtonEl = document.getElementById('theme-btn');
const bodyEl = document.getElementById('body'); 
const backButtonEl = document.getElementById('back'); 

// DATA / STATE 


// USER INTERACTIONS 
themeButtonEl.addEventListener('click', function() {
    let isDark =  true; 

    if (isDark) {
        bodyEl.setAttribute('style', 'background-color:#d9e9e8', 'color:#1a1a1a');
        isDark = !isDark;
      } else {
        bodyEl.setAttribute('style', 'background-color:#1a1a1a', 'color:#d9e9e8');
        isDark = !isDark;
      }
}); 

backButtonEl.addEventListener('click', function() {
    window.location.href = "index.html";
})

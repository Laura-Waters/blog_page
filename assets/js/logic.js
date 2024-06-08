function readPostsFromStorage() {

    let posts = JSON.parse(localStorage.getItem('posts'));

    if (!posts) {
        posts = [];
    }

    return posts;
};

function createBlogCard(post) {

    const blogCard = $('<div>')
        .addClass('card post-card my-3')
    const cardHeader = $('<h3>').addClass('card-header h3').text(post.title);
    const cardBody = $('<div>').addClass('card-body');
    const cardContent = $('<p>').addClass('card-content').text(post.content);
    const cardAuthor = $('<p>').addClass('card-author').text(`Posted by: ${post.username}`); 

    cardBody.append(cardHeader, cardContent, cardAuthor);
    blogCard.append(cardBody); 

    blogPostDisplayEl.append(blogCard); 

}; 

function renderPostData() {
    const posts = readPostsFromStorage(); 
    console.log(posts);
    for (let post of posts) {
        blogPostDisplayEl.append(createBlogCard(post));
    }; 

}; 






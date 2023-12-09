javascript
// Define an array of blog posts
const blogPosts = [
    {
        title: "Blog Post Title 1",
        author: "John Doe",
        date: "January 1, 2024",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        title: "Blog Post Title 2",
        author: "Jane Smith",
        date: "February 1, 2024",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }
];

// Get the blog posts container element
const blogPostsContainer = document.getElementById("blog-posts");

// Generate and display the blog posts
blogPosts.forEach(post => {
    const article = document.createElement("article");
    const title = document.createElement("h2");
    const author = document.createElement("p");
    const date = document.createElement("p");
    const content = document.createElement("p");

    title.textContent = post.title;
    author.textContent = `Posted by ${post.author}`;
    date.textContent = post.date;
    content.textContent = post.content;

    article.appendChild(title);
    article.appendChild(author);
    article.appendChild(date);
    article.appendChild(content);

    blogPostsContainer.appendChild(article);
});

// TODO: Create a variable that selects the main element
const main = document.getElementById("main");

// TODO: Create a function that builds an element and appends it to the DOM

// TODO: Create a function that handles the case where there are no blog posts to display

// TODO: Create a function that reads from local storage and returns the data

// TODO: Call the function to render the list of blog posts

document.addEventListener("DOMContentLoaded", function () {
  displayPosts();

  function displayPosts() {
    // Get posts from local storage
    let posts = JSON.parse(localStorage.getItem("posts")) || [];

    // Get the posts container
    const postsContainer = document.getElementById("posts");

    // Clear existing content
    postsContainer.innerHTML = "";

    // Loop through posts and create HTML for each post
    posts.forEach((post) => {
      const postElement = document.createElement("div");
      postElement.className = "post";
      postElement.innerHTML = `
          <h2>${post.title}</h2>
          <p><strong>By:</strong> ${post.username}</p>
          <p>${post.content}</p>
        `;
      postsContainer.appendChild(postElement);
    });
  }
});

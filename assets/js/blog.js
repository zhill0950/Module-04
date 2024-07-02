// TODO: Create a variable that selects the main element
// const main = document.getElementById("posts");

// TODO: Create a function that builds an element and appends it to the DOM

// TODO: Create a function that handles the case where there are no blog posts to display

// TODO: Create a function that reads from local storage and returns the data

// TODO: Call the function to render the list of blog posts

document.addEventListener("DOMContentLoaded", function () {
  // Get data from local storage
  const posts = JSON.parse(localStorage.getItem("posts")) || [];

  // Create variable where data will be rendered
  const blogContainer = document.getElementById("blogContainer");

  if (posts.length > 0) {
    // Iterate through each post and create elements to display them
    posts.forEach((post) => {
      // Create a new div element for the post
      const postDiv = document.createElement("div");
      postDiv.classList.add("post");

      // Create elements to display username, title, and content
      const titleElem = document.createElement("h2");
      const usernameElem = document.createElement("p");
      const contentElem = document.createElement("p");

      // Set the text content to the data from the post
      titleElem.textContent = `Title: ${post.title}`;
      usernameElem.textContent = `Posted by: ${post.username}`;
      contentElem.textContent = `Content: ${post.content}`;

      // Append the elements to the post div
      postDiv.appendChild(titleElem);
      postDiv.appendChild(usernameElem);
      postDiv.appendChild(contentElem);

      // Append the post div to the blog container
      blogContainer.appendChild(postDiv);
    });
  } else {
    // If no posts, show a message
    const noDataMessage = document.createElement("p");
    noDataMessage.textContent = "No blog posts found.";
    blogContainer.appendChild(noDataMessage);
  }
});

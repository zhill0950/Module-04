// TODO: Create a variable that selects the main element
// const main = document.getElementById("posts");

// TODO: Create a function that builds an element and appends it to the DOM

// TODO: Create a function that handles the case where there are no blog posts to display

// TODO: Create a function that reads from local storage and returns the data

// TODO: Call the function to render the list of blog posts

document.addEventListener("DOMContentLoaded", function () {
  // Checking local storage for users theme preference
  const currentMode = localStorage.getItem("theme");

  if (currentMode === "dark") {
    document.body.classList.add("dark");
  }

  // "Call the function to render the list of blog posts..."
  function displayPosts(posts) {
    // Create variable where data will be rendered
    const blogContainer = document.getElementById("blogContainer");

    // Create a clean slate so posts aren't duplicated
    blogContainer.innerHTML = "";

    if (posts.length > 0) {
      // Iterate through each post and create elements to display them
      posts.forEach((post) => {
        // Create a new article element for the post
        const postArticle = document.createElement("article");

        // Create elements to display username, title, and content
        const title = document.createElement("h2");
        const content = document.createElement("blockquote");
        const username = document.createElement("p");

        // The content to be displayed in the browser
        title.textContent = post.title;
        content.textContent = post.content;
        username.textContent = `Posted by: ${post.username}`;

        // Append the elements to the post article
        postArticle.appendChild(title);
        postArticle.appendChild(content);
        postArticle.appendChild(username);

        // Append the post article to the blog container
        blogContainer.appendChild(postArticle);
      });
    } else {
      // "Create a function that handles the case where there are no blog posts to display..."
      const noData = document.createElement("h2");
      noData.textContent = "No blog posts yet...";
      blogContainer.appendChild(noData);
    }
  }

  // Get data from local storage
  const posts = JSON.parse(localStorage.getItem("posts")) || [];

  displayPosts(posts);

  // Added a clear button to test noData function
  const clearBtn = document.getElementById("clear");
  if (clearBtn) {
    clearBtn.addEventListener("click", function () {
      localStorage.removeItem("posts");

      displayPosts([]);
    });
  }
});

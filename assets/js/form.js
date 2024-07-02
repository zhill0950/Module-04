// TODO: Create a variable that selects the form element
// TODO: Create a function that handles the form submission.
//       Grab the form data and store it in local storage, then redirect to the blog page using the redirectPage function.
//       If the form is submitted with missing data, display an error message to the user.
// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.

// Couldn't get the code to run without this:
document.addEventListener("DOMContentLoaded", function () {
  // "Create a variable that selects the form element..."
  const form = document.getElementById("form");
  // "Add an event listener to the form on submit..."
  form.addEventListener("submit", storeData);

  // "Create a function that handles the form submission..."
  function storeData(event) {
    event.preventDefault();

    // Create variables for input forms
    const username = document.getElementById("username").value;
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;

    // "If the form is submitted with missing data, display an error message to the user..."
    if (!username || !title || !content) {
      alert("Please complete all fields.");
      return;
    }

    // Create object to store the user data
    const newPost = {
      username: username,
      title: title,
      content: content,
    };

    // "Grab the form data and store it in local storage..."
    // First have to get the existing data from local storage
    const existingPosts = JSON.parse(localStorage.getItem("posts")) || [];

    // Push the new data into the array in local storage
    existingPosts.push(newPost);

    // Store the updated array back to local storage
    localStorage.setItem("posts", JSON.stringify(existingPosts));

    // "Redirect to the blog page using the redirectPage function..."
    // Discovered that creating the function was unneccessary as just running line 45 did
    // the same thing without needing to create a separate function.
    // window.location.href = "blog.html";
    redirectPage("blog.html");
  }

  function redirectPage(url) {
    window.location.href = url;
  }
});

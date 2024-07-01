// // TODO: Create a variable that selects the form element

// // TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the redirectPage function. If the form is submitted with missing data, display an error message to the user.

// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.

// Couldn't get the code to run without this:
document.addEventListener("DOMContentLoaded", function () {
  // "Create a variable that selects the form element..."
  const form = document.getElementById("form");
  // "Add an event listener to the form on submit.."
  form.addEventListener("submit", storeData);

  // "Create a function that handles the form submission..."
  function storeData(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;

    //" If the form is submitted with missing data, display an error message to the user..."
    if (!username || !title || !content) {
      alert("Please complete all fields.");
      return;
    }

    // Creating an object
    const formData = {
      username: username,
      title: title,
      content: content,
    };

    // "Grab the form data and store it in local storage..."
    let formDataJSON = JSON.stringify(formData);
    localStorage.setItem("formData", formDataJSON);

    function getData() {
      let formDataJSON = localStorage.getItem("formData");

      window.location.href = "blog.html";

      console.log("Data stored in localStorage.");
      console.log("Username: " + formData.username);
      console.log("Title: " + formData.title);
      console.log("Content: " + formData.content);
      console.log(formData);
    }

    getData();
  }
});

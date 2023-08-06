//intializing variables
const LS = [localStorage];
const todo_container = document.getElementById("todo-container");
const submit = document.getElementById("submit");
const title = document.getElementById("input1");
const desc = document.getElementById("input2");

//getting all saved todo
LS.forEach((element) => {
  if (localStorage.length >= 1) {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      todo_container.insertAdjacentHTML(
        "afterbegin",
        `<div class="card bm" style="width: 18rem">
      <div class="card-body">
        <h5 class="card-title">${key}</h5>
        <p class="card-text">
          ${value}
        </p>
      </div>
      <button id=${i} class="delete-btn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
      </svg><p>Delete</p> </button>`
      );

      // When delete button is clicked
      const delete_btn = document.getElementById(i);
      delete_btn.addEventListener("click", () => {
        alert("Todo deleted successfully!");
        localStorage.removeItem(key);
        location.reload()
      });
    }
  } else {
   // todo_container.insertAdjacentHTML("afterbegin", ``);
   todo_container.innerHTML = "No saved To-do"
  }
});

//When submit is clicked
submit.addEventListener("click", (x) => {
  x.preventDefault();
  //checking if any requiment is not fullfilled
  if (title.value === "") {
    alert("Your title is not defined!");
  } else if (desc.value === "") {
    alert("Your description is not defined!");
  } else {
    // Fullfilled then add it to local storage and the todo list

    localStorage.setItem(title.value, desc.value);
    // Notify the client
    alert("Your todo is added successfully!");

    location.reload();

    // Empty the box
  }
});

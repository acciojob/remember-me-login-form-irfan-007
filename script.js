//your JS code here. If required.
const submit = document.getElementById("submit");
const existing = document.getElementById("existing");
const username = document.getElementById("username");
const password = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
if (localStorage.getItem("name") && localStorage.getItem("password"))
  existing.style.display = "block";
else existing.style.display = "none";

submit.addEventListener("click", (e) => {
  e.preventDefault();
  let name = username.value;
  let pass = password.value;
  if (checkbox.checked) {
    localStorage.setItem("name", name);
    localStorage.setItem("password", pass);
  } else {
    localStorage.removeItem("name");
    localStorage.removeItem("password");
  }
  alert("Logged in as "+name);  
});

existing.addEventListener("click", (e) => {
  e.preventDefault();
  alert("Logged in as "+localStorage.getItem("name"));
});

const response = await fetch("https://jsonplaceholder.typicode.com/posts");
const data = await response.json();

document.getElementById("posts").innerHTML = data
  .slice(0, 5)
  .map(post => `<li>${post.title}</li>`)
  .join("");

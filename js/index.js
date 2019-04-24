function getRepositories() {
  event.preventDefault() 
  const currentUser = document.getElementById(`username`).value
  const req = new XMLHttpRequest();
  req.addEventListener('load', showRepositories);
  req.open('GET', (`https://api.github.com/users/` + currentUser + `/repos`));
  req.setRequestHeader("Authorization", `token`)
  req.send();
}

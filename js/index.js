const token = `token`

function getRepositories() {
  event.preventDefault()
  const currentUser = document.getElementById(`username`).value
  const req = new XMLHttpRequest();
  req.addEventListener('load', showRepositories);
  req.open('GET', (`https://api.github.com/users/` + currentUser + `/repos`));
  req.setRequestHeader("Authorization", `token`)
  req.send();
}

function showRepositories(event, data) {
  const repos = JSON.parse(this.responseText)
  console.log(repos)
  const repoList = `<ul>${repos.map(r => '<li>' + r.name + '<br> - <a href="#" data-repo="' + r.name + '" onclick="getCommits(this)">Get Commits</a><br>-<a href="#" data-repo="' + r.name + '" onclick="getBranches(this)">Get Branches</a></li>').join('')}</ul>`
  document.getElementById("repositories").innerHTML = repoList
}

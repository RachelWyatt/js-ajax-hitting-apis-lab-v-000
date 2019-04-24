const token = `token`

function getRepositories() {
  const currentUser = document.getElementById(`username`).value
  const req = new XMLHttpRequest();
  req.addEventListener('load', showRepositories);
  req.open('GET', (`https://api.github.com/users/` + currentUser + `/repos`));
  req.setRequestHeader("Authorization", `token`)
  req.send();
}

function displayRepositories(event, data) {
  const repos = JSON.parse(this.responseText)
  console.log(repos)
  const repoList = `<ul>${repos.map(repo => '<li>' + repo.url + ' - <a href="#" data-repo="' + repo.html_url + '" onclick="getCommits(this)">Get Commits</a>' +  '- <a href="#" data-branch="' + repo.branches_url + '" onclick="getBranches(this)">Get Branches</a> </li>').join('')}</ul>`
	document.getElementById("repositories").innerHTML = repoList
}

function getCommits(el) {
  const name = el.dataset.repository; 
  const req = new XMLHttpRequest();
  let user = ducment.getElementById("username").value;
  req.addEventListener("load", displayCommits); 
  req.open("GET", `https://api.github.com/repos/${user}/` + name + '/commits');
  req.send();
}

document.addEventListener('DOMContentLoaded', function(){
    const nomeE = document.querySelector('#name');
    const usernameE = document.querySelector('#username');
    const avatarE = document.querySelector('#avatar');
    const reposE = document.querySelector('#repos');
    const seguidoresE = document.querySelector('#seguidores');
    const seguindoE = document.querySelector('#seguindo');
    const linkE = document.querySelector('#link');

    fetch('https://api.github.com/users/Adryan-Melo')
        .then(function(res){
        return res.json();
    })
        .then(function(json) {
            nomeE.innerText = json.name;
            usernameE.innerText = json.login;
            avatarE.src = json.avatar_url;
            reposE.innerText = json.public_repos;
            seguidoresE.innerText = json.followers;
            seguindoE.innerText = json.following;
            linkE.href = json.html_url;
        })
})
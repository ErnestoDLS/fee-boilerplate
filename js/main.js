(function() {
  var reposXHR = new XMLHttpRequest();
  var githubProfileXHR = new XMLHttpRequest();
  var nameXHR = new XMLHttpRequest();


  document.addEventListener("DOMContentLoaded", function(e){
    var repoOwnerElement = document.querySelector("[data-js='repo__owner']");
    var repoNavElement = document.querySelector("[data-js='repo__navigation']");
    var ownerName = document.querySelector("[data-js='my__name']");
    var ownerBlog = document.querySelector("[data-js='my__blog']");
    var ownerLocation = document.querySelector("[data-js='my__location']");
    var ownerEmail = document.querySelector("[data-js='my__email']");
    var ownerAvatar = document.querySelector("[data-js='my__picture']");

    nameXHR.addEventListener("load", function(e){
      var data = JSON.parse(e.target.responseText);
      data.forEach(function(name){
        var ownerName = "";
        ownerName += "data-js='my__name'" + name.full_name;
        ownerName.textContent += text;


    reposXHR.addEventListener("load", function(e){
      var data = JSON.parse(e.target.responseText);
      data.forEach(function(repo){
        var html = "";
        html += "<a class='repo__navItem' href='" + repo.http_url + "'>" + repo.name + "</a>";
        repoNavElement.innerHTML += html;
      });
    });

    githubProfileXHR.addEventListener("load", function(e){
      var profileData = JSON.parse(e.target.responseText);
      repoOwnerElement.textContent = profileData.name;
    });
  });


  reposXHR.open('GET',  "https://api.github.com/users/ErnestoDLS/repos");
  reposXHR.send();

  githubProfileXHR.open('GET',  "https://api.github.com/users/ErnestoDLS/repos");
  githubProfileXHR.send();

})();

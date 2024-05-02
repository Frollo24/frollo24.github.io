import { sortProjectFavorite } from './sortfunctions.js'

var path = window.location.pathname;
var page = path.split("/").pop();
var pagename = page.split(".")[0];

const projectListName = pagename;

$.getJSON('../resources/projects.json', function(json){
  const projectSection = document.getElementById("projects");
  const projectAmount = 3;

  var projectList = json[projectListName];
  projectList = sortProjectFavorite(projectList);

  console.log(projectList[0]);

  function insertProjects(projectList){
    for (let i = 0; i < projectAmount; i++) {
      projectSection.innerHTML += `
      <article class="center">
        <h1>${projectList[i].title}</h1>
        <p>
          ${projectList[i].summary}
        </p>
        <br>
        <div class="features">
          <figure>
            <a href="${projectList[i].imageFolder}01.png" target="_blank">
              <img src="${projectList[i].imageFolder}01.png" alt="${projectList[i].title}">
            </a>
          </figure>
          <figure>
            <a href="${projectList[i].imageFolder}02.png" target="_blank">
              <img src="${projectList[i].imageFolder}02.png" alt="${projectList[i].title}">
            </a>
          </figure>
          <figure>
            <a href="${projectList[i].imageFolder}03.png" target="_blank">
              <img src="${projectList[i].imageFolder}03.png" alt="${projectList[i].title}">
            </a>
          </figure>
          <figure>
            <a href="${projectList[i].imageFolder}04.png" target="_blank">
              <img src="${projectList[i].imageFolder}04.png" alt="${projectList[i].title}">
            </a>
          </figure>
        </div>
        <br>
        <a class="viewmore" href="${projectList[i].viewmoreSrc}" target="_blank">${projectList[i].viewmoreText}</a>
      </article>
      `;

      if (i < (projectAmount - 1))
        projectSection.innerHTML += `<div class="separator"></div>`;
    }
  }

  insertProjects(projectList);
});

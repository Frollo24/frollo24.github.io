import { sortProjectFavorite } from './sortfunctions.js'

$.getJSON('../resources/projects.json', function(json){
  function insertProjects(projectListName){
    var projectList = json[projectListName];
    var projectSection = document.getElementById(projectListName);
    var projectAmount = projectList.length;

    projectList = sortProjectFavorite(projectList);

    for (let i = 0; i < projectAmount; i++) {
      if (i % 2 == 0){
        projectSection.innerHTML += `

        <div class="project">
          <figure>
            <a href="${projectList[i].viewmoreSrc}">
              <img src="${projectList[i].imageFolder}01.png" alt="${projectList[i].title}">
            </a>
          </figure>
          <article class="project-text">
            <h1>${projectList[i].title}</h1>
            <p>
              ${projectList[i].summary}
            </p>
            <br>
            <a class="viewmore" href="${projectList[i].viewmoreSrc}" target="_blank">${projectList[i].viewmoreText}</a>
          </article>
        </div>

        `;
      } else {
        projectSection.innerHTML += `

        <div class="project">
          <article class="project-text">
            <h1>${projectList[i].title}</h1>
            <p>
              ${projectList[i].summary}
            </p>
            <br>
            <a class="viewmore" href="${projectList[i].viewmoreSrc}" target="_blank">${projectList[i].viewmoreText}</a>
          </article>
          <figure>
            <a href="${projectList[i].viewmoreSrc}">
              <img src="${projectList[i].imageFolder}01.png" alt="${projectList[i].title}">
            </a>
          </figure>
        </div>

        `;
      }

    }
  }

  insertProjects("computergraphics");
  insertProjects("videogames");

});

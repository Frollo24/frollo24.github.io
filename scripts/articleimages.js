function insertImages(projectList, projectDiv){
  for (let i = 0; i < projectList.length; i++) {
    projectDiv.innerHTML += `
        <figure>
          <a href="${projectList[i].viewmoreSrc}">
            <img src="${projectList[i].imageFolder}01.png" alt="${projectList[i].title}">
          </a>
          <figcaption>${projectList[i].title}</figcaption>
        </figure>
    `;
  }
}

$.getJSON('../resources/projects.json', function(json){
  var computergraphics = json.computergraphics.filter(function(proj){
    var names = new Set(["Unity Grass Shader", "Magma Engine", "OpenEngine"]);
    return names.has(proj.title);
  });

  var videogames = json.videogames.filter(function(proj){
    var names = new Set(["Cellular Invaders", "Blood Arrows", "College and Deans"]);
    return names.has(proj.title);
  });
  
  insertImages(computergraphics, document.getElementById("computergraphics"));
  insertImages(videogames, document.getElementById("videogames"));
});

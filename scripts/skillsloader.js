import { sortSkillsByLevel } from './sortfunctions.js'

$.getJSON('../resources/skills.json', function(json){
  const skills = json;

  const table_languages = document.getElementById("table_languages");
  const table_apis = document.getElementById("table_apis");
  const table_engines = document.getElementById("table_engines");
  const table_frameworks = document.getElementById("table_frameworks");

  function loadTables(table, title, skillData){
    table.innerHTML = `
    <thead>
      <tr>
        <th class="tabletitle" colspan="4">${title}</th>
      </tr>
      <tr>
        <th>Technology</th>
        <th>Level</th>
        <th>Project</th>
        <th>Comments</th>
      </tr>
    </thead>
    <tbody>
    `;

    for (let i = 0; i < skillData.length; i++) {
      table.innerHTML += `
      <tr>
        <td><img src="/images/techs/${skillData[i].image}" alt="${skillData[i].name}" title="${skillData[i].name}" class="tech-image"></td>
        <td class="skill-level">${skillData[i].level}</td>
        <td>${skillData[i].project}</td>
        <td>${skillData[i].comments}</td>
      </tr>
      `;
    }

    table.innerHTML += `
    </tbody>
    `;
  }

  loadTables(table_languages, "Languages", sortSkillsByLevel(skills.languages));
  loadTables(table_apis, "APIs", sortSkillsByLevel(skills.apis));
  loadTables(table_engines, "Engines", sortSkillsByLevel(skills.engines));
  loadTables(table_frameworks, "Frameworks", sortSkillsByLevel(skills.frameworks));

  let script = document.createElement('script');
  script.src = '/scripts/skillslevel.js';
  script.async = false;
  document.body.append(script);
});

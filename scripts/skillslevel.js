var skills = document.getElementsByClassName('skill-level');

for (let skill of skills){
  let level = Number(skill.innerHTML);
  if (isNaN(level)) continue;
  skill.innerHTML = '';
  for (let i = 0; i < level; i++) {
    // Acknowledgement: Star-Candy from Nintendo's "Mario & Luigi: Bowser's Inside Story"
    skill.innerHTML += `
      <img src="/images/star.png" alt="star" class="pixelimage" style="width: 36px; height: 36px">
    `;
  }
}

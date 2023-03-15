$.getJSON('../resources/pixelart.json', function(json){
  const pixelart = json;
  const figures = document.getElementById("septembit");
  
  var septembit = pixelart.septembit;
  
  for (let i = 0; i < septembit.length; i++) {
    figures.innerHTML += `
    
    <figure>
    <a href="/images/pixelart/septembit/${septembit[i].number}.png" target="_blank">
    <img src="/images/pixelart/septembit/${septembit[i].number}.png" alt="${septembit[i].name}">
    </a>
    <figcaption>${septembit[i].name}</figcaption>
    </figure>
    
    `;
  }
})
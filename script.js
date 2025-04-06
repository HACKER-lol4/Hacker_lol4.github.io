
// Read more/less functionality
function myFunction() {
  const dots = document.getElementById("dots");
  const moreText = document.getElementById("more");
  const btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

// Wait for DOM to load before applying styles
document.addEventListener('DOMContentLoaded', function() {
  const sect = document.querySelector('section');
  const para = document.createElement('p');
  para.innerHTML = 'Here we will add a link to the  href="https://en.wikipedia.org/wiki/Inflation">Wikipedia page about Inflation</a>. From this source, we can see that "Inflation is the decrease in the purchasing power of a currency. That is, when the general level of prices rise, each monetary unit can buy fewer goods and services in aggregate. The effect of inflation differs on different sectors of the economy, with some sectors being adversely affected while others benefitting."';
  para.style.color = 'white';
  para.style.backgroundColor = 'black';
  para.style.padding = '10px';
  para.style.width = '500px';
  para.style.textAlign = 'left';
  para.style.margin = '20px auto';
  
  // Remove the old paragraph if it exists
  const oldPara = document.querySelector('section p:last-child');
  if (oldPara) {
    oldPara.remove();
  }
  
  sect.appendChild(para);
});

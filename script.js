
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
  const linkPara = document.querySelector('section p:last-child');
  linkPara.style.color = 'white';
  linkPara.style.backgroundColor = 'black';
  linkPara.style.padding = '10px';
  linkPara.style.width = '250px';
  linkPara.style.textAlign = 'center';
});


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
  linkPara.style.color = '#ffffff';
  linkPara.style.backgroundColor = '#000000';
  linkPara.style.padding = '20px';
  linkPara.style.width = '500px';
  linkPara.style.textAlign = 'left';
  linkPara.style.margin = '20px auto';
  linkPara.style.borderRadius = '5px';
  
  // Make sure link is also visible
  const link = linkPara.querySelector('a');
  if (link) {
    link.style.color = '#00ffff';
  }
});


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
  para.textContent = 'Write your text here.';
  para.style.color = 'white';
  para.style.backgroundColor = 'black';
  para.style.padding = '10px';
  para.style.width = '250px';
  para.style.textAlign = 'center';
  sect.appendChild(para);
});


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
  para.style.color = 'white';
  para.style.backgroundColor = 'black';
  para.style.padding = '10px';
  para.style.width = '250px';
  para.style.textAlign = 'center';
}

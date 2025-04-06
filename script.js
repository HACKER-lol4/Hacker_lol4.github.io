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

const sect = document.querySelector('section');
const para = document.createElement('p');
para.textContent = 'Write your text here.';
sect.appendChild(para);
const text = document.createTextNode(' — the premier source for web development knowledge.');
const linkPara = document.querySelector('p');
linkPara.appendChild(text);
sect.appendChild(linkPara);
sect.removeChild(linkPara);
linkPara.remove();
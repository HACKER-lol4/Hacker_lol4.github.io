
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

function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  
  // For now, just show an alert with the form data
  alert('Form submitted!\n\nName: ' + data.name + '\nEmail: ' + data.email + '\nMessage: ' + data.message);
  event.target.reset();
}

Plotly.d3.csv('Trillions -  $Trillions 2024.csv', function(err, rows){
  function unpack(rows, key) {
      return rows.map(function(row) { return row[key]; });
  }

  var data = [{
    type: 'bar',
    x: unpack(rows, 'Trillion dollars statistics'),
    y: unpack(rows, 'Households average income'),
    }];

  var layout = {
        title: 'Size of 1 trillion dollars in the US',
  };

   Plotly.plot('barPlot', data, layout);
  });
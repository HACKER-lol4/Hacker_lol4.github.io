
function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  alert('Form submitted!\n\nName: ' + data.name + '\nEmail: ' + data.email + '\nMessage: ' + data.message);
  event.target.reset();
}

fetch('./attached_assets/Trillions -  $Trillions 2024.csv')
  .then(response => response.text())
  .then(csvData => {
    const rows = csvData.split('\n')
      .filter(row => row.trim())
      .map(row => row.split(','))
      .slice(1); // Skip header row

    const data = [{
      type: 'bar',
      x: rows.map(row => row[1]), // 'what' column
      y: rows.map(row => parseFloat(row[0])), // 'trillion US$' column
      text: rows.map(row => row[3]), // 'notes' column
      hoverinfo: 'text+y',
      marker: {
        color: rows.map(row => row[4] === 'spending' ? '#FF4136' : '#2ECC40')
      }
    }];

    const layout = {
      title: 'Global Trillion Dollar Statistics',
      xaxis: {
        title: 'Category',
        tickangle: -45
      },
      yaxis: {
        title: 'Trillion US$'
      },
      margin: {
        b: 150,
        l: 50,
        r: 50,
        t: 50
      }
    };

    Plotly.newPlot('barPlot', data, layout);
  })
  .catch(error => console.error('Error loading data:', error));

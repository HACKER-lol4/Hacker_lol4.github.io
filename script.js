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
      .map(row => row.split(','))
      .filter(row => row[0] && !isNaN(row[0]));
    
    const data = [{
      type: 'bar',
      x: rows.map(row => row[1]),
      y: rows.map(row => parseFloat(row[0])),
      text: rows.map(row => row[3]),
      hoverinfo: 'text',
      marker: {
        color: rows.map(row => row[4]).map(cat => {
        const colors = {
          'earning': '#4CAF50',
          'spending': '#2196F3',
          'saving': '#8BC34A',
          'fighting': '#F44336',
          'losing': '#FF5722',
          'helping': '#9C27B0',
          'hoarding': '#FFC107',
          'owing': '#795548'
        };
        return colors[cat] || '#9E9E9E';
      })
    }
  }];

  var layout = {
    title: 'Global Trillion Dollar Statistics',
    xaxis: {
      tickangle: -45
    },
    yaxis: {
      title: 'Trillion US$'
    },
    margin: {
      b: 150
    }
  };

  Plotly.newPlot('barPlot', data, layout);
});
function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  alert('Form submitted!\n\nName: ' + data.name + '\nEmail: ' + data.email + '\nMessage: ' + data.message);
  event.target.reset();
}

Plotly.d3.csv('./attached_assets/Trillions -  $Trillions 2024.csv', function(err, rows){
  if(err) {
    console.error('Error loading CSV:', err);
    return;
  }
  if(!rows || rows.length === 0) {
    console.error('No data found in CSV');
    return;
  }
  function unpack(rows, key) {
    return rows.map(function(row) { return row[key]; });
  }

  var data = [{
    type: 'bar',
    x: unpack(rows, 'what'),
    y: unpack(rows, 'trillion US$'),
    text: unpack(rows, 'notes / story / interesting fact'),
    hoverinfo: 'text',
    marker: {
      color: unpack(rows, 'category').map(cat => {
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
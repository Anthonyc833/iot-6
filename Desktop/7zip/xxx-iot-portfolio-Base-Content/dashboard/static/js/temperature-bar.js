var chartCanvas1 = document.getElementById('static-chart');

var barData = {
            labels: ['Apple'],
            datasets: [{
                label: 'Popularity',
                data: [12],
                borderWidth: 1,
          }],
};

var barOptions = {
           scales: {yAxes: [{ticks: { beginAtZero: true,},}],},
};

var myChart1 = new Chart(chartCanvas1, {
          type: 'bar',
          data: barData,
          options: barOptions,
});

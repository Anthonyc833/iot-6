var chartCanvas1 = document.getElementById('static-chart');

var barData = {
            labels: ['Apple'],
            datasets: [{
                label: 'Popularity',
                data: [12],
                borderWidth: 1,
		backgroundColor:['rgba(250, 1, 0, 0.2)'],
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

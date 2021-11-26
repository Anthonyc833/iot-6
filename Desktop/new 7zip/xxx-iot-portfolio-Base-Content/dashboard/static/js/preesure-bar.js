var chartCanvas2 = document.getElementById('pressure-chart');

var barData = {
            labels: ['Pressure'],
            datasets: [{
                label: 'Pressure',
                data: [110 ],
                borderWidth: 1,
		backgroundColor:['rgba(80, 0, 0, 0.4)'],
          }],
};

var barOptions = {
           scales: {yAxes: [{ticks: { beginAtZero: true,},}],},
};

var myChart1 = new Chart(chartCanvas2, {
          type: 'bar',
          data: barData,
          options: barOptions,
});

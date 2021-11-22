var chartCanvas3 = document.getElementById('hummidity-chart');

var barData = {
            labels: ['Apple'],
            datasets: [{
                label: 'Popularity',
                data: [12, 5, 8, 23, 17, 6],
                backgroundColor:['rgba(192, 0, 0, 0.4)'],
		
          }],
};

var barOptions = {
           scales: {yAxes: [{ticks: { beginAtZero: true,},}],},
	   Background:'#3DCE65',
};

var myChart1 = new Chart(chartCanvas3, {
          type: 'bar',
          data: barData,
          options: barOptions,
});

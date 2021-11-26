var c1 = document.getElementById('line-chart')
var lineData = {
	labels: ['15-34', '35-44', '45-54', '55-64', '65+',],    


    datasets: [
				{
					label: 'temperture',
					line: '',
					data: [60, 58, 50, 40, 48, 50],
					borderWidth: 2,
					lineTension: 0.2,
					fill: false,
					borderColor: ['rgba(128, 64, 65, 1)']
				}
			  ]

};


    



lineOptions = {
			legend: {display: false},
			title: {display: true,
		    text: 'Managers Per Age Range'
			},
			scales: {
				xAxes: [{
					scaleLabel: { 
					display: true, 
					labelString: 'Age range',
					},
				}],
				yAxes: [{ 
					scaleLabel:{ 
					display: true, 
					labelString: 'Quantity', 
				}, 
				ticks: { 
					beginAtZero: false 
				}, 
			}],
		}, 
};
		   





myLineChart1 = new Chart(c1,{
								type: 'line',
								data: lineData,
								options: lineOptions,
							}
						)

function generate_chart(game_data) {
    console.log("Attempting to generate Chart");

    console.log(game_data)

    // determine labels
    var labels_array = []
    for (i = 1;i <= game_data[0].length; i++) {
        labels_array.push(i);
    }

    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels_array,
            datasets: [
                {
                    backgroundColor: 'rgba(0, 0, 255, 0.2)',
                    label: 'Corp Credits',
                    data: game_data[0],
                    borderWidth: 1,
                    lineTension: 0
                },
                {
                    backgroundColor: 'rgba(255, 0, 0, 0.2)',
                    label: 'Runner Credits',
                    data: game_data[1],
                    borderWidth: 1,
                    lineTension: 0
                }
            ]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}


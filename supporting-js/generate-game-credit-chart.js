function generate_chart(game_data) {
    console.log("Attempting to generate Chart");

    // determine labels
    var labels_array = []
    for (i = 1;i <= game_data.length; i++) {
        labels_array.push(i);
    }

    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels_array,
            datasets: [{
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                label: 'Credits',
                data: game_data,
                borderWidth: 1,
                lineTension: 0
            }]
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


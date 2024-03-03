function analyzeCycle() {
    var firstDay = new Date(document.getElementById('first-day').value);
    var lastDay = new Date(document.getElementById('last-day').value);

    // Calculate cycle length
    var cycleLength = (lastDay.getTime() - firstDay.getTime()) / (1000 * 3600 * 24);
    var averageCycleLength = 28; // Set default average cycle length

    // Create chart
    var ctx = document.getElementById('cycle-chart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Cycle Length', 'Average Cycle Length'],
            datasets: [{
                label: 'Days',
                data: [cycleLength, averageCycleLength],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Email alert
    var today = new Date();
    var oneDay = 24 * 60 * 60 * 1000;
    var nextPeriodDate = new Date(today.getTime() + (averageCycleLength * oneDay));
    if (nextPeriodDate.getMonth() !== lastDay.getMonth()) {
        alert("Your next period is approaching! It's on " + nextPeriodDate.toDateString());
        // Code for sending email alert (server-side)
    }
}
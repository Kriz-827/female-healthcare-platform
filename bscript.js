function calculatePeriod() {
    var startDate = document.getElementById("start-date").value;
    var upcomingDate = new Date(startDate);
    upcomingDate.setDate(upcomingDate.getDate() + 28);

    document.getElementById("upcoming-date").innerHTML = "Your upcoming period date is: " + upcomingDate.toDateString();

    // Send the start date to the backend for further processing
    sendStartDate(startDate);
}

function sendStartDate(startDate) {
    fetch("/calculate", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ "start_date": startDate })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Error:", error));
}

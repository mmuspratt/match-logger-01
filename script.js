function incrementCounter(buttonNumber) {
    let countElement = document.getElementById('count' + buttonNumber);
    let currentCount = parseInt(countElement.textContent);
    countElement.textContent = currentCount + 1;
}

function exportCounts() {
    // Create an array to hold the data
    let data = ['Event'];

    // Loop through each button and get its count
    for (let i = 1; i <= 12; i++) {
        let countElement = document.getElementById(`count${i}`);
        let count = parseInt(countElement.textContent);
        let buttonName = countElement.parentNode.textContent.split(":")[0];

        // Add button name 'count' times
        for (let j = 0; j < count; j++) {
            data.push(buttonName);
        }
    }

    // Convert the data array to CSV format
    let csvContent = data.join("\n");

    // Create a blob from the CSV content
    let blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    
    // Create a download link for the blob
    let link = document.createElement("a");
    let url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    let timestamp = new Date().toISOString().slice(0,19).replace("T", "_").replace(/:/g, "-"); link.setAttribute("download", `match_log_${timestamp}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}


function resetCounts() {
    for (let i = 1; i <= 12; i++) {
        document.getElementById(`count${i}`).textContent = '0';
    }
}

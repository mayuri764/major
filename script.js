function processImage() {
    let status = document.getElementById('status');
    status.innerText = "Processing...";

    // Simulating ML Model Processing Delay
    setTimeout(() => {
        status.innerText = "Analysis Complete! Redirecting...";
        window.location.href = "results.html";  // Redirect to results page
    }, 3000);
}

const params = new URLSearchParams(window.location.search);
const input = document.getElementById('urlInput');
const button = document.getElementById('downloadBtn');
const progressBar = document.getElementById('progressBar');
let fileUrl = params.get('url');
if (fileUrl) {
  input.value = fileUrl; // Prefill if ?url= exists
}
button.addEventListener('click', function() {
  const urlToDownload = input.value.trim();
  if (urlToDownload) {
    progressBar.style.display = 'block';
    progressBar.value = 0;
    let timePassed = 0;
    const totalTime = 5000; // 5 seconds
    const interval = 100; // update every  
    const timer = setInterval(() => {
    timePassed += interval;
    progressBar.value = (timePassed / totalTime) * 100;
    if (timePassed >= totalTime) {
      clearInterval( {
        const link = document.createElement('a');
        link.href = urlToDownload;
        link.download = '';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        // Reset progress bar
          progressBar.style.display = 'none';
          progressBar.value = 0;
        }
      }, interval);
    } else {
      alert('Please enter a URL first.');
    }
  });

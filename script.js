document.addEventListener('DOMContentLoaded', function() {
    // Function to update the current UTC time
    function updateUTCTime() {
        const currentDate = new Date();
        const currentTime = currentDate.toUTCString().split(' ')[4];
        document.querySelector('[data-testid="currentUTCTime"]').textContent = currentTime;
    }

    // Update the time immediately
    updateUTCTime();

    // Set up an interval to update the time every second (1000 milliseconds)
    setInterval(updateUTCTime, 1000);

    // Get the current day of the week
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDate = new Date();
    const currentDay = daysOfWeek[currentDate.getUTCDay()];
    document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = currentDay;
});
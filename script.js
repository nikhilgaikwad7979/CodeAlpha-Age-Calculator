function calculateAge() {
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);

    // Validate input ranges
    if (!day || !month || !year || day < 1 || day > 31 || month < 1 || month > 12 || year > new Date().getFullYear()) {
        document.getElementById('result').textContent = "Please enter a valid date.";
        return;
    }

    const today = new Date();
    let ageYears = today.getFullYear() - year;
    let ageMonths = today.getMonth() - (month - 1);
    let ageDays = today.getDate() - day;

    // Adjust days and months if needed
    if (ageDays < 0) {
        const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0); // Get last day of previous month
        ageDays += prevMonth.getDate();
        ageMonths -= 1;
    }

    if (ageMonths < 0) {
        ageYears -= 1;
        ageMonths += 12;
    }

    if (ageYears < 0) {
        document.getElementById('result').textContent = "Invalid date. Please enter a date in the past.";
        return;
    }

    document.getElementById('result').textContent = 
        `Your age is ${ageYears} years, ${ageMonths} months, and ${ageDays} days.`;
}
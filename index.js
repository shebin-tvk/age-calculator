function calculateAge() {
    const birthdateInput = document.getElementById("birthdate").value;
    if (!birthdateInput) {
        document.getElementById("result").innerText = "Please select a birthdate.";
        return;
    }

    const birthdate = new Date(birthdateInput);
    const today = new Date();

    let years = today.getFullYear() - birthdate.getFullYear();
    let months = today.getMonth() - birthdate.getMonth();
    let days = today.getDate() - birthdate.getDate();

    // Adjust for months
    if (months < 0) {
        years--;
        months += 12;
    }

    // Adjust for days
    if (days < 0) {
        months--;
        const previousMonth = (today.getMonth() - 1 + 12) % 12;
        const daysInPreviousMonth = new Date(today.getFullYear(), previousMonth + 1, 0).getDate();
        days += daysInPreviousMonth;
    }

    document.getElementById("result").innerText = `You are ${years} years, ${months} months, and ${days} days old.`;
}
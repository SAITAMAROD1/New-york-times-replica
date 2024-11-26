// Example: Update date dynamically
document.addEventListener('DOMContentLoaded', () => {
    const dateElement = document.querySelector('.date');
    const date = new Date();
    const formattedDate = date.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    dateElement.textContent = formattedDate;
});

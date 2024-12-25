function updateClock() {
  const clock = document.getElementById('clock');
  const dayElement = document.getElementById('day');
  const dateElement = document.getElementById('date');
  const now = new Date();

  // Get time components
  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');

  // Determine AM/PM and convert to 12-hour format
  const amPm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12;

  // Update clock
  clock.textContent = `${hours}:${minutes}:${seconds} ${amPm}`;

  // Get day and date components
  const day = now.toLocaleDateString(undefined, { weekday: 'long' }); // Get day name
  const date = now.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });

  // Update day and date
  dayElement.textContent = day;
  dateElement.textContent = date;
}

function updateGreeting() {
  const greeting = document.querySelector('.greeting');
  const now = new Date();
  const hours = now.getHours();
  if (hours < 12) {
    greeting.textContent = 'Good Morning!';
  } else if (hours < 18) {
    greeting.textContent = 'Good Afternoon!';
  } else {
    greeting.textContent = 'Good Evening!';
  }
}

setInterval(updateClock, 1000);
updateClock();
updateGreeting();

// Build clock hands movement
function updateClocks() {
  const now = new Date();
  const h = now.getHours() % 12;
  const m = now.getMinutes();
  const s = now.getSeconds();
  const msDigit = 10 - Math.floor(now.getMilliseconds() / 100);
  const ampm = now.getHours() >= 12 ? 'P.M' : 'A.M';

  const hourHand = document.querySelector('.hour');
  const minuteHand = document.querySelector('.minute');
  const secondHand = document.querySelector('.second');

  // Smooth second hand only when not at 0 to avoid flicker
  if (s === 0) {
    secondHand.classList.remove('hand-transition');
  } else {
    secondHand.classList.add('hand-transition');
  }

  // Rotate hands (add 90deg offset for correct alignment)
  const hourDeg   = (h * 30) + (m * 0.5) + 90;
  const minuteDeg = (m * 6) + (s * 0.1) + 90;
  const secondDeg = (s * 6) + 90;

  hourHand.style.transform = `rotate(${hourDeg}deg)`;
  minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
  secondHand.style.transform = `rotate(${secondDeg}deg)`;

  // Update digital clock
  document.getElementById('digital-clock').innerText =
    `${String(h || 12).padStart(2,'0')} : ${String(m).padStart(2,'0')} : ${String(s).padStart(2,'0')} : ${String(msDigit).padStart(2,'0')} ${ampm}`;
}

// Call clock every 100ms
setInterval(updateClocks, 100);
updateClocks();

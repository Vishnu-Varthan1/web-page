const form = document.querySelector('.contact-form');

form.addEventListener('submit', function (e) {
  const name = form.querySelector('input[name="username"]').value.trim();
  const email = form.querySelector('input[name="email"]').value.trim();
  const message = form.querySelector('textarea[name="message"]').value.trim();

  if (!name || !email || !message) {
    alert("❌ Please fill in all fields.");
    e.preventDefault(); // Stops the form from submitting
  } else {
    alert("✅ Message sent successfully! (Just a demo alert)");
  }
});

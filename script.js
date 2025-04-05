// Show a popup when someone clicks "Shop Now"
document.querySelectorAll('.product-card a').forEach(button => {
    button.addEventListener('click', (e) => {
      alert("You're being redirected to shop this pretty find! 💖");
    });
  });
  
  // Filter products (by name or keyword)
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', function () {
      const filter = searchInput.value.toLowerCase();
      const cards = document.querySelectorAll('.product-card');
  
      cards.forEach(card => {
        const title = card.querySelector('h2').textContent.toLowerCase();
        if (title.includes(filter)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  }
  
  // Optional: Dark mode toggle
  const toggleButton = document.getElementById('darkToggle');
  if (toggleButton) {
    toggleButton.addEventListener('click', () => {
      document.body.classList.toggle('dark');
    });
  }
  
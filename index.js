const darkModeToggle = document.getElementById('darkModeToggle');

darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  const isDarkModeEnabled = document.body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDarkModeEnabled);
});

const isDarkModeEnabled = JSON.parse(localStorage.getItem('darkMode'));
if (isDarkModeEnabled) {
  document.body.classList.add('dark-mode');
}

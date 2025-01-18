document.addEventListener('DOMContentLoaded', function() {
    // Set the current year in the footer
    document.getElementById('year').textContent = new Date().getFullYear();
  
    // Set the last modified date in the footer
    document.getElementById('lastModified').textContent = document.lastModified;
  
    // Hamburger menu functionality for mobile view
    document.getElementById('hamburger').addEventListener('click', function() {
      const navMenu = document.getElementById('navMenu');
      navMenu.classList.toggle('show');
      this.textContent = navMenu.classList.contains('show') ? 'X' : '☰'; // Toggle text between 'X' and '☰'
    });
  });
  
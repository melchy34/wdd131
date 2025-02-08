  // Function to create and display temple cards
  function displayTemples(templesArray) {
    const container = document.getElementById("temple-cards-container");
    container.innerHTML = ''; // Clear previous temple cards
  
    templesArray.forEach(temple => {
      const templeCard = document.createElement("div");
      templeCard.classList.add("temple-card");
  
      templeCard.innerHTML = `
        <h2>${temple.name}</h2>
        <p><strong>Location:</strong> ${temple.location}</p>
        <p><strong>Dedicated:</strong> ${temple.dedicatedDate}</p>
        <p><strong>Area:</strong> ${temple.area} sq ft</p>
        <img src="${temple.image}" alt="Image of ${temple.name}" loading="lazy">
      `;
  
      container.appendChild(templeCard);
    });
  }
  
  // Filter functions based on categories
  function filterTemples(filter) {
    let filteredTemples = [];
    
    if (filter === 'old') {
      filteredTemples = temples.filter(temple => new Date(temple.dedicatedDate).getFullYear() < 1900);
    } else if (filter === 'new') {
      filteredTemples = temples.filter(temple => new Date(temple.dedicatedDate).getFullYear() > 2000);
    } else if (filter === 'large') {
      filteredTemples = temples.filter(temple => temple.area > 90000);
    } else if (filter === 'small') {
      filteredTemples = temples.filter(temple => temple.area < 10000);
    } else {
      filteredTemples = temples; // Show all temples for Home
    }
  
    displayTemples(filteredTemples);
  }
  
  // Event listeners for the navigation menu
  document.getElementById('nav-home').addEventListener('click', () => filterTemples('home'));
  document.getElementById('nav-old').addEventListener('click', () => filterTemples('old'));
  document.getElementById('nav-new').addEventListener('click', () => filterTemples('new'));
  document.getElementById('nav-large').addEventListener('click', () => filterTemples('large'));
  document.getElementById('nav-small').addEventListener('click', () => filterTemples('small'));
  
  // Footer references
  const year = new Date().getFullYear();
  document.getElementById("footer-year").textContent = year;
  document.getElementById("footer-last-modified").textContent = document.lastModified;
  
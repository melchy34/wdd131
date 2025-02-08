// Array of product objects
const products = [
    { id: '1', name: 'Product A' },
    { id: '2', name: 'Product B' },
    { id: '3', name: 'Product C' },
    { id: '4', name: 'Product D' }
];

// Populate the product select dropdown
const productSelect = document.getElementById('productName');
products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id; // Use product id as value
    option.textContent = product.name; // Use product name as display text
    productSelect.appendChild(option);
});

// Form submission handler
const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form from submitting the traditional way

    // Form validation
    const productName = document.getElementById('productName');
    const rating = document.querySelector('input[name="rating"]:checked');
    const installationDate = document.getElementById('installationDate');
    
    if (!productName.value) {
        alert("Please select a product.");
        return;
    }

    if (!rating) {
        alert("Please provide an overall rating.");
        return;
    }

    if (!installationDate.value) {
        alert("Please select the installation date.");
        return;
    }

    // Collecting form data
    const usefulFeatures = [];
    const featureCheckboxes = document.querySelectorAll('input[name="usefulFeatures"]:checked');
    featureCheckboxes.forEach(checkbox => {
        usefulFeatures.push(checkbox.value);
    });

    const writtenReview = document.getElementById('writtenReview').value;
    const userName = document.getElementById('userName').value;

    // Display the collected data in the console (or send to a server)
    console.log("Product Name:", productName.options[productName.selectedIndex].text);
    console.log("Rating:", rating.value);
    console.log("Installation Date:", installationDate.value);
    console.log("Useful Features:", usefulFeatures.join(', '));
    console.log("Written Review:", writtenReview);
    console.log("User Name:", userName);

    // Feedback to user after submission
    alert("Thank you for submitting your review!");
    
    // Optionally, clear the form
    form.reset();
});

// Rating system interaction (for visual feedback)
const ratingLabels = document.querySelectorAll('.rating label');
ratingLabels.forEach(label => {
    label.addEventListener('click', function() {
        ratingLabels.forEach(l => l.style.color = '#ccc'); // Reset color
        this.style.color = 'gold'; // Highlight the clicked star
    });
});

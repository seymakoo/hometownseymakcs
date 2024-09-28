// JS file that adds dynamic effects to the page

document.addEventListener('DOMContentLoaded', function () {
    // Add hover effect to images
    let images = document.querySelectorAll('.places img');
    images.forEach((img) => {
        img.addEventListener('mouseover', function () {
            this.style.transform = 'scale(1.1)';
            this.style.transition = 'transform 0.3s ease';
        });

        img.addEventListener('mouseout', function () {
            this.style.transform = 'scale(1)';
        });
    });

    // Randomize the order of the images when the page loads
    let placesContainer = document.querySelector('.activity-container');
    let places = Array.from(placesContainer.children);
    places.sort(() => Math.random() - 0.5); // Randomize order
    places.forEach((place) => {
        placesContainer.appendChild(place); // Append in new order
    });

    // Add time-based greetings in the guide section
    let guideInfo = document.querySelector('.guide-info');
    let currentTime = new Date().getHours();
    let greeting;

    if (currentTime >= 5 && currentTime < 12) {
        greeting = "Good morning! Ready to explore Istanbul?";
    } else if (currentTime >= 12 && currentTime < 18) {
        greeting = "Good afternoon! It's a perfect time to discover the city.";
    } else {
        greeting = "Good evening! How about a relaxing night walk through Istanbul?";
    }

    let greetingElement = document.createElement('h2');
    greetingElement.textContent = greeting;
    guideInfo.appendChild(greetingElement);
    
    // Image click counter
    images.forEach((img) => {
        let clickCounter = 0;
        img.addEventListener('click', function () {
            clickCounter++;
            alert(`You've clicked this image ${clickCounter} times!`);
        });
    });
});

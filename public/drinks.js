const drinkDetails = {
    "Blood Orange": {
        title: "Blood Orange",
        description: "Blood Orange is a refreshing Italian soda made with fresh blood orange juice and sparkling water, served over ice and garnished with a slice of blood orange for a vibrant pop of color."
    },
    "Limonata": {
        title: "Limonata",
        description: "Limonata is a traditional Italian soda made with fresh lemon juice and sparkling water, served over ice and garnished with a slice of lemon for a bright and refreshing drink."
    },
    "Gassoa": {
        title: "Gassoa",
        description: "Gassoa is a traditional Italian soda lemon lime."
    },
    "Ginger Ale": {
        title: "Ginger Ale",
        description: "Ginger Ale is a classic Italian soda made with fresh ginger and sparkling water, served over ice and garnished with a slice of ginger for a spicy and refreshing drink."
    },
    "Orange Soda": {
        title: "Orange Soda",
        description: "Orange Soda is a sweet and tangy Italian soda made with fresh orange juice and sparkling water, served over ice and garnished with a slice of orange for a burst of citrus flavor."
    },
    "Peach Tea": {
        title: "Peach Tea",
        description: "Peach Tea is a delicious Italian soda made with fresh peach juice and sparkling water,and garnished with a slice of peach for a sweet and fruity drink."
    }
};


document.addEventListener('DOMContentLoaded', function() {
    const modalContainer = document.getElementById('modalContainer');
    const closeModalButton = document.getElementById('closeModalButton');

    closeModalButton.addEventListener('click', function() {
        modalContainer.style.display = 'none';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const modalContainer = document.getElementById('modalContainer');
    const closeModalButton = document.getElementById('closeModalButton');

    closeModalButton.addEventListener('click', function() {
        modalContainer.style.display = 'none';
    });
});

function openModal(drinkName) {
    const drinkInfo = drinkDetails[drinkName];
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const stepsContainer = document.getElementById('stepsContainer');

    modalTitle.textContent = drinkInfo.title;
    modalDescription.textContent = drinkInfo.description;
    stepsContainer.style.display = 'none'; // Hide steps container

    document.getElementById('modalContainer').style.display = 'block'; // Show the modal
}
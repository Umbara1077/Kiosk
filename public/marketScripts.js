const marketDetails = {
    "Baiocchi": {
        title: "Baiocchi",
        description: "Baiocchi are Italian sandwich cookies filled with chocolate hazelnut cream."
    },
    "Chicche": {
        title: "Chicche",
        description: "Chicche are Italian chocolate candies filled with hazelnut cream."
    },
    "Abbracci": {
        title: "Abbracci",
        description: "Abbracci are Italian cookies that are half chocolate and half vanilla."
    },
    "Galletti": {
        title: "Galletti",
        description: "Galletti are Italian butter cookies."
    },
    "Coffee Beans": {
        title: "Coffee Beans",
        description: "Coffee Beans imported from Naples, Italy."
    },
    "Balsamic 1": {
        title: "8 Year Aged Balsamic Vinegar",
        description: "8 Year Aged Balsamic Vinegar imported from Modena, Italy."
    },
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

function openModal(marketName) {
    const marketInfo = marketDetails[marketName];
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const stepsContainer = document.getElementById('stepsContainer');

    modalTitle.textContent = marketInfo.title;
    modalDescription.textContent = marketInfo.description;
    stepsContainer.style.display = 'none'; // Hide steps container

    document.getElementById('modalContainer').style.display = 'block'; // Show the modal
}
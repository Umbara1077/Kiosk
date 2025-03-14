const pastrieDetails = {
    "Tiramisu": {
        title: "Tiramisu",
        description: "Tiramisu is a classic Italian dessert featuring the flavors of coffee, mascarpone cheese, and ladyfingers, creating a rich and creamy treat."
    },
    "Raspberry": {
        title: "Raspberry",
        description: "Raspberry is a fruity and refreshing Italian dessert featuring the sweet and tangy flavor of ripe raspberries, perfect for berry lovers."
    },
    "Chocolate Cake": {
        title: "Chocolate Cake",
        description: "Chocolate Cake is a decadent Italian dessert featuring rich and moist chocolate cake, perfect for chocolate lovers."
    },
    "Mini Cannoli": {
        title: "Mini Cannoli",
        description: "Mini Cannoli is a delightful Italian dessert featuring crispy pastry shells filled with sweet ricotta cheese and chocolate chips."
    },
    "Birthday Cake Bites": {
        title: "Birthday Cake Bites",
        description: "Birthday Cake is a fun and festive Italian dessert featuring colorful sprinkles and sweet vanilla cake, perfect for celebrating special occasions."
    },
    "Gelato Cakes": {
        title: "Gelato Cakes",
        description: "Gelato Cakes are a delicious frozen dessert made with layers of creamy gelato and delightful toppings, perfect for any celebration."
    },
    "Panna Cotta": {
        title: "Panna Cotta",
        description: "Panna Cotta is a classic Italian dessert made with sweetened cream, often served with fresh fruit or caramel sauce."
    },
    "Creme Brulee": {
        title: "Creme Brulee",
        description: "Creme Brulee is a rich and creamy custard topped with a layer of caramelized sugar, offering a perfect balance of textures."
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

function openModal(PastrieName) {
    const PastrieInfo = pastrieDetails[PastrieName];
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const stepsContainer = document.getElementById('stepsContainer');

    modalTitle.textContent = PastrieInfo.title;
    modalDescription.textContent = PastrieInfo.description;
    stepsContainer.style.display = 'none'; // Hide steps container

    document.getElementById('modalContainer').style.display = 'block'; // Show the modal
}
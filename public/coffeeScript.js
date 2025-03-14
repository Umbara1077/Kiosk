const coffeeDetails = {
    "Espresso": {
        title: "Espresso",
        description: "Espresso is a full-flavored, concentrated form of coffee served in shots. It is the base for many other coffee drinks.",
        steps: [
            "Start:.",
            "Turn on the espresso machine.",
            "Tray w/ paper towel.",
            "1 Sugar.",
            "Small Spoon.",
            "Espresso Cup w/ saucer.",
            "4oz to go w/ lid.",
            "Brew a shot of espresso into a cup.",

            "Brewing Process:",
            "Grind the coffee beans to a fine consistency into double portafilter.",
            "Tap to level the coffee.",
            "User tamper to press the coffee.",
            "Slight pressure to press the coffee.",
            "Insert the portafilter into the head unit."
        ]
    },
    "Cappuccino": {
        title: "Cappuccino",
        description: "Cappuccino is an Italian coffee drink prepared with espresso, hot milk, and steamed milk foam.",
        steps: [
            "Tray w/ paper towel.",
            "1 Sugar.",
            "Small Spoon.",
            "Medium Cappuccino Cup w/ saucer.",
            "8oz to go w/ lid.",
            "Brew a shot of espresso into a cup.",
            "5oz Steam and froth milk with small pitcher.",
            "Fill foam to the top of the cup.",

            "Brewing Process:",
            "Grind the coffee beans to a fine consistency into double portafilter.",
            "Tap to level the coffee.",
            "User tamper to press the coffee.",
            "Slight pressure to press the coffee.",
            "Insert the portafilter into the head unit."
        ]
    },

    "Latte": { 
        title: "Latte",
        description: "Latte is a coffee drink made with espresso and steamed milk.",
        steps: [
            "Tray w/ paper towl.",
            "2 Sugars.",
            "Small Spoon.",
            "Large Latte Cup w/ saucer.",
            "Brew a double shot of espresso into a cup.",
            "10oz to go w/ lid.",
            "Add steamed milk to the espresso 10oz with med pitcher.",
            "Pour the steamed milk foam into the cup up to the top.",

            "Brewing Process:",
            "Grind the coffee beans to a fine consistency into double portafilter.",
            "Tap to level the coffee.",
            "User tamper to press the coffee.",
            "Slight pressure to press the coffee.",
            "Insert the portafilter into the head unit.",
            "Steam Milk Process:",
            "Tip of steamer 1/2 milk 3-4 seconds.",
            "Full tip in milk 20 seconds.",
            "Walk to top of the cup.",
            "Finished making a Latte."
        ]
    },

    "Americano": {
        title: "Americano",
        description: "Americano is a coffee drink prepared by diluting an espresso shot with hot water.",
        steps: [
            "Tray w/ paper towel.",
            "1 Sugar.",
            "Small Spoon.",
            "Mini pot with milk.",
            "Regular Coffee Cup.",
            "10oz to go w/ lid.",
            "Brew a shot of espresso into a cup.",
            "Add hot water to the espresso.",

            "Brewing Process:",
            "Grind the coffee beans to a fine consistency into double portafilter.",
            "Tap to level the coffee.",
            "User tamper to press the coffee.",
            "Slight pressure to press the coffee.",
            "Insert the portafilter into the head unit."
        ]
    },

    "Macchiato": {
        title: "Macchiato",
        description: "Macchiato is an espresso coffee drink with a small amount of milk.",
        steps: [
            "Tray w/ paper towel.",
            "Small Glass of Water.",
            "1 Sugar.",
            "Small Spoon.",
            "Small Espresso Cup w/ saucer.",
            "4oz to go w/ lid.",
            "Brew a shot of espresso into a cup.",
            "Add a small amount of milk to the espresso (3oz).",

            "Brewing Process:",
            "Grind the coffee beans to a fine consistency into double portafilter.",
            "Tap to level the coffee.",
            "User tamper to press the coffee.",
            "Slight pressure to press the coffee.",
            "Insert the portafilter into the head unit."
        ]
    },

    "Portofino": {
        title: "Portofino",
        description: "Portofino is a coffee drink made with espresso, steamed milk, and hazelnut.",
        steps: [
            "Tray w/ paper towel.",
            "Small Glass.",
            "8oz to go w/ lid.",
            "Fill Hazelnut with .75oz.",
            "Small Spoon",
            "Use 1oz of Heavy Cream and 4oz od milk and steam w/ small pitcher.",
            "Fill foam to the top of the cup.",

            "Brewing Process:",
            "Grind the coffee beans to a fine consistency into double portafilter.",
            "Tap to level the coffee.",
            "User tamper to press the coffee.",
            "Slight pressure to press the coffee.",
            "Insert the portafilter into the head unit."
        ]
    },

    "Sorrento": {
        title: "Sorrento",
        description: "Sorrento is a coffee drink made with espresso, steamed milk, and amaretto.",
        steps: [
            "Tray w/ paper towel.",
            "Small Glass.",
            "8oz to go w/ lid.",
            "Fill Amaretto with .75oz.",
            "Small Spoon",
            "Use 1oz of Heavy Cream and 4oz od milk and steam w/ small pitcher.",
            "Fill foam to the top of the cup.",

            "Brewing Process:",
            "Grind the coffee beans to a fine consistency into double portafilter.",
            "Tap to level the coffee.",
            "User tamper to press the coffee.",
            "Slight pressure to press the coffee.",
            "Insert the portafilter into the head unit."
        ]
    },

    "Venezia": {
        title: "Venezia",
        description: "Venezia is a coffee drink made with espresso, steamed milk, and vanillia.",
        steps: [
            "Tray w/ paper towel.",
            "Small Glass.",
            "8oz to go w/ lid.",
            "Fill Vanilla with .75oz.",
            "Small Spoon",
            "Use 1oz of Heavy Cream and 4oz od milk and steam w/ small pitcher.",
            "Fill foam to the top of the cup.",

            "Brewing Process:",
            "Grind the coffee beans to a fine consistency into double portafilter.",
            "Tap to level the coffee.",
            "User tamper to press the coffee.",
            "Slight pressure to press the coffee.",
            "Insert the portafilter into the head unit."
        ]
    },

    "Hot Tea": {
        title: "Hot Tea",
        description: "Hot Tea is a drink made with hot water and a tea bag.",
        steps: [
            "Tray w/ paper towel.",
            "1 Sugar.",
            "Small Spoon.",
            "Mini pot with milk.",
            "Regular Coffee Cup.",
            "10oz to go w/ lid.",
            "Add hot water to the cup.",
            "Add a tea bag to the cup.",
            "Fill with hot water."
        ]
    },

    "Affogato": {
        title: "Affogato",
        description: "Affogato is a coffee drink made with espresso and a scoop of Gelato.",
        steps: [
            "Tray w/ paper towel.",
            "Medium Glass.",
            "10oz to go for gelato w/ lid.",
            "4oz espresso cup w/ lid.",
            "Small Spoon",
            "Fill 2 scoops of gelato.",
            "Brew a shot of espresso into a cup.",

            "Brewing Process:",
            "Grind the coffee beans to a fine consistency into double portafilter.",
            "Tap to level the coffee.",
            "User tamper to press the coffee.",
            "Slight pressure to press the coffee.",
            "Insert the portafilter into the head unit."
        ]
    },

    "Gelato Latte": {
        title: "Gelato Latte",
        description: "Gelato Latte is a coffee drink made with espresso, steamed milk, and gelato.",
        steps: [
            "Tall Glass.",
            "Squeeze chocolate sauce on the bottom and side of the glass.",
            "Fill 2 scoops of gelato.",
            "Brew a shot of espresso into the mini pot then pour over the gelato.",
            "Fill with steamed milk (1 inch to the top).",
            "Add chocholate sauce on top.",

            "Brewing Process:",
            "Grind the coffee beans to a fine consistency into double portafilter.",
            "Tap to level the coffee.",
            "User tamper to press the coffee.",
            "Slight pressure to press the coffee.",
            "Insert the portafilter into the head unit."
        ]
    },

    "Iced Coffee": {
        title: "Iced Coffee",
        description: "Iced Coffee is a coffee drink made with cold coffee and ice.",
        steps: [
            "Tray w/ paper towel.",
            "1 Sugar.",
            "Small Spoon.",
            "Medium Glass.",
            "10oz to go w/ lid.",
            "Fill with ice.",
            "Add cold coffee to the glass.",
            "Add sugar and stir."
        ]
    },

    "Iced Portofino": {
        title: "Iced Portofino",
        description: "Iced Portofino is a coffee drink made with espresso, steamed milk, hazelnut, and ice.",
        steps: [
            "Fill plastic cup with ice.",
            "Pour 1oz of Heavy Cream in plastic cup.",,
            "Fill Hazelnut with 1oz.",
            "Brew a shot of espresso into the mini port then pour ontop of ice.",
            "Fill milk, foam to the top of the cup.",

            "Brewing Process:",
            "Grind the coffee beans to a fine consistency into double portafilter.",
            "Tap to level the coffee.",
            "User tamper to press the coffee.",
            "Slight pressure to press the coffee.",
            "Insert the portafilter into the head unit."
        ]
    },

    "Iced Sorrento": {
        title: "Iced Sorrento",
        description: "Iced Sorrento is a coffee drink made with espresso, steamed milk, amaretto, and ice.",
        steps: [
            "Fill plastic cup with ice.",
            "Pour 1oz of Heavy Cream in plastic cup.",
            "Fill Amaretto with 1oz.",
            "Brew a shot of espresso into the mini port then pour ontop of ice.",
            "Fill milk, foam to the top of the cup.",

            "Brewing Process:",
            "Grind the coffee beans to a fine consistency into double portafilter.",
            "Tap to level the coffee.",
            "User tamper to press the coffee.",
            "Slight pressure to press the coffee.",
            "Insert the portafilter into the head unit."
        ]
    },

    "Iced Venezia": {
        title: "Iced Venezia",
        description: "Iced Venezia is a coffee drink made with espresso, steamed milk, vanilla, and ice.",
        steps: [
            "Fill plastic cup with ice.",
            "Pour 1oz of Heavy Cream in plastic cup.",
            "Fill Vanilla with 1oz.",
            "Brew a shot of espresso into the mini port then pour ontop of ice.",
            "Fill milk, foam to the top of the cup.",

            "Brewing Process:",
            "Grind the coffee beans to a fine consistency into double portafilter.",
            "Tap to level the coffee.",
            "User tamper to press the coffee.",
            "Slight pressure to press the coffee.",
            "Insert the portafilter into the head unit."
        ]
    },

    "Doppio": {
        title: "Doppio",
        description: "Doppio is a double shot of espresso.",
        steps: [
            "Tray w/ paper towel.",
            "Small Glass of Water.",
            "2 Sugar.",
            "Small Spoon.",
            "Medium Cappuccino Cup w/ saucer.",
            "8oz to go w/ lid.",
            "Brew a double shot of espresso into a cup.",

            "Brewing Process:",
            "Grind the coffee beans to a fine consistency into double portafilter.",
            "Tap to level the coffee.",
            "User tamper to press the coffee.",
            "Slight pressure to press the coffee.",
            "Insert the portafilter into the head unit."
        ]
    },
};

document.addEventListener('DOMContentLoaded', function() {
    const modalContainer = document.getElementById('modalContainer');
    const closeModalButton = document.getElementById('closeModalButton');

    closeModalButton.addEventListener('click', function() {
        modalContainer.style.display = 'none';
    });
});

function openModal(coffeeName) {
    const coffeeInfo = coffeeDetails[coffeeName];
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const stepsContainer = document.getElementById('stepsContainer');

    modalTitle.textContent = coffeeInfo.title;
    modalDescription.textContent = coffeeInfo.description;
    stepsContainer.innerHTML = ''; // Clear previous content

    stepsContainer.style.display = 'none';

    document.getElementById('modalContainer').style.display = 'block'; // Show the modal
}



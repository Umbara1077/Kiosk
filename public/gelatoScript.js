document.addEventListener('DOMContentLoaded', async function () {
    const gelatoGrid = document.querySelector('.gelato-grid');

    if (!gelatoGrid) {
        console.error("Error: The element with class 'gelato-grid' is missing from the DOM.");
        return;
    }

    try {
        const querySnapshot = await db.collection('menuItems').get(); 

        if (querySnapshot.empty) {
            console.warn("No gelato flavors found in Firestore.");
            return;
        }

        querySnapshot.forEach((doc) => {
            const gelato = doc.data();

            if (gelato.temporarilyUnavailable) {
                return; 
            }

            const gelatoCard = document.createElement('div');
            gelatoCard.classList.add('gelato-card');

            const img = document.createElement('img');
            img.src = gelato.gelatoImage || ''; 
            img.alt = gelato.name;

            const h3 = document.createElement('h3');
            h3.textContent = gelato.name; 

            gelatoCard.appendChild(img);
            gelatoCard.appendChild(h3);

            if (gelato.outOfStock) {
                const outOfStockOverlay = document.createElement('div');
                outOfStockOverlay.classList.add('out-of-stock-overlay');
                outOfStockOverlay.textContent = 'Out of Stock';
                gelatoCard.appendChild(outOfStockOverlay);
                gelatoCard.classList.add('non-clickable');
            }

            gelatoGrid.appendChild(gelatoCard);
        });
    } catch (error) {
        console.error("Error fetching gelato items: ", error);
    }
});

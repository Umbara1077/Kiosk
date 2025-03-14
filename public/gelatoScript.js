document.addEventListener('DOMContentLoaded', async function() {
    const gelatoGrid = document.querySelector('.gelato-grid');
    const modalContainer = document.getElementById('modalContainer');
    const closeModalButton = document.getElementById('closeModalButton');

    closeModalButton.addEventListener('click', function() {
        modalContainer.style.display = 'none';
    });

    try {
        const querySnapshot = await db.collection('gelatoItems')
            .where('onMenu', '==', true)
            .get();

        querySnapshot.forEach((doc) => {
            const gelato = doc.data();

            const gelatoCard = document.createElement('div');
            gelatoCard.classList.add('gelato-card');

            const img = document.createElement('img');
            img.src = gelato.imageUrl;
            img.alt = gelato.title;

            const h3 = document.createElement('h3');
            h3.textContent = gelato.title;

            gelatoCard.appendChild(img);
            gelatoCard.appendChild(h3);

            if (!gelato.inStock) {
                const outOfStockOverlay = document.createElement('div');
                outOfStockOverlay.classList.add('out-of-stock-overlay');
                outOfStockOverlay.textContent = 'Out of Stock';
                gelatoCard.appendChild(outOfStockOverlay);
                gelatoCard.classList.add('non-clickable');
            } else {
                gelatoCard.setAttribute('onclick', `openModal('${doc.id}')`);
            }

            gelatoGrid.appendChild(gelatoCard);
        });
    } catch (error) {
        console.error("Error fetching gelato items: ", error);
    }
});

function openModal(gelatoId) {
    db.collection('gelatoItems').doc(gelatoId).get().then((doc) => {
        if (doc.exists) {
            const gelatoInfo = doc.data();
            const modalTitle = document.getElementById('modalTitle');
            const modalDescription = document.getElementById('modalDescription');
            const stepsContainer = document.getElementById('stepsContainer');

            modalTitle.textContent = gelatoInfo.title;
            modalDescription.textContent = gelatoInfo.description;
            stepsContainer.style.display = 'none';

            document.getElementById('modalContainer').style.display = 'block';
        }
    }).catch((error) => {
        console.error("Error opening modal: ", error);
    });
}
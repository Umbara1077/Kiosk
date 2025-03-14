document.addEventListener('DOMContentLoaded', function() {
    const loginContainer = document.getElementById('login-container');
    const menuManagementContainer = document.getElementById('menu-management-container');
    const videoManagementContainer = document.getElementById('video-management-container');

    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const loginButton = document.getElementById('login-button');
    const loginError = document.getElementById('login-error');

    const currentMenuContainer = document.getElementById('current-menu');
    const replaceItemDropdown = document.getElementById('replace-item-dropdown');
    const swapItemDropdown = document.getElementById('swap-item-dropdown');
    const addNewItemButton = document.getElementById('add-new-item-button');
    const newItemTitleInput = document.getElementById('new-item-title');
    const newItemDescriptionInput = document.getElementById('new-item-description');
    const newItemUploadInput = document.getElementById('new-item-upload');
    const newItemUrlInput = document.getElementById('new-item-url');
    const replaceItemButton = document.getElementById('replace-item-button');

    const currentVideosContainer = document.getElementById('current-videos');
    const addNewVideoButton = document.getElementById('add-new-video-button');
    const newVideoUploadInput = document.getElementById('new-video-upload');
    const newVideoUrlInput = document.getElementById('new-video-url');

    const stockStatusDropdown = document.getElementById('stock-status-dropdown');
    const inStockCheckbox = document.getElementById('in-stock-checkbox');
    const updateStockButton = document.getElementById('update-stock-button');

    loginButton.addEventListener('click', function() {
        const email = emailInput.value;
        const password = passwordInput.value;

        auth.signInWithEmailAndPassword(email, password)
            .then(() => {
                toggleContainers();
                loadCurrentMenu();
                loadSwapableItems();
                loadCurrentVideos();
                loadStockItems(); // Load stock items after successful login
            })
            .catch(error => {
                loginError.textContent = "Login failed: " + error.message;
            });
    });

    function toggleContainers() {
        loginContainer.classList.add('hidden');
        menuManagementContainer.classList.remove('hidden');
        videoManagementContainer.classList.remove('hidden');
    }

    function loadCurrentMenu() {
        currentMenuContainer.innerHTML = '';
        replaceItemDropdown.innerHTML = '';

        db.collection('gelatoItems').where('onMenu', '==', true).get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    const gelato = doc.data();
                    currentMenuContainer.appendChild(createMenuItemCard(gelato));

                    const option = document.createElement('option');
                    option.value = doc.id;
                    option.textContent = gelato.title;
                    replaceItemDropdown.appendChild(option);
                });
            })
            .catch(error => {
                console.error("Error loading current menu: ", error);
            });
    }

    function loadSwapableItems() {
        swapItemDropdown.innerHTML = '';

        db.collection('gelatoItems').where('onMenu', '==', false).get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    const gelato = doc.data();

                    const option = document.createElement('option');
                    option.value = doc.id;
                    option.textContent = gelato.title;
                    swapItemDropdown.appendChild(option);
                });
            })
            .catch(error => {
                console.error("Error loading swapable items: ", error);
            });
    }

    function createMenuItemCard(gelato) {
        const itemCard = document.createElement('div');
        itemCard.classList.add('item-card');
        itemCard.innerHTML = `
            <img src="${gelato.imageUrl}" alt="${gelato.title}" class="gelato-image">
            <h3>${gelato.title}</h3>
        `;
        return itemCard;
    }

    function loadCurrentVideos() {
        currentVideosContainer.innerHTML = '';

        db.collection('videos').where('inRotation', '==', true).get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    const video = doc.data();
                    if (!video.title) {
                        video.title = getVideoTitle(video.url);
                        doc.ref.update({ title: video.title });
                    }
                    currentVideosContainer.appendChild(createVideoCard(video));
                });
            })
            .catch(error => {
                console.error("Error loading current videos: ", error);
            });
    }

    function createVideoCard(video) {
        const videoCard = document.createElement('div');
        videoCard.classList.add('item-card');
        videoCard.innerHTML = `
            <h3>${video.title}</h3>
        `;
        return videoCard;
    }

    addNewItemButton.addEventListener('click', function() {
        const title = newItemTitleInput.value;
        const description = newItemDescriptionInput.value;
        const file = newItemUploadInput.files[0];
        const url = newItemUrlInput.value;

        if (file) {
            const storageRef = firebase.storage().ref(`gelatoItems/${file.name}`);
            storageRef.put(file).then(snapshot => {
                snapshot.ref.getDownloadURL().then(downloadURL => {
                    addItemToFirestore(title, description, downloadURL);
                });
            }).catch(error => {
                console.error("Error uploading file:", error);
            });
        } else if (url) {
            addItemToFirestore(title, description, url);
        } else {
            console.error("No file or URL provided.");
        }
    });

    function addItemToFirestore(title, description, imageUrl) {
        const newItem = {
            title: title,
            description: description,
            imageUrl: imageUrl,
            onMenu: true,
            inStock: true
        };

        db.collection('gelatoItems').add(newItem)
            .then(() => {
                loadCurrentMenu();
                loadSwapableItems();
            })
            .catch(error => {
                console.error("Error adding new item: ", error);
            });
    }

    replaceItemButton.addEventListener('click', function() {
        const selectedItemId = replaceItemDropdown.value;
        const swapItemId = swapItemDropdown.value;

        const batch = db.batch();

        const selectedItemRef = db.collection('gelatoItems').doc(selectedItemId);
        const swapItemRef = db.collection('gelatoItems').doc(swapItemId);

        batch.update(selectedItemRef, { onMenu: false });
        batch.update(swapItemRef, { onMenu: true });

        batch.commit()
            .then(() => {
                loadCurrentMenu();
                loadSwapableItems();
            })
            .catch(error => {
                console.error("Error swapping items: ", error);
            });
    });

    addNewVideoButton.addEventListener('click', function() {
        const file = newVideoUploadInput.files[0];
        const url = newVideoUrlInput.value;

        if (file) {
            const storageRef = firebase.storage().ref(`videos/${file.name}`);
            storageRef.put(file).then(snapshot => {
                snapshot.ref.getDownloadURL().then(downloadURL => {
                    addVideoToFirestore(downloadURL);
                });
            }).catch(error => {
                console.error("Error uploading video:", error);
            });
        } else if (url) {
            addVideoToFirestore(url);
        } else {
            console.error("No file or URL provided.");
        }
    });

    function addVideoToFirestore(videoUrl) {
        const newVideo = {
            title: getVideoTitle(videoUrl),
            url: videoUrl,
            inRotation: true
        };

        db.collection('videos').add(newVideo)
            .then(() => {
                loadCurrentVideos();
            })
            .catch(error => {
                console.error("Error adding new video: ", error);
            });
    }

    function getVideoTitle(url) {
        const parts = url.split('/');
        return parts[parts.length - 1].split('.')[0].replace(/[-_]/g, ' ').replace(/%20/g, ' ');
    }

    function loadStockItems() {
        stockStatusDropdown.innerHTML = '';
    
        db.collection('gelatoItems').where('onMenu', '==', true).get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    const gelato = doc.data();
    
                    const option = document.createElement('option');
                    option.value = doc.id;
                    option.textContent = `${gelato.title} (${gelato.inStock ? 'In Stock' : 'Out of Stock'})`;
                    stockStatusDropdown.appendChild(option);
                });
            })
            .catch(error => {
                console.error("Error loading stock items: ", error);
            });
    }
    
    // Sync the checkboxes with the selected item's stock status
    stockStatusDropdown.addEventListener('change', function() {
        const selectedItemId = stockStatusDropdown.value;
    
        db.collection('gelatoItems').doc(selectedItemId).get()
            .then(doc => {
                if (doc.exists) {
                    const gelato = doc.data();
                    inStockCheckbox.checked = gelato.inStock;
                    outOfStockCheckbox.checked = !gelato.inStock;
                }
            })
            .catch(error => {
                console.error("Error fetching item data: ", error);
            });
    });
    
    // Update the stock status of the selected item
    updateStockButton.addEventListener('click', function() {
        const selectedItemId = stockStatusDropdown.value;
        const inStock = inStockCheckbox.checked;
    
        db.collection('gelatoItems').doc(selectedItemId).update({
            inStock: inStock
        })
        .then(() => {
            loadCurrentMenu();  // Reload the current menu to reflect the change
            loadStockItems();   // Reload the stock items to reflect the updated status
        })
        .catch(error => {
            console.error("Error updating stock status: ", error);
        });
    });
    
    inStockCheckbox.addEventListener('change', function() {
        if (inStockCheckbox.checked) {
            outOfStockCheckbox.checked = false;
        }
    });
    
    outOfStockCheckbox.addEventListener('change', function() {
        if (outOfStockCheckbox.checked) {
            inStockCheckbox.checked = false;
        }
    });

    loadStockItems();
});
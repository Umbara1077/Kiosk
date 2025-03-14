document.addEventListener('DOMContentLoaded', () => {
    const videoContainer = document.getElementById('video-container');
    const introVideo = document.getElementById('intro-video');
    const homePage = document.getElementById('home-page');
    const overlay = document.getElementById('overlay'); // Get the overlay element

    let videoSources = [];
    let currentVideoIndex = 0;

    // Fetch videos from Firestore
    db.collection('videos').where('inRotation', '==', true).get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            videoSources.push(doc.data().url);
        });
        if (videoSources.length > 0) {
            startVideoPlayback();
        } else {
            console.error('No videos in rotation.');
        }
    }).catch((error) => {
        console.error('Error fetching videos:', error);
    });

    function startVideoPlayback() {
        introVideo.src = videoSources[currentVideoIndex];
        introVideo.play();
        
        introVideo.addEventListener('ended', playNextVideo);
    }

    function playNextVideo() {
        currentVideoIndex = (currentVideoIndex + 1) % videoSources.length;
        introVideo.src = videoSources[currentVideoIndex];
        introVideo.play();
    }

    function hideVideoAndShowHome() {
        videoContainer.style.display = 'none';
        homePage.style.display = 'block';
    }

    function dismissVideo() {
        hideVideoAndShowHome();
        overlay.style.display = 'none';
    }

    overlay.addEventListener('click', dismissVideo);
});

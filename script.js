const videoContainer = document.getElementById('video-container');

// Liste des vidéos YouTube
const videos = [
    'https://www.youtube.com/watch?v=3P14G2Che-8', // Remplace VIDEO_ID_1 par l'ID de ta première vidéo
    'https://www.youtube.com/watch?v=UVp27NR5R6Q', // Remplace VIDEO_ID_2 par l'ID de ta deuxième vidéo
    'https://www.youtube.com/watch?v=IbINR6TNhFw'  // Remplace VIDEO_ID_3 par l'ID de ta troisième vidéo
];

// Fonction pour charger les vidéos
function loadVideos() {
    videos.forEach(videoUrl => {
        const iframe = document.createElement('iframe');
        iframe.src = videoUrl;
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
        iframe.allowFullscreen = true;
        videoContainer.appendChild(iframe);
    });
}

loadVideos();

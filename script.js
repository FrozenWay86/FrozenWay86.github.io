const videoContainer = document.getElementById('video-container');

// Liste des vidéos YouTube avec URLs d'intégration
const videos = [
    'https://www.youtube.com/embed/3P14G2Che-8',
    'https://www.youtube.com/embed/T7d7ULdGyP4',
    'https://www.youtube.com/embed/UVp27NR5R6Q'
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

const videoContainer = document.getElementById('video-container');

// Liste des vidéos YouTube
const videos = [
    'https://youtu.be/3P14G2Che-8?si=vxDYyeSYu_llFf1U', // Remplace VIDEO_ID_1 par l'ID de ta première vidéo
    'https://youtu.be/T7d7ULdGyP4?si=Xj8RxXNPcGEZ8vwJ', // Remplace VIDEO_ID_2 par l'ID de ta deuxième vidéo
    'https://youtu.be/UVp27NR5R6Q?si=uOpK9HHQFS0a1L6V'  // Remplace VIDEO_ID_3 par l'ID de ta troisième vidéo
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

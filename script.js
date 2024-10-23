const videos = [
    'https://www.youtube.com/embed/3P14G2Che-8',
    'https://www.youtube.com/embed/T7d7ULdGyP4',
    'https://www.youtube.com/embed/UVp27NR5R6Q'
];
let currentVideoIndex = 0;

function showSection(sectionId) {
    const sections = document.querySelectorAll('.block');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

function showTwitchSection(twitchSectionId) {
    const twitchSections = document.querySelectorAll('.twitch-section');
    twitchSections.forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(twitchSectionId).style.display = 'block';
}

function nextVideo() {
    currentVideoIndex = (currentVideoIndex + 1) % videos.length;
    document.getElementById('video-player').src = videos[currentVideoIndex];
}

function prevVideo() {
    currentVideoIndex = (currentVideoIndex - 1 + videos.length) % videos.length;
    document.getElementById('video-player').src = videos[currentVideoIndex];
}

document.addEventListener('DOMContentLoaded', () => {
    showSection('videos'); // La section vidéos est affichée par défaut
});

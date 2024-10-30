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

function showSubSection(subSectionId) {
    const subSections = document.querySelectorAll('.sub-section');
    subSections.forEach(subSection => {
        subSection.style.display = 'none';
    });
    document.getElementById(subSectionId).style.display = 'block';
}

function nextVideo() {
    currentVideoIndex = (currentVideoIndex + 1) % videos.length;
    const player = document.getElementById('video-player');
    player.classList.add('hidden');
    setTimeout(() => {
        player.src = videos[currentVideoIndex];
        player.classList.remove('hidden');
    }, 500);
}

function prevVideo() {
    currentVideoIndex = (currentVideoIndex - 1 + videos.length) % videos.length;
    const player = document.getElementById('video-player');
    player.classList.add('hidden');
    setTimeout(() => {
        player.src = videos[currentVideoIndex];
        player.classList.remove('hidden');
    }, 500);
}

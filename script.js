function showSection(sectionId) {
    // Masquer tous les blocs
    document.getElementById('videos').style.display = 'none';
    document.getElementById('speedruns').style.display = 'none';
    document.getElementById('contact').style.display = 'none';

    // Afficher seulement le bloc sélectionné
    document.getElementById(sectionId).style.display = 'block';
}

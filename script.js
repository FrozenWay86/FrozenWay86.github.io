function showSection(sectionId) {
    // Masquer tous les blocs
    document.querySelectorAll('.block').forEach(block => {
        block.style.display = 'none';
    });

    // Afficher seulement le bloc sélectionné
    document.getElementById(sectionId).style.display = 'block';
}

// Affiche par défaut la section des vidéos
document.getElementById('videos').style.display = 'block';

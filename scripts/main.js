// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Setup WhatsApp button
    document.querySelector('.whatsapp-button')
        .addEventListener('click', () => {
            window.open('https://wa.me/6281234567890', '_blank');
        });
});

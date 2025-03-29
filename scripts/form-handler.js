// Form handling for registration page
document.addEventListener('DOMContentLoaded', function() {
    // Setup form submission
    document.getElementById('registration-form')
        .addEventListener('submit', handleFormSubmit);
    
    // Setup WhatsApp button
    document.querySelector('.whatsapp-button')
        .addEventListener('click', () => {
            window.open('https://wa.me/6281234567890', '_blank');
        });
});

function handleFormSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = {
        name: form.name.value,
        school: form.school.value,
        email: form.email.value,
        whatsapp: form.whatsapp.value
    };
    
    // Validate form
    if (!validateForm(formData)) {
        return;
    }
    
    // Save to localStorage (mock backend)
    saveRegistration(formData);
    
    // Show success message
    showSuccessMessage(formData.name);
    
    // Reset form
    form.reset();
}

function validateForm(data) {
    // Simple validation
    if (!data.name || !data.school || !data.email || !data.whatsapp) {
        alert('Please fill all fields');
        return false;
    }
    
    if (!data.email.includes('@')) {
        alert('Please enter a valid email');
        return false;
    }
    
    return true;
}

function saveRegistration(data) {
    let registrations = JSON.parse(localStorage.getItem('fefoRegistrations') || '[]');
    registrations.push(data);
    localStorage.setItem('fefoRegistrations', JSON.stringify(registrations));
    
    // Update leaderboard (will be implemented later)
    updateLeaderboard();
}

function showSuccessMessage(name) {
    const messageElement = document.getElementById('success-message');
    messageElement.innerHTML = `
        <div class="success-message">
            <h4>Thank you, ${name}!</h4>
            <p>Your registration for FEFO 9th Event has been received.</p>
        </div>
    `;
    
    setTimeout(() => {
        messageElement.innerHTML = '';
    }, 5000);
}

function updateLeaderboard() {
    // TODO: Implement leaderboard update
    console.log('Updating leaderboard...');
}
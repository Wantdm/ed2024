document.getElementById('passwordForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const password = document.getElementById('passwordInput').value;
    const correctPassword = 'abc'; // Replace with the actual password

    console.log('Entered Password:', password); // Debugging: Log entered password

    if (password === correctPassword) {
        console.log('Password correct, redirecting...'); // Debugging: Log on correct password
        window.location.href = 'patients.html'; // Redirect to patient menu
    } else {
        console.log('Password incorrect'); // Debugging: Log on incorrect password
        document.getElementById('errorMessage').textContent = 'Incorrect password';
    }
});
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then(function(registrations) {
        for (let registration of registrations) {
            registration.unregister();
            console.log('Service Worker unregistered');
        }
    }).catch(function(error) {
        console.log('Service Worker unregistration failed: ', error);
    });
}
document.addEventListener('DOMContentLoaded', function() {
    const patientList = [
        { name: 'John Doe', serial: 'A123BC', isCurrent: false },
        { name: 'Jane Doe', serial: 'D456EF', isCurrent: true },
        // ... additional patients
    ];

    const patientListElement = document.getElementById('patientList');
    patientList.forEach(patient => {
        const listItem = document.createElement('li');
        const patientLink = `<a href="patient-details.html?name=${encodeURIComponent(patient.name)}">${patient.name} - ${patient.serial}</a>`;
        listItem.innerHTML = patient.isCurrent ? `<span class="current-patient">${patientLink}</span>` : patientLink;
        patientListElement.appendChild(listItem);
    });
});

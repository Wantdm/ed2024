document.addEventListener('DOMContentLoaded', function() {
    const patientList = [
        { name: 'John Doe', serial: 'ake-2894318', isCurrent: true },
        { name: 'Jane Doe', serial: 'D456EF', isCurrent: false },  
        { name: 'Alex Smith', serial: 'G789HI', isCurrent: false },
        { name: 'Emily White', serial: 'J101KL', isCurrent: false },
        { name: 'Michael Brown', serial: 'M112NO', isCurrent: false },
        { name: 'Sarah Johnson', serial: 'P213QR', isCurrent: false },
        { name: 'Oliver Williams', serial: 'S314TU', isCurrent: false },
        { name: 'Emma Jones', serial: 'U415VW', isCurrent: false },
        { name: 'Noah Davis', serial: 'W516XY', isCurrent: false },
        { name: 'Ava Wilson', serial: 'Y617Z8', isCurrent: false },
        { name: 'Liam Martinez', serial: 'Z718A2', isCurrent: false },
        { name: 'Sophia Garcia', serial: 'B819C3', isCurrent: false }
    ];

    const patientListElement = document.getElementById('patientList');
    patientList.forEach(patient => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <a href="patient-details.html?name=${encodeURIComponent(patient.name)}">
                ${patient.name} - ${patient.serial}
                ${patient.isCurrent ? '<span class="current-tag">Current</span>' : ''}
            </a>`;
        patientListElement.appendChild(listItem);
    });
});
function searchPatients() {
    const searchQuery = document.getElementById('searchInput').value.toLowerCase();
    const listItems = document.querySelectorAll('#patientList li');

    listItems.forEach(item => {
        const patientName = item.textContent.toLowerCase();
        if (patientName.includes(searchQuery)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
}
let currentPage = 1;
const patientsPerPage = 10; // Adjust as needed

function displayPatients(page) {
    const startIndex = (page - 1) * patientsPerPage;
    const endIndex = startIndex + patientsPerPage;
    const paginatedPatients = patientList.slice(startIndex, endIndex);

    // Clear current list
    patientListElement.innerHTML = '';

    // Add paginated patients
    paginatedPatients.forEach(addPatientToList);
}

function addPatientToList(patient) {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<a href="patient-details.html?name=${encodeURIComponent(patient.name)}">${patient.name} - ${patient.serial}</a>`;
    if (patient.isCurrent) {
        listItem.classList.add('current-patient');
    }
    patientListElement.appendChild(listItem);
}

// Call displayPatients on document load and when changing pages

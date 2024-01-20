document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const patientName = urlParams.get('name');
    const patientDetailsElement = document.getElementById('patientDetails');

    const patientDetails = {
        'John Doe': {
            allergies: 'Peanuts, Shellfish',
            emergencyContact: 'Jane Doe, +123456789',
            conditions: 'Diabetes Type 2',
            bloodType: 'O+',
            currentMedications: 'Metformin, Lisinopril',
            medicalHistory: 'Appendectomy in 2015, Chickenpox in childhood',
            recentLabResults: 'Glucose levels normal, slight increase in cholesterol'
        },
        'Jane Doe': {
            allergies: 'None',
            emergencyContact: 'John Doe, +987654321',
            conditions: 'Hypertension',
            bloodType: 'A-',
            currentMedications: 'Hydrochlorothiazide',
            medicalHistory: 'Tonsillectomy in 2010',
            recentLabResults: 'Blood pressure within target range'
        },
        'Michael Brown': {
            allergies: 'Aspirin',
            emergencyContact: 'Sarah Johnson, +198765432',
            conditions: 'Migraine',
            bloodType: 'B+',
            currentMedications: 'Sumatriptan',
            medicalHistory: 'Gallbladder surgery in 2018',
            recentLabResults: 'Normal blood work'
        },
        'Sarah Johnson': {
            allergies: 'Penicillin',
            emergencyContact: 'Michael Brown, +123456789',
            conditions: 'Anemia',
            bloodType: 'O-',
            currentMedications: 'Iron supplements',
            medicalHistory: 'Tonsillectomy in 2020',
            recentLabResults: 'Low hemoglobin levels'
        },
        'Oliver Williams': {
            allergies: 'None',
            emergencyContact: 'Emma Jones, +987654321',
            conditions: 'Epilepsy',
            bloodType: 'A+',
            currentMedications: 'Levetiracetam',
            medicalHistory: 'Appendectomy in 2015',
            recentLabResults: 'Normal EEG'
        },
        'Emma Jones': {
            allergies: 'Latex',
            emergencyContact: 'Oliver Williams, +112233445',
            conditions: 'Asthma',
            bloodType: 'AB+',
            currentMedications: 'Albuterol',
            medicalHistory: 'Knee surgery in 2019',
            recentLabResults: 'Good lung function'
        },
        'Noah Davis': {
            allergies: 'Pollen',
            emergencyContact: 'Ava Wilson, +998877665',
            conditions: 'Diabetes Type 1',
            bloodType: 'B-',
            currentMedications: 'Insulin',
            medicalHistory: 'Diagnosed with diabetes at age 7',
            recentLabResults: 'Stable glucose levels'
        },
        'Ava Wilson': {
            allergies: 'Nuts',
            emergencyContact: 'Noah Davis, +556677889',
            conditions: 'Celiac Disease',
            bloodType: 'AB-',
            currentMedications: 'Gluten-free diet',
            medicalHistory: 'Diagnosed with celiac disease in 2021',
            recentLabResults: 'No signs of intestinal damage'
        },
        'Liam Martinez': {
            allergies: 'Sulfa drugs',
            emergencyContact: 'Sophia Garcia, +223344556',
            conditions: 'Hypothyroidism',
            bloodType: 'A-',
            currentMedications: 'Levothyroxine',
            medicalHistory: 'Thyroidectomy in 2017',
            recentLabResults: 'Normal thyroid hormone levels'
        },
        'Sophia Garcia': {
            allergies: 'Seafood',
            emergencyContact: 'Liam Martinez, +998822334',
            conditions: 'Rheumatoid arthritis',
            bloodType: 'O+',
            currentMedications: 'Methotrexate',
            medicalHistory: 'Diagnosed with arthritis in 2018',
            recentLabResults: 'Elevated inflammation markers'
        },
        'Alex Smith': {
            allergies: 'Latex',
            emergencyContact: 'Emily White, +123123123',
            conditions: 'Asthma',
            bloodType: 'B+',
            currentMedications: 'Albuterol',
            medicalHistory: 'Frequent asthma attacks in childhood',
            recentLabResults: 'Normal lung function, no recent asthma attacks'
        },
        'Emily White': {
            allergies: 'Ibuprofen',
            emergencyContact: 'Alex Smith, +321321321',
            conditions: 'Migraines',
            bloodType: 'AB-',
            currentMedications: 'Sumatriptan',
            medicalHistory: 'Migraine diagnosis since age 20',
            recentLabResults: 'Normal neurological examination'
        },
        };

    const details = patientDetails[patientName];
    if (details) {
        patientDetailsElement.innerHTML = `
            <h3>${patientName}</h3>
            <p><strong>Allergies:</strong> ${details.allergies}</p>
            <p><strong>Emergency Contact:</strong> ${details.emergencyContact}</p>
            <p><strong>Conditions:</strong> ${details.conditions}</p>
            <p><strong>Blood Type:</strong> ${details.bloodType}</p>
            <p><strong>Current Medications:</strong> ${details.currentMedications}</p>
            <p><strong>Medical History:</strong> ${details.medicalHistory}</p>
            <p><strong>Recent Lab Results:</strong> ${details.recentLabResults}</p>
        `;
    } else {
        patientDetailsElement.innerHTML = '<p>No details available for this patient.</p>';
    }
});

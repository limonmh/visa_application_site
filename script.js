document.addEventListener('DOMContentLoaded', () => {
    const nationalitySelect = document.getElementById('nationality');
    const visaTypeSelect = document.getElementById('visaType');
    const documentChecklist = document.getElementById('documentChecklist');

    nationalitySelect.addEventListener('change', updateVisaTypes);
    visaTypeSelect.addEventListener('change', updateDocumentChecklist);

    function updateVisaTypes() {
        const nationality = nationalitySelect.value;
        visaTypeSelect.innerHTML = '<option value="">Select visa type</option>'; // Reset visa types

        if (nationality === 'BANGLADESH') {
            visaTypeSelect.innerHTML += '<option value="tourist">Tourist Visa</option>';
            visaTypeSelect.innerHTML += '<option value="business">Business Visa</option>';
        } else if (nationality === 'INDIA') {
            visaTypeSelect.innerHTML += '<option value="student">Student Visa</option>';
            visaTypeSelect.innerHTML += '<option value="work">Work Visa</option>';
        } else if (nationality === 'PAKISTAN') {
            visaTypeSelect.innerHTML += '<option value="tourist">Tourist Visa</option>';
            visaTypeSelect.innerHTML += '<option value="medical">Medical Visa</option>';
        }
    }

    function updateDocumentChecklist() {
        const visaType = visaTypeSelect.value;
        documentChecklist.innerHTML = ''; // Reset document checklist

        if (visaType === 'tourist') {
            documentChecklist.innerHTML += '<p>Required Documents for Tourist Visa:</p>';
            documentChecklist.innerHTML += '<ul><li>Passport</li><li>Photo</li><li>Travel Itinerary</li></ul>';
        } else if (visaType === 'business') {
            documentChecklist.innerHTML += '<p>Required Documents for Business Visa:</p>';
            documentChecklist.innerHTML += '<ul><li>Passport</li><li>Photo</li><li>Business Invitation Letter</li></ul>';
        } else if (visaType === 'student') {
            documentChecklist.innerHTML += '<p>Required Documents for Student Visa:</p>';
            documentChecklist.innerHTML += '<ul><li>Passport</li><li>Photo</li><li>Acceptance Letter</li></ul>';
        } else if (visaType === 'work') {
            documentChecklist.innerHTML += '<p>Required Documents for Work Visa:</p>';
            documentChecklist.innerHTML += '<ul><li>Passport</li><li>Photo</li><li>Job Offer Letter</li></ul>';
        } else if (visaType === 'medical') {
            documentChecklist.innerHTML += '<p>Required Documents for Medical Visa:</p>';
            documentChecklist.innerHTML += '<ul><li>Passport</li><li>Photo</li><li>Medical Appointment Letter</li></ul>';
        }
    }

    document.getElementById('applicationForm').addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent default form submission

        // Collect form data
        const formData = new FormData(e.target);

        // Here you can handle the form data, such as sending it to your server or processing it further
        console.log('Form Submitted');
        for (let [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }

        alert('Application Submitted Successfully!');
        e.target.reset(); // Reset the form
    });
});

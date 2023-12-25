function isValidEmail(email) {
    // Check if email has "@" and "."
    if (email.indexOf("@") > 0 && email.indexOf(".") > 0) {
        // Check if "@" appears before "."
        if (email.indexOf("@") < email.lastIndexOf(".")) {
            return true;
        }
    }
    return false;
}

function submitForm() {
    // Get form values
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let dob = document.getElementById('dob').value;
    let country = document.getElementById('country').value;
    let gender = document.querySelector('input[name="gender"]:checked');
    let profession = document.getElementById('profession').value;
    let email = document.getElementById('email').value;
    let mobileNumber = document.getElementById('mobileNumber').value;

    if (!isValidEmail(email)) {
        alert("Invalid email address. Please provide a valid email.");
        return;
    }

    if (!firstName || !lastName || !dob || !country || !gender || !profession || !email || !mobileNumber) {
        alert("All fields are mandatory. Please fill in all the details.");
        return;
    } else if (mobileNumber.length !== 10) {
        alert("Provide a valid 10-digit mobile number.");
        return;
    }

    // Display submitted data in the popup
    let submittedDataDiv = document.getElementById('submittedData');
    submittedDataDiv.innerHTML = `
        <strong>First Name:</strong> ${firstName}<br>
        <strong>Last Name:</strong> ${lastName}<br>
        <strong>Date of Birth:</strong> ${dob}<br>
        <strong>Country:</strong> ${country}<br>
        <strong>Gender:</strong> ${gender.value}<br>
        <strong>Profession:</strong> ${profession}<br>
        <strong>Email:</strong> ${email}<br>
        <strong>Mobile Number:</strong> ${mobileNumber}
    `;

    // Display the popup
    document.getElementById('popup').style.display = 'flex';
}

function resetForm() {
    document.getElementById('surveyForm').reset();
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
    resetForm();
}

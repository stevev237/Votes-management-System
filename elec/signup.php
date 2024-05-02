<?php
// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $registrationNumber = $_POST["registration_number"];
    $password = $_POST["password"];

    // Check if registration number exists in "regs.txt" file
    $registrations = file("regs.txt", FILE_IGNORE_NEW_LINES);
    if (in_array($registrationNumber, $registrations)) {
        // Registration number exists, proceed with sign-up
        // Hash the password securely
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

        // Append the registration number and hashed password to the users file
        $userRecord = $registrationNumber . "," . $hashedPassword . "\n";
        file_put_contents("users.txt", $userRecord, FILE_APPEND);

        echo "Account created successfully! You will be redirected to the login page in 5 seconds.";
        echo '<meta http-equiv="refresh" content="5;url=login.html">';
        exit();
    } else {
        // Registration number not found, display error message
        echo "Registration number not found. Please contact the administrator to create an account.";
    }
}


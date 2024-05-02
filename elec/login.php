<?php
session_start(); // Start a new session or resume the existing one

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form data
    $registrationNumber = $_POST['registration_number'];
    $password = $_POST['password'];

    // Read the file containing user data
    $userFound = false;
    $lines = file('users.txt', FILE_IGNORE_NEW_LINES);
    foreach ($lines as $line) {
        list($storedRegNum, $storedHash) = explode(',', $line);
        if ($registrationNumber == $storedRegNum && password_verify($password, $storedHash)) {
            $userFound = true;
            break;
        }
    }

    if ($userFound) {
        // Set session variables
        $_SESSION['user'] = $registrationNumber;

        // Redirect to the voting page after successful login
        echo "You are logged in successfully! You will be redirected to the vote page in 5 seconds.";
        echo '<meta http-equiv="refresh" content="5;url=vote.html">';
        exit();
    } else {
        echo "Invalid registration number or password.";
    }
}
?>

<?php
session_start();

if (!isset($_SESSION['user'])) {
    header('Location: login.html'); // Redirect to login if not logged in
    exit();
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $vote = $_POST['vote'];
    // Process the vote here (e.g., update a database or a file)
    file_put_contents('votes.txt', $vote . "\n", FILE_APPEND); // Simple example of recording votes to a text file

    echo "Thank you for voting! Your vote for " . htmlspecialchars($vote) . " has been recorded.";
}
?>

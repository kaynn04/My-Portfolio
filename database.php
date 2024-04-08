<?php
$servername = "localhost";
$username = "root";
$password = "";

$dbname = "user_portfolio_db";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
    echo "Connection failed!";
}
?>
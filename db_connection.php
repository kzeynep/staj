<?php

// Veritabanı bilgileri
$host = "localhost"; 
$username = "zeynep"; 
$password = "sifre"; 
$database = "market_bilgi_formu"; // Veritabanı adı

// Veritabanına bağlantı oluşturmak için
$conn = new mysqli($host, $username, $password, $database);


if ($conn->connect_error) {
    die("Veritabanına bağlanılamadı: " . $conn->connect_error);
}

?>

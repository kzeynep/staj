<?php

require_once 'db_connection.php';

class MarketModel {
    // Veritabanına yeni ürün eklemek için fonksiyon
    public static function addProduct($productName, $price, $quantity, $category, $total) {
        global $conn;

        $sql = "INSERT INTO products (product_name, price, quantity, category, total) 
                VALUES ('$productName', $price, $quantity, '$category', $total)";

        if ($conn->query($sql) === TRUE) {
            return true;
        } else {
            return false;
        }
    }

    // Veritabanından ürünleri çekmek için fonksiyon
    public static function getAllProducts() {
        global $conn;

        $sql = "SELECT * FROM products";
        $result = $conn->query($sql);

        $products = array();

        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $products[] = $row;
            }
        }

        return $products;
    }
}

?>

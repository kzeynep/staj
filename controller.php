<?php

require_once 'model.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Formdan gelen verileri almak i.in kullandım
    $productName = $_POST["productName"];
    $price = floatval($_POST["price"]);
    $quantity = floatval($_POST["quantity"]);
    $category = $_POST["category"];
    $total = $price * $quantity;

  
    $result = MarketModel::addProduct($productName, $price, $quantity, $category, $total);

    if ($result) {
        echo "Ürün başarıyla eklendi.";
    } else {
        echo "Ürün eklenirken bir hata oluştu.";
    }
}


$products = MarketModel::getAllProducts();

?>

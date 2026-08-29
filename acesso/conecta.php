<?php
    $servername = "localhost";
    $database = "";
    $username = "";
    $password = "";
    

    $conn = mysqli_connect($servername, $username, $password, $database);
    
    if ($conn->connect_error){
        die("Falha na conexão: " . $conn->connect_error);
    }
    
?>
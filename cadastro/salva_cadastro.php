<?php

require_once 'conecta.php';

$email = $_POST['email'];

// Prepare the SQL statement
$stmt = $conn->prepare("SELECT * FROM tab_usuario WHERE email = ?");
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();
// Check if email already exists
if ($result->num_rows > 0) {
    echo '<script>alert("Email já cadastrado!")
    window.history.go(-1);
    </script>';
    // Close the statement and connection
    $stmt->close();
    $conn->close();
    die();
}

$nome = $_POST['nome'];
$dn = $_POST['dn'];
$sexo = $_POST['sexo'];
$senha = $_POST['senha1'];

if (isset($_POST['nomesoc'])){
    $nomesoc = $_POST['nomesoc'];
}else{
    $nomesoc = "";
}

$sql = "INSERT INTO tab_usuario (nome, nomesoc, dn, sexo, senha, email) 
VALUES ('$nome', '$nomesoc', '$dn', '$sexo', '$senha', '$email')";

if ($conn->query($sql) === TRUE) {
    header("Location: ../index.php?salvo=1");
    exit;
} else {
    echo "<script>alert('OCORREU UM ERRO INESPERADO!')</script>";
}


?>
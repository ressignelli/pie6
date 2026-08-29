<?php

require_once 'conecta.php';

$email = $_POST['email'] ?? '';
$senha = $_POST['senha'] ?? '';

    $email = mysqli_real_escape_string($conn, $email);
    $senha = mysqli_real_escape_string($conn, $senha);

    $acesso = -1;

    $query = "SELECT * FROM tab_usuario WHERE email = '$email' AND BINARY senha = '$senha'";
    $verifica_cad = mysqli_query($conn, $query) or die("Erro!");
    if (mysqli_num_rows($verifica_cad) > 0){
        session_start();

        $row = mysqli_fetch_array($verifica_cad);
        $_SESSION['id'] = $row[0];

        header("Location:telaprincuser.php");
    }else{
        echo "<script>
                alert('Login, senha ou ID incorreto(s)!');
                window.history.go(-1);
              </script>";
              exit();
    }


 
?>

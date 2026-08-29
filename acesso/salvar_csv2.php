<?php
session_start();
$id = $_SESSION['id'] ?? 'anonimo'; // Identificador do usuário
$dados = json_decode(file_get_contents("php://input"), true);

// if (!$dados || !is_array($dados)) {
//     http_response_code(400);
//     echo "Dados inválidos.";
//     exit;
//}

$arquivo = "dados_glicemia_{$id}.csv";
$fp = fopen($arquivo, "w");

if ($fp === false) {
    http_response_code(500);
    echo "Erro ao abrir o arquivo.";
    exit;
}

// Cabeçalho
fputcsv($fp, ["Data", "Hora", "Glicemia", "Tipo", "TempoTipo"]);

// Dados
foreach ($dados as $linha) {
    fputcsv($fp, $linha);
}

fclose($fp);
echo "Dados salvos com sucesso!";

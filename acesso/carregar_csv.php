<?php
session_start();
$id = $_SESSION['id'] ?? 'anonimo';
$arquivo = "dados_pressao_{$id}.csv";

if (!file_exists($arquivo)) {
    echo json_encode([]);
    exit;
}

$dados = [];
if (($handle = fopen($arquivo, "r")) !== false) {
    $cabecalho = fgetcsv($handle); // Ignora a primeira linha
    while (($linha = fgetcsv($handle)) !== false) {
        $dados[] = $linha;
    }
    fclose($handle);
}

echo json_encode($dados);

<!DOCTYPE HTML>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" type="text/css"  href="acesso/acessouser.css" />
	<title>Acesso de Usuário</title>
</head>

<body>
<form id="formacesso"  method="POST" action="acesso/acesso_cadastro.php" autocomplete="off">

    <div id="titulocaduser">
        <h1>Acesso de Usuário</h1>
    </div>
<hr>
	<div style="align-items: center; gap: 8px;">
		<label style="font-weight: bold;">E-mail: <input type="email" name="email" id="email" placeholder="e-mail" style="width: 300px;" required></label><br><br>
    	<label style="font-weight: bold;">Senha: <input type="password" name="senha" id="senha" style="width: 150px; " placeholder="senha" required></label>
		<hr><br><a href="javascript:esqueceu_acesso()">Esqueceu seu acesso, clique aqui e siga as instruções !!</a>
	</div>
<hr>
	<div>
		<button style="font-weight: bold;" id="entrar" type="submit">Entrar</button>
	</div>
</form>
    <div id="eventModalEsqSenha">
        <!-- enviar o e-mail com a nova senha e o ID -->
            <h2>Solicitar acesso</h2><hr><br>
            <label><strong>Digite o e-mail cadastrado: </strong></label><input type="email" name="email" id="email" maxlength="50" style="width: 220px;" placeholder="Login/e-mail" required><br><br>
            <button type="button">Solicitar</button>&nbsp;&nbsp;
            <button id="btnModalFechar">Cancelar</button></center>
    </div>

</body>
<script>

    const newEvent = document.getElementById('EventModalEsqSenha');

    newEvent.style.display = 'none';
    document.getElementById('btnModalFechar').addEventListener('click',()=>closeModal());
    function closeModal(){
        newEvent.style.display = 'none';
    }
    function esqueceu_acesso(){
        newEvent.style.display = 'block';
    }

</script> 
</html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="../assets/css/estilo.css">
</head>
<body>
    <div id="container-login">
        <div id="topo-container-login">
            <img src="../assets/img/logo.png" alt="Logo" width="50" height="50">
            <h1>Bem-vindo de volta</h1>
            <span>Faça login para continuar</span>
        </div>
        <form action="login.php" method="POST">
            <label for="email">Email:</label>
            <input type="email" id="email" class="input-padrao" name="email" placeholder="Digite seu email"><br>
            <label for="senha">Senha:</label>
            <input type="password" id="senha" class="input-padrao" name="senha" placeholder="Digite sua senha"><br>
            <div id="acoes">
                <label for="lembrar">
                    <input type="checkbox" id="lembrar" name="lembrar">
                    Lembrar-me
                </label>

                <span><a href="#">Esqueci a senha</a></span>
            </div>
            <input type="submit" id="botao-entrar" value="Entrar no Sistema">
        </form>

        <div id="rodape-container-login">
            <span>Não tem uma conta? <a href="#">Criar agora</a></span>
        </div>
    </div>
</body>
</html>
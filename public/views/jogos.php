<?php

require_once __DIR__ . '/../assets/api/jogos.php';
$jogos = jogos_listar();

?>

<div id="container-jogos">

<?php
    while ($jogo = array_shift($jogos)) {
?>
    <div id="card-jogos">
        <div class="card-topo">
            <span class="imagem-jogo">
                <img src="<?= $jogo['imagem'] ?>" alt="<?= $jogo['nome'] ?>">
            </span> 
            <span class="badge-jogo"><?=  $jogo['quantidade_jogadores'] ?> jogadores</span>
        </div>
        <div class="card-meio">
            <span class="classificacao-jogo"><?= $jogo['classificacao'] ?></span>
            <span class="nome-jogo"><?= $jogo['nome'] ?></span>
            <span class="descricao-jogo"><?= $jogo['descricao'] ?></span>
        </div>
        <div class="card-baixo">
            <span class="preco-jogo">R$ 2</span>
            <button class="botao-jogar">Jogar</button>
        </div>
    </div>

<?php } ?>
    
</div>
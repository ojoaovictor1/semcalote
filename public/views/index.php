<?php 
  include '../config/config.php';
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>teste</title>
  <link rel="stylesheet" href="<?= BASE_CSS ?>">

  <!-- Notyf -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/notyf@3/notyf.min.css">
  
  <!-- jQuery -->
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

  <style>
    .area-conteudo {
      flex: 1;
      background-color: var(--bg-base);
      padding: 24px;
      display: flex;
      flex-direction: column;
    }

  </style>
</head>
<body>

 <?php include(__DIR__ . '/../partials/nav.php') ?>
 
  <div class="corpo-aplicacao">

    <?php include(__DIR__ . '/../partials/sidebar.php') ?>

    <div class="area-conteudo">
      <div class="conteudo-vazio">
        teste2
        conteudo principal <br>

  
  <button id="notyf-success" onclick="mostrarToast('success', 'teste sucesso!')">Successo</button>
  <button id="notyf-error" onclick="mostrarToast('error', 'teste erro!')">Erro</button>
  <button id="notyf-custom" onclick="mostrarToast('warning', 'teste aviso!')">Aviso</button>
  <button id="notyf-dismiss" onclick="notyf.dismissAll()">Fechar todos</button>
      </div>
    </div>


  </div>
<script src="https://cdn.jsdelivr.net/npm/notyf@3/notyf.min.js"></script>
<script src="<?= BASE_URL ?>/assets/js/menu/menu.js"></script>
<script src="<?= BASE_URL ?>/assets/js/toast.js"></script>
<script src="<?= BASE_URL ?>/assets/js/funcoes.js"></script>

</body>
</html>
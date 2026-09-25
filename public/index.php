<?php 
  include 'config/config.php';
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>teste</title>
  <link rel="stylesheet" href="<?= BASE_CSS ?>">
  <style>
    .area-conteudo {
      flex: 1;
      background-color: var(--bg-base);
      padding: 24px;
      display: flex;
      flex-direction: column;
    }

    .conteudo-vazio {
      border: 1px dashed var(--border-color);
      border-radius: 8px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--text-muted);
      font-size: 14px;
      background-color: rgba(255, 255, 255, 0.01);
    }
  </style>
</head>
<body>

 <?php include(__DIR__ . '/partials/nav.php') ?>
 
  <div class="corpo-aplicacao">

    <?php include(__DIR__ . '/partials/sidebar.php') ?>

    <div class="area-conteudo">
      <div class="conteudo-vazio">
        conteudo principal
      </div>
    </div>


  </div>

</body>
</html>
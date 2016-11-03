<?php
    session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link rel="stylesheet" href="css/bootstrap-theme.min.css"/>
    <link rel="stylesheet" href="css/bootstrap.min.css"/>
    <link rel="stylesheet" href="css/style.css"/>
    <link rel="stylesheet" href="css/authorization.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/angular.min.js"></script>
    <script src="js/desing.js"></script>
</head>
<body>

    <?php

        include_once 'server_scripts/link_builder.php';

    ?>

    <main>
        <div id="header">
            <div id="name">MusHub</div>
        </div>
        <div class="sigh_in">
            <h3>Please press button to sign in</h3>
            <a href="<?php echo $link ?>"><div style="margin-top: 100px" class="btn btn-large btn-primary">Sign in</div></a>
        </div>
    </main>


</body>
</html>
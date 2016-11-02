<?php

    $list_music = json_decode(file_get_contents('https://api.vk.com/method/audio.get?owner_id=-'.$_SESSION['user_id'].'&access_token='.$_SESSION['access_token'].'&v=5.59 '),true);

    echo $_COOKIE['user_id'];

    $_COOKIE['music_list'] = $list_music;



        echo json_encode($_COOKIE['music_list']);




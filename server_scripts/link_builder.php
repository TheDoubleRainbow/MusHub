<?php
$client_id = '5702466';
$client_secret = 'qD1vi5NiPH6HAYk8weRK';
$redirect_uri = 'http://hakaton2016/server_scripts/authorization.php';
$url = 'https://oauth.vk.com/authorize';
$params = array(
    'client_id'     => $client_id,
    'redirect_uri'  => $redirect_uri,
    'response_type' => 'code'
);
$link = $url . '?' . urldecode(http_build_query($params));
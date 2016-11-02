<?php
		include 'link_builder.php';
		if (isset($_GET['code'])) {
		$params = array(
			'client_id' => $client_id,
			'client_secret' => $client_secret,
			'code' => $_GET['code'],
			'redirect_uri' => $redirect_uri
		);

		$token = json_decode(file_get_contents('https://oauth.vk.com/access_token' . '?' . urldecode(http_build_query($params))),true);

			
		include('db_work.php');
		$db = new db_work();

		if($db->Check($_SESSION['user_id'])) {
			$db->Add($token['user_id']);
		}

		echo $token['user_id'];

	}








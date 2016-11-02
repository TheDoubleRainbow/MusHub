<?php
class db_work
{
    var $link;
    protected function connect_db()
    {
        $this->link = mysql_connect('localhost', 'admin1', 'cbh200uhfv')
        or die('Не удалось соединиться: ' . mysql_error());
        $db_name = 'music_hub';
        mysql_select_db($db_name) or die('Не удалось выбрать базу данных');
    }
    protected function end_work($result)
    {
        mysql_free_result($result);

        mysql_close();
    }
    public function Add($user_id, $user_token)
    {

        connect_db();

        $user_info = json_decode(file_get_contents('https://api.vk.com/method/account.getProfileInfo?user_ids=' . $user_id . '&first_name,last_name&v=5.59'));

        $user_name = $user_info['first_name'] + $user_info['last_name'];

        echo 'full shit';

        $query = 'INSERT INTO authorizate_user (name,vk_id,token) VALUES(' . $user_name . ',' . $user_id . ',' . $user_token . ')';

        $result = mysql_query($query) or die('Запрос не удался: ' . mysql_error());

        end_work($this->link,$result);
    }

    function Check($user_id){
        $this->connect_db();
        echo $user_id;
        $query = 'SELECT vk_id FROM authorizate_user WHERE vk_id ='.$user_id;
        $result = mysql_query($query) or die('Запрос не удался: ' . mysql_error());
        echo 'pzdts';
        end_work($result,$this->link);
    }

}
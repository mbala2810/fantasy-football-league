<?php

$message = '';

$db = new mysqli('localhost', 'someuser', 'hello123', 'Football');

if ($db->connect_error){
	$message = $db->connect_error;
}
else{
	echo $message;
}
?>
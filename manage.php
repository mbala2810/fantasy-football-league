<?php
 
	include 'connection.php';
 
	$n = $_POST['teamname'];
	//$n = 1;
	$sql = "SELECT p.PlayerId, p.FirstName, p.LastName, t.Name, p.Position from players p, user u, squad s, team t where p.PlayerId = s.PlayerId and s.UserId = u.UserId and u.Username = '".$n."' and t.TeamId = p.TeamId";

	$val = mysqli_query( $db, $sql);
	if(! $val){
		die('Could not get data : ' . mysqli_connect_error());
	}
	$array = array();
	while($row = mysqli_fetch_array($val, MYSQLI_ASSOC)){
		$array[] = $row;
	}
	header("Content-type:application/json"); 
	echo json_encode($array);
	mysqli_close($db);
?>
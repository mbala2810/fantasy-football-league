<?php
 
	include 'connection.php';
 
	$n = $_POST['teamname'];
	//$n = 1;
	$a = "SELECT s.UserId from squad s, user u where u.UserId = s.UserId and u.Username = '".$n."'";
	$val = mysqli_query($db, $a);
	$result = mysqli_fetch_array($val);
	if(count($result) >= 1){
		echo "0";
	}
	else {
	$sql = "SELECT p.PlayerId, p.FirstName, p.LastName, t.Name, p.Nationality, p.DateOfBirth, p.Position, p.Price from players p, team t WHERE t.TeamId = p.TeamId";

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
	}
?>